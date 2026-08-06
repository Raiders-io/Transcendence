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
		//TODO delete user data
	}
}