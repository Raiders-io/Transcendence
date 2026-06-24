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

    let { title, lesson_related_id, user_id, questions } = request.only(['title', 'lesson_related_id', 'user_id', 'questions'])

    const exam = await Exam.create({
      title: title ?? '(null)',
      lessonRelatedId: lesson_related_id ?? null,
      userId: user_id ?? null,
    })

    // Attach questions with their position and points
    if (questions && Array.isArray(questions)) {
      for (const q of questions) {
        const question = await Question.find(q.id)
        if (!question) {
          return { error: `Question with ID ${q.id} not found`, status: 404 }
        }
        await exam.related('questions').attach({
          [q.id]: {
            position: q.position ?? 0,
            points: q.points ?? 0,
          }
        })
      }
    }

    // Reload exam with questions
    await exam.load('questions')
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