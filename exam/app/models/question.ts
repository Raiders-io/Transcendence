import { QuestionSchema } from '#database/schema'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Exam from './exam.ts'
import { manyToMany } from '@adonisjs/lucid/orm'

export enum QuestionType
{
    DEFAULT = 'DEFAULT',
    MCQ = 'MCQ',
    TEXT = 'TEXT',
    TRUE_FALSE = 'TRUE_FALSE',
}

export default class Question extends QuestionSchema
{
    @manyToMany(() => Exam, {
        pivotTable: 'exams_questions',
        localKey: 'id',
        relatedKey: 'id',
        pivotForeignKey: 'question_id',
        pivotRelatedForeignKey: 'exam_id',
    })
  declare Exam: ManyToMany<typeof Exam>
}
