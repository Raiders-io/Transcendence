import Exam from '#models/exam'
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

    const data = {
      title: body.title ?? '(null)',
      lessonRelatedId: body.lesson_related_id ?? null,
      userId: body.user_id ?? null,
    }

    const exam = await Exam.create(data)
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

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}