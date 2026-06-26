/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'


router
	.group(() => {
		router.get('conversations', [controllers.Conversations, 'index'])
		router.get('conversations/:id/messages', [controllers.Conversations, 'messages'])
	})
	.prefix('/messaging')
	.use(middleware.verifyToken())