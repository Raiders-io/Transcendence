import { ExamPaperSchema } from '#database/schema'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import User from './user.ts'
import Exam from './exam.ts'
import ExamPaperAnswer from './exam_paper_answer.ts'

export default class ExamPaper extends ExamPaperSchema {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Exam)
  declare exam: BelongsTo<typeof Exam>

  @hasMany(() => ExamPaperAnswer)
  declare answers: HasMany<typeof ExamPaperAnswer>
}