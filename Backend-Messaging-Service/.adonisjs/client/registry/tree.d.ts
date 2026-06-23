/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  conversations: {
    index: typeof routes['conversations.index']
    messages: typeof routes['conversations.messages']
  }
}
