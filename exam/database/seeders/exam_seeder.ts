import { ExamFactory } from '#database/factories/exam_factory'
import { QuestionFactory } from '#database/factories/question_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const exams = await ExamFactory.createMany(10)
    const questions = await QuestionFactory.createMany(100)
  }
}