import { BaseSchema } from '@adonisjs/lucid/schema'

export enum QuestionType
{
    DEFAULT="DEFAULT",
    MCQ="MCQ",
    TEXT="TEXT",
    TRUE_FALSE="TRUE_FALSE",
}

export default class extends BaseSchema {
  protected tableName = 'questions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.enum('question_type', Object.values(QuestionType)).defaultTo(QuestionType.DEFAULT)
      table.json('good_answers').nullable()
      table.json('bad_answers').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}