import Exam from '#models/exam'
import Question from '#models/question'
import type { HttpContext } from '@adonisjs/core/http'

export default class ExamAuthoringsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext)
  {
    const exams = await Exam.all()
    return exams
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) 
  {
    const body = request.body()

    const exam = await Exam.create({
      title: body.title ?? '(null)',
      lessonRelatedId: body.lesson_related_id ?? null,
      userId: body.user_id ?? null,
    })

    // Attach questions with their position and points
    if (body.questions && Array.isArray(body.questions)) {
      const questionsData: Record<number, { position: number; points: number }> = {}
      
      for (const q of body.questions) {
        questionsData[q.id] = {
          position: q.position ?? 0,
          points: q.points ?? 0,
        }
      }
      
      await exam.related('questions').attach(questionsData)
    }

    return exam
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const exam = await Exam.find(params.id)
    if (!exam)
      return { error: "Exam not found" }
    return (exam)  }

  async showQuestion({ params }: HttpContext) {
    const question = await Question.find(params.id)
    if (!question)
      return { error: "Question not found" }
    return question
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext)
  {
    const exam = await Exam.find(params.id)
    if (!exam)
      return { error: "Exam not found" }
    await exam.delete()
    return { message: "Exam " + exam.id + " deleted successfully" }
  }
}