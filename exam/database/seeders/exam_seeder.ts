import { ExamFactory } from '#database/factories/exam_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const exams = await ExamFactory.createMany(10)
  }
}