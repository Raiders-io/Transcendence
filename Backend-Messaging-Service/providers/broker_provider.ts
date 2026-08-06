import type { ApplicationService } from '@adonisjs/core/types'
import { consume, Broker } from '@yosone/broker'
import UserEventsConsumer from '#services/user_events_consumer'
import env from '#start/env'

export default class BrokerProvider {
	constructor(protected app: ApplicationService) {}

	async ready(): Promise<void> {
		Broker.init(
			env.get('BROKER_GROUP'),
			env.get('BROKER_CONSUMER'),
			env.get('REDIS_URL'),
		)
		const consumer = new UserEventsConsumer()
		//Replace by STREAM.USERS when the borker will provide the STREAM object
		void consume('user.events')
			.on('user.deleted', async (event) => {
				//Remove "as" when when the broker will provide interface
				await consumer.handleUserDeleted(event.payload as { userId: string })
			})
			.start()
	}
}