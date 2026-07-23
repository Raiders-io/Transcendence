import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'
import ExamPaper from '#models/exam_paper'
import ExamPaperAnswer from '#models/exam_paper_answer'
import Exam from '#models/exam'
import ExamsQuestion from '#models/exams_question'
import Question from '#models/question'

export default class ExamPapersController {
  private async resolveUserId(auth: HttpContext['auth']) {
    try {
      const user = await auth.authenticate()
      return user.id
    } catch {
      return null
    }
  }

  /**
   * Display a list of exam papers for the authenticated user
   */
  async index({ auth, request }: HttpContext) {
    const userId = await this.resolveUserId(auth)
    if (!userId) {
      return { error: 'Unauthorized' }
    }

    const page = request.input('page', 1)
    const limit = request.input('limit', 15)

    const papers = await ExamPaper.query()
      .where('user_id', userId)
      .preload('exam')
      .paginate(page, limit)

    return papers
  }

  /**
   * Create and start a new exam paper
   */
  async store({ auth, request }: HttpContext) {
    const userId = await this.resolveUserId(auth)
    if (!userId) {
      return { error: 'Unauthorized' }
    }

    const { examId } = request.only(['examId'])

    // Verify exam exists
    const exam = await Exam.find(examId)
    if (!exam) {
      return { error: 'Exam not found' }
    }

    // Create exam paper
    const examPaper = await ExamPaper.create({
      userId,
      examId,
      startedAt: DateTime.now(),
    })

    // Get all questions for this exam and create answer records
    const examsQuestions = await ExamsQuestion.query()
      .where('exam_id', examId)

    for (const examQuestion of examsQuestions) {
      await ExamPaperAnswer.create({
        examPaperId: examPaper.id,
        examsQuestionId: examQuestion.id,
        answer: null,
        isCorrect: null,
      })
    }

    return { id: examPaper.id, status: examPaper.status }
  }

  /**
   * Get a specific exam paper with all answers
   */
  async show({ auth, params }: HttpContext) {
    const userId = await this.resolveUserId(auth)
    if (!userId) {
      return { error: 'Unauthorized' }
    }

    const examPaper = await ExamPaper.query()
      .where('id', params.id)
      .where('user_id', userId)
      .preload('exam')
      .preload('answers', (query: any) => {
        query.preload('examsQuestion', (q: any) => {
          q.preload('question')
        })
      })
      .first()

    if (!examPaper) {
      return { error: 'Exam paper not found' }
    }

    return {
      id: examPaper.id,
      examId: examPaper.examId,
      status: examPaper.status,
      score: examPaper.score,
      totalPoints: examPaper.totalPoints,
      startedAt: examPaper.startedAt,
      completedAt: examPaper.completedAt,
      exam: examPaper.exam,
      answers: examPaper.answers,
    }
  }

  /**
   * Update answers for an exam paper
   */
  async update({ auth, params, request }: HttpContext) {
    const userId = await this.resolveUserId(auth)
    if (!userId) {
      return { error: 'Unauthorized' }
    }

    const examPaper = await ExamPaper.query()
      .where('id', params.id)
      .where('user_id', userId)
      .first()

    if (!examPaper) {
      return { error: 'Exam paper not found' }
    }

    const { answers, submit } = request.only(['answers', 'submit'])

    if (answers && Array.isArray(answers)) {
      for (const answerData of answers) {
        const answer = await ExamPaperAnswer.query()
          .where('id', answerData.id)
          .where('exam_paper_id', examPaper.id)
          .first()

        if (answer) {
          answer.answer = answerData.answer
          await answer.save()
        }
      }
    }

    // If submitting, calculate score and mark as submitted
    if (submit) {
      const updatedAnswers = await ExamPaperAnswer.query()
        .where('exam_paper_id', examPaper.id)
        .preload('examsQuestion', (q: any) => {
          q.preload('question')
        })

      let score = 0
      let totalPoints = 0

      for (const answer of updatedAnswers) {
        const examsQuestion = answer.examsQuestion
        const question = examsQuestion.question as Question
        const points = examsQuestion.points || 0
        totalPoints += points

        // Check if answer is correct
        const isCorrect = await this.checkAnswer(
          question,
          answer.answer,
          question.questionType || 'DEFAULT'
        )

        answer.isCorrect = isCorrect
        if (isCorrect) {
          score += points
        }

        await answer.save()
      }

      examPaper.score = score
      examPaper.totalPoints = totalPoints
      examPaper.status = 'submitted'
      examPaper.completedAt = DateTime.now()
      await examPaper.save()
    }

    return { success: true, examPaper }
  }

  /**
   * Delete an exam paper
   */
  async destroy({ auth, params }: HttpContext) {
    const userId = await this.resolveUserId(auth)
    if (!userId) {
      return { error: 'Unauthorized' }
    }

    const examPaper = await ExamPaper.query()
      .where('id', params.id)
      .where('user_id', userId)
      .first()

    if (!examPaper) {
      return { error: 'Exam paper not found' }
    }

    await examPaper.delete()
    return { success: true }
  }

  /**
   * Helper method to check if an answer is correct
   */
  private async checkAnswer(
    question: Question,
    userAnswer: string | null,
    questionType: string
  ): Promise<boolean> {
    if (!userAnswer) {
      return false
    }

    const goodAnswers = question.goodAnswers as string[] || []

    if (questionType === 'MCQ' || questionType === 'TRUE_FALSE') {
      // For MCQ and TRUE_FALSE, answer should match one of the good answers
      return goodAnswers.includes(userAnswer.trim())
    }

    if (questionType === 'TEXT') {
      // For text answers, do case-insensitive comparison
      return goodAnswers.some(
        (answer) => answer.toLowerCase().trim() === userAnswer.toLowerCase().trim()
      )
    }

    // DEFAULT question type
    return goodAnswers.includes(userAnswer.trim())
  }
}

