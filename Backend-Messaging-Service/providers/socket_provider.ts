import { Server, Socket } from 'socket.io'
import { Redis } from 'ioredis'
import { createAdapter } from '@socket.io/redis-adapter'
import app from '@adonisjs/core/services/app'
import server from '@adonisjs/core/services/server'
import ChatService from '#services/chat_service'

declare module '@adonisjs/core/types' {
	interface ContainerBindings {
		'socket.io': Server
	}
}

export default class SocketProvider {
	async ready(): Promise<void> {
		try {
			const httpServer = server.getNodeServer()

			const io: Server = new Server(httpServer, {
				cors: { origin: '*' }
			})

			const pubClient: Redis = new Redis({ host: 'redis', port: 6379 })
			const subClient: Redis = pubClient.duplicate()
			io.adapter(createAdapter(pubClient, subClient))

			io.use(async (socket: Socket, next: (err?: Error) => void): Promise<void> => {
				const token = socket.handshake.auth.token || socket.handshake.headers.authorization?.replace("Bearer ", "");
				try {
					const response: Response = await fetch('http://auth-service:3333/auth/verify', {
						headers: { Authorization: `Bearer ${token}` }
					})
					if (!response.ok)
						throw new Error('Invalid token')
					const body = await response.json() as { data: { userId: number } }
					const userId: number = body.data.userId
					socket.handshake.auth.userId = userId
					next()
				} catch {
					next(new Error('Unauthorized'))
				}
			})

			const chatService: ChatService = new ChatService(io)

			io.on('connection', (socket: Socket): void => {
				chatService.handle(socket)
			})

			app.container.bindValue('socket.io', io)
		} catch (error) {
			console.error('Error:', error)
		}
	}
}