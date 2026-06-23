import { Server, Socket } from 'socket.io'
import Message from '#models/message'
import Conversation from '#models/conversation'
import { DateTime } from 'luxon'
import db from '@adonisjs/lucid/services/db'

export default class ChatService {

	private io: Server

	constructor(io: Server) {
		this.io = io
	}

	async handle(socket: Socket) {
		const userId: number = socket.handshake.auth.userId
		socket.join(`user:${userId}`)
		const rows = await db
			.from('conversation_participants')
			.where('user_id', userId)
			.select('conversation_id')
		for (const row of rows)
			socket.join(`conversation:${row.conversation_id}`)
        socket.on('conversation:create', (data) => this.handleCreate(socket, userId, data))
        socket.on('conversation:join', (data) => {
			const parsedData = typeof data === 'string' ? JSON.parse(data) : data
			const conversationId: number = parsedData.conversationId
			this.handleJoin(socket, userId, conversationId)
		})
        socket.on('message:send', (data) => {
			console.log('data:', data)
			const parsedData = typeof data === 'string' ? JSON.parse(data) : data
			console.log('parsedData:', parsedData)
			this.handleSend(socket, userId, parsedData)
		})
        socket.on('disconnect', () => console.log(`User ${userId} disconnected`))
	}

	private async isParticipant(conversationId: number, userId: number): Promise<boolean> {
		console.log('conversationId:', conversationId, 'type:', typeof conversationId)
		console.log('userId:', userId, 'type:', typeof userId)
		const participant = await db
			.from('conversation_participants')
			.where('conversation_id', conversationId)
			.where('user_id', userId)
			.first()
		return !!participant
	}

	private async handleCreate(socket: Socket, userId: number, data: { participantIds: number[] }) {
		try {
			const parsedData = typeof data === 'string' ? JSON.parse(data) : data
			const allIds = [userId, ...parsedData.participantIds]
			const uniqueIds = [...new Set(allIds)]
			const memberIds = uniqueIds.sort((a, b) => a - b)

			const existing = await db
				.from('conversation_participants')
				.select('conversation_id')
				.whereIn('user_id', memberIds)
				.groupBy('conversation_id')
				.havingRaw('count(distinct user_id) = ?', [memberIds.length])

			let conversationId: number | null = null
			for (const row of existing) {
				const count = await db
					.from('conversation_participants')
					.where('conversation_id', row.conversation_id)
					.count('* as total')
				if (Number(count[0].total) === memberIds.length) {
					conversationId = row.conversation_id
					break
				}
			}

			if (conversationId === null) {
				const conversation = await Conversation.create({})
				conversationId = conversation.id
				const participants = memberIds.map((id) => ({
					conversation_id: conversationId,
					user_id: id,
					joined_at: DateTime.now().toISO(),
				}))
				await db.table('conversation_participants').insert(participants)
			}

			socket.join(`conversation:${conversationId}`)
			socket.emit('conversation:created', { conversationId })
		}
		catch (error) {
			console.error('handleCreate error:', error)
			socket.emit('error', { message: 'Internal server error' })
		}
	}

	private async handleJoin(socket: Socket, userId: number, conversationId: number) {
		try {
			if (!await this.isParticipant(conversationId, userId)) {
				socket.emit('error', { message: 'Not a participant' })
				return
			}
			socket.join(`conversation:${conversationId}`)
			socket.emit('conversation:joined', { conversationId })
		}
		catch (error) {
			console.error('handleCreate error:', error)
			socket.emit('error', { message: 'Internal server error' })
    	}
	}

	private async handleSend(socket: Socket, userId: number, data: {conversationId: number, content: string}) {
		try {
			if (!await this.isParticipant(data.conversationId, userId)) {
				socket.emit('error', { message: 'Not a participant' })
				return
			}
			const message = await Message.create({
				conversationId: data.conversationId,
				senderId: userId,
				content: data.content,
			})
			this.io
				.to(`conversation:${data.conversationId}`)
			.emit('message:received', message)
		}
		catch (error) {
			console.error('handleCreate error:', error)
			socket.emit('error', { message: 'Internal server error' })
    	}
	}
}