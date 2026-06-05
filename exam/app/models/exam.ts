import { ExamSchema } from '#database/schema'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Question from './question.ts'

export default class Exam extends ExamSchema {
    declare question: ManyToMany<typeof Question>
}