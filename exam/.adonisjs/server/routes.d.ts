import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'questions.index': { paramsTuple?: []; params?: {} }
    'questions.store': { paramsTuple?: []; params?: {} }
    'questions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'questions.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'questions.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'exam_authorings.index': { paramsTuple?: []; params?: {} }
    'exam_authorings.store': { paramsTuple?: []; params?: {} }
    'exam_authorings.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'exam_authorings.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'exam_authorings.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'questions.store': { paramsTuple?: []; params?: {} }
    'exam_authorings.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'questions.index': { paramsTuple?: []; params?: {} }
    'questions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'exam_authorings.index': { paramsTuple?: []; params?: {} }
    'exam_authorings.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'questions.index': { paramsTuple?: []; params?: {} }
    'questions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'exam_authorings.index': { paramsTuple?: []; params?: {} }
    'exam_authorings.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'questions.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'exam_authorings.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'questions.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'exam_authorings.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'questions.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'exam_authorings.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}