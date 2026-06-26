import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import Conversation from '#models/conversation'
import Message from '#models/message'

export default class ConversationsController {
	async index(ctx: HttpContext) {
		const userId = ctx.userId

		const rows = await db
			.from('conversation_participants')
			.where('user_id', userId)
			.select('conversation_id')

		const conversationIds = rows.map((r) => r.conversation_id)
		if (conversationIds.length === 0)
			return ctx.response.ok({ data: [] })

		const conversations = await Conversation.query()
			.whereIn('id', conversationIds)
			.orderBy('updated_at', 'desc')

		const participants = await db
			.from('conversation_participants')
			.whereIn('conversation_id', conversationIds)
			.select('conversation_id', 'user_id')

		const data = conversations.map((c) => ({
			id: c.id,
			participantIds: participants
				.filter((p) => p.conversation_id === c.id)
				.map((p) => p.user_id),
			createdAt: c.createdAt,
			updatedAt: c.updatedAt,
		}))

		return ctx.response.ok({ data })
	}

	async messages(ctx: HttpContext) {
		const userId = ctx.userId
		const conversationId = Number(ctx.params.id)

		const participant = await db
			.from('conversation_participants')
			.where('conversation_id', conversationId)
			.where('user_id', userId)
			.first()

		if (!participant)
			return ctx.response.forbidden({ message: 'Not a participant' })

		const messages = await Message.query()
			.where('conversation_id', conversationId)
			.orderBy('created_at', 'asc')

		return ctx.response.ok({ data: messages })
	}
}