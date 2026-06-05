import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'exams_questions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('exam_id').unsigned()
      table.integer('question_id').unsigned()
      table.integer('position').unsigned().defaultTo(0)
      table.integer('points').unsigned().nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')

      // Foreign key constraints
      table.foreign('exam_id').references('id').inTable('exams').onDelete('CASCADE')
      table.foreign('question_id').references('id').inTable('questions').onDelete('CASCADE')

      // Unique constraint: one question per exam position
      table.unique(['exam_id', 'question_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}