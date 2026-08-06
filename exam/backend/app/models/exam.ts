import { ExamSchema } from '#database/schema'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { manyToMany } from '@adonisjs/lucid/orm'
import Question from './question.ts'

export default class Exam extends ExamSchema {
  @manyToMany(() => Question, {
    pivotTable: 'exams_questions',
    localKey: 'id',
    relatedKey: 'id',
    pivotForeignKey: 'exam_id',
    pivotRelatedForeignKey: 'question_id',
  })
  declare questions: ManyToMany<typeof Question>
}