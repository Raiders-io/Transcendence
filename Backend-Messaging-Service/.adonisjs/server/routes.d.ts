import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'conversations.index': { paramsTuple?: []; params?: {} }
    'conversations.messages': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'conversations.index': { paramsTuple?: []; params?: {} }
    'conversations.messages': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'conversations.index': { paramsTuple?: []; params?: {} }
    'conversations.messages': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}