import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
	protected tableName = 'messages'

	async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.integer('conversation_id').unsigned().references('id').inTable('conversations').onDelete('CASCADE')
			table.integer('sender_id').unsigned().notNullable()
			table.text('content').notNullable()
			table.timestamp('read_at').nullable()
			table.timestamp('created_at').notNullable()
		})
	}

	async down() {
		this.schema.dropTable(this.tableName)
	}
}