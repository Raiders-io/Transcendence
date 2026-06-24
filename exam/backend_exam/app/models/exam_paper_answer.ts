import { ExamPaperAnswerSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import ExamPaper from './exam_paper.ts'
import ExamsQuestion from './exams_question.ts'

export default class ExamPaperAnswer extends ExamPaperAnswerSchema {
  @belongsTo(() => ExamPaper)
  declare examPaper: BelongsTo<typeof ExamPaper>

  @belongsTo(() => ExamsQuestion)
  declare examsQuestion: BelongsTo<typeof ExamsQuestion>
}

