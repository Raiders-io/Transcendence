import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'exam_papers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      table.integer('user_id').unsigned().notNullable()
      table.integer('exam_id').unsigned().notNullable()
      
      table.timestamp('started_at').notNullable()
      table.timestamp('completed_at').nullable()
      
      table.integer('score').unsigned().nullable()
      table.integer('total_points').unsigned().nullable()
      
      table.enum('status', ['draft', 'submitted', 'graded']).defaultTo('draft')

      table.timestamp('created_at')
      table.timestamp('updated_at')
      
      // Foreign keys
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('exam_id').references('id').inTable('exams').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}