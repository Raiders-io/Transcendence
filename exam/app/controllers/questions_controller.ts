import type { HttpContext } from '@adonisjs/core/http'
import Question from '#models/question'

export default class QuestionsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const questions = await Question.all()
    return questions
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const body = request.only(['title', 'questionType', 'goodAnswers', 'badAnswers'])

    const question = await Question.create({
      title: body.title,
      questionType: body.questionType || 'DEFAULT',
      goodAnswers: body.goodAnswers ? JSON.stringify(body.goodAnswers) : JSON.stringify([]),
      badAnswers: body.badAnswers ? JSON.stringify(body.badAnswers) : JSON.stringify([]),
    })

    return question
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext)
  {
    const question = await Question.find(params.id)
    if (!question)
      return { error: "Question not found" }
    return question
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext)
  {
    const question = await Question.find(params.id)
    if (!question)
      return { error: "Question not found" }

    const body = request.only(['title', 'questionType', 'goodAnswers', 'badAnswers'])

    question.title = body.title ?? question.title
    question.questionType = body.questionType ?? question.questionType
    question.goodAnswers = body.goodAnswers ?? question.goodAnswers
    question.badAnswers = body.badAnswers ?? question.badAnswers

    await question.save()
    return question
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const question = await Question.find(params.id)
    if (!question)
      return { error: "Question not found" }

    await question.delete()
    return { message: `Question ${params.id} deleted successfully` }
  }
}
