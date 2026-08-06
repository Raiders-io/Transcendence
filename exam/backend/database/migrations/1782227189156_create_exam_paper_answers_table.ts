import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'exam_paper_answers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      table.integer('exam_paper_id').unsigned().notNullable()
      table.integer('exams_question_id').unsigned().notNullable()
      
      table.text('answer').nullable()
      table.boolean('is_correct').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
      
      // Foreign keys
      table.foreign('exam_paper_id').references('id').inTable('exam_papers').onDelete('CASCADE')
      table.foreign('exams_question_id').references('id').inTable('exams_questions').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
