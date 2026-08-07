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
		const rows = await db
			.from('conversation_participants')
			.where('user_id', userId)
			.select('conversation_id')
		const conversationIds = rows.map((row) => row.conversation_id)
		await db.from('messages').where('sender_id', userId).delete()
		await db.from('conversation_participants').where('user_id', userId).delete()
		for (const conversationId of conversationIds) {
			const remainingConvs = await db
				.from('conversation_participants')
				.where('conversation_id', conversationId)
				.count('* as total')
			const participantsNb = Number(remainingConvs[0].total)
			if (participantsNb === 0) {
				await db.from('messages').where('conversation_id', conversationId).delete()
				await db.from('conversations').where('id', conversationId).delete()
			}
		}
	}
}