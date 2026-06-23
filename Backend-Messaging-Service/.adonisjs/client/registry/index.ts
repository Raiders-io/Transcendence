/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'conversations.index': {
    methods: ["GET","HEAD"],
    pattern: '/messaging/conversations',
    tokens: [{"old":"/messaging/conversations","type":0,"val":"messaging","end":""},{"old":"/messaging/conversations","type":0,"val":"conversations","end":""}],
    types: placeholder as Registry['conversations.index']['types'],
  },
  'conversations.messages': {
    methods: ["GET","HEAD"],
    pattern: '/messaging/conversations/:id/messages',
    tokens: [{"old":"/messaging/conversations/:id/messages","type":0,"val":"messaging","end":""},{"old":"/messaging/conversations/:id/messages","type":0,"val":"conversations","end":""},{"old":"/messaging/conversations/:id/messages","type":1,"val":"id","end":""},{"old":"/messaging/conversations/:id/messages","type":0,"val":"messages","end":""}],
    types: placeholder as Registry['conversations.messages']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
