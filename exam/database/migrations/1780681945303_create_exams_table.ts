import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'exams'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.uuid('lesson_related_id').nullable()
      table.integer('user_id').unsigned()
      table.timestamp('created_at')
      table.timestamp('updated_at')

      // Foreign key constraint
      // table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}