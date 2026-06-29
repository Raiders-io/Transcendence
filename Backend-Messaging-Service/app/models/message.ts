import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Conversation from '#models/conversation'

export default class Message extends BaseModel {
	@column({ isPrimary: true })
	declare id: number

	@column()
	declare conversationId: number

	@column()
	declare senderId: string

	@column()
	declare content: string

	@column()
	declare readAt: DateTime | null

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime

	@belongsTo(() => Conversation)
	declare conversation: BelongsTo<typeof Conversation>
}