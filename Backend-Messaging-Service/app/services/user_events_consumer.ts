import db from '@adonisjs/lucid/services/db'
import { MsgMinorError } from '@yosone/broker'

//Remove this when the broker will provide interface
interface UserDeletedPayload {
	userId: string
}

export default class UserEventsConsumer {
	async handleUserDeleted(payload: UserDeletedPayload): Promise<void> {
		const userId = payload?.userId
		if (!userId)
			throw new MsgMinorError('userId missing')
		await db.from('messages').where('sender_id', userId).delete()
		await db.from('conversation_participants').where('user_id', userId).delete()
		await db.from('conversations')
			.whereNotExists((query) => {
				query.from('conversation_participants')
					.whereColumn('conversation_participants.conversation_id', 'conversations.id')
			})
			.delete()
	}
}