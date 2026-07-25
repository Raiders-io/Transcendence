/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/account/logout',
    tokens: [{"old":"/api/v1/account/logout","type":0,"val":"api","end":""},{"old":"/api/v1/account/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/account/logout","type":0,"val":"account","end":""},{"old":"/api/v1/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
  'questions.index': {
    methods: ["GET","HEAD"],
    pattern: '/questions',
    tokens: [{"old":"/questions","type":0,"val":"questions","end":""}],
    types: placeholder as Registry['questions.index']['types'],
  },
  'questions.store': {
    methods: ["POST"],
    pattern: '/questions',
    tokens: [{"old":"/questions","type":0,"val":"questions","end":""}],
    types: placeholder as Registry['questions.store']['types'],
  },
  'questions.show': {
    methods: ["GET","HEAD"],
    pattern: '/questions/:id',
    tokens: [{"old":"/questions/:id","type":0,"val":"questions","end":""},{"old":"/questions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['questions.show']['types'],
  },
  'questions.update': {
    methods: ["PUT","PATCH"],
    pattern: '/questions/:id',
    tokens: [{"old":"/questions/:id","type":0,"val":"questions","end":""},{"old":"/questions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['questions.update']['types'],
  },
  'questions.destroy': {
    methods: ["DELETE"],
    pattern: '/questions/:id',
    tokens: [{"old":"/questions/:id","type":0,"val":"questions","end":""},{"old":"/questions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['questions.destroy']['types'],
  },
  'exam_authorings.index': {
    methods: ["GET","HEAD"],
    pattern: '/exam-authorings',
    tokens: [{"old":"/exam-authorings","type":0,"val":"exam-authorings","end":""}],
    types: placeholder as Registry['exam_authorings.index']['types'],
  },
  'exam_authorings.store': {
    methods: ["POST"],
    pattern: '/exam-authorings',
    tokens: [{"old":"/exam-authorings","type":0,"val":"exam-authorings","end":""}],
    types: placeholder as Registry['exam_authorings.store']['types'],
  },
  'exam_authorings.show': {
    methods: ["GET","HEAD"],
    pattern: '/exam-authorings/:id',
    tokens: [{"old":"/exam-authorings/:id","type":0,"val":"exam-authorings","end":""},{"old":"/exam-authorings/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['exam_authorings.show']['types'],
  },
  'exam_authorings.update': {
    methods: ["PUT","PATCH"],
    pattern: '/exam-authorings/:id',
    tokens: [{"old":"/exam-authorings/:id","type":0,"val":"exam-authorings","end":""},{"old":"/exam-authorings/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['exam_authorings.update']['types'],
  },
  'exam_authorings.destroy': {
    methods: ["DELETE"],
    pattern: '/exam-authorings/:id',
    tokens: [{"old":"/exam-authorings/:id","type":0,"val":"exam-authorings","end":""},{"old":"/exam-authorings/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['exam_authorings.destroy']['types'],
  },
  'exam_papers.index': {
    methods: ["GET","HEAD"],
    pattern: '/exam-papers',
    tokens: [{"old":"/exam-papers","type":0,"val":"exam-papers","end":""}],
    types: placeholder as Registry['exam_papers.index']['types'],
  },
  'exam_papers.store': {
    methods: ["POST"],
    pattern: '/exam-papers',
    tokens: [{"old":"/exam-papers","type":0,"val":"exam-papers","end":""}],
    types: placeholder as Registry['exam_papers.store']['types'],
  },
  'exam_papers.show': {
    methods: ["GET","HEAD"],
    pattern: '/exam-papers/:id',
    tokens: [{"old":"/exam-papers/:id","type":0,"val":"exam-papers","end":""},{"old":"/exam-papers/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['exam_papers.show']['types'],
  },
  'exam_papers.update': {
    methods: ["PUT","PATCH"],
    pattern: '/exam-papers/:id',
    tokens: [{"old":"/exam-papers/:id","type":0,"val":"exam-papers","end":""},{"old":"/exam-papers/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['exam_papers.update']['types'],
  },
  'exam_papers.destroy': {
    methods: ["DELETE"],
    pattern: '/exam-papers/:id',
    tokens: [{"old":"/exam-papers/:id","type":0,"val":"exam-papers","end":""},{"old":"/exam-papers/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['exam_papers.destroy']['types'],
  },
  'exam_authorings.show_question': {
    methods: ["GET","HEAD"],
    pattern: '/exam-authorings/questions/:id',
    tokens: [{"old":"/exam-authorings/questions/:id","type":0,"val":"exam-authorings","end":""},{"old":"/exam-authorings/questions/:id","type":0,"val":"questions","end":""},{"old":"/exam-authorings/questions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['exam_authorings.show_question']['types'],
  },
  'questions.types': {
    methods: ["GET","HEAD"],
    pattern: '/questions/types',
    tokens: [{"old":"/questions/types","type":0,"val":"questions","end":""},{"old":"/questions/types","type":0,"val":"types","end":""}],
    types: placeholder as Registry['questions.types']['types'],
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
