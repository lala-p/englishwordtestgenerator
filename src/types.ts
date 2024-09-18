export interface ResponseT<ResponseDataT> {
  status: 200|400|500
  data: ResponseDataT
  statusText?: string
}

type ResponseFunT<Response> = {
  (response: ResponseT<Response>): Promise<void>
}

type RequestFunT<Response, Request> = {
  (data: Request): ResponseT<Response>
}

export interface RequestT<Response, Request> {
  // method: 'get'|'post'|'put'|'patch'|'delete'
  // baseUrl: string
  // url: string
  requestFun: RequestFunT<Response, Request>
  data: Request
  then?: ResponseFunT<Response>
  catch?: ResponseFunT<Response>
  finally?: ResponseFunT<Response>
}


export type testDataIdT = number|string

export interface testDataT {
  id: testDataIdT
}

export interface testDataApiT {
  id?: testDataIdT|testDataIdT[]
}


export type VocabularydT = number

export interface VocabularyDataT {
  id: VocabularydT
  word: string
  meaning: string
  naverLink?: string
}

export interface VocabularyDataApiT {
  id?: VocabularydT|VocabularydT[]
}