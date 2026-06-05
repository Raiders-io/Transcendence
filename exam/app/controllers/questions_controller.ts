import type { HttpContext } from '@adonisjs/core/http'
import Question from '#models/question'

export default class QuestionsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext)
  {
    const question = await Question.find(params.id)
    if (!question)
      return { error: "Question not found" }
    return { id: question.id, title: question.title }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}

}