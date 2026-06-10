import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
	protected tableName = 'conversation_participants'

	async up() {
	this.schema.createTable(this.tableName, (table) => {
		table.increments('id')
		table.integer('conversation_id').unsigned().references('id').inTable('conversations').onDelete('CASCADE')
		table.integer('user_id').unsigned().notNullable()
		table.timestamp('joined_at').notNullable()
	})
	}

	async down() {
	this.schema.dropTable(this.tableName)
	}
}