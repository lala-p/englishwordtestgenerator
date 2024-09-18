import { ResponseT, testDataIdT, testDataT, VocabularydT } from "../types"


export const createTestData = (data: { testDataId?: testDataIdT, VocabularyDataId: VocabularydT }): ResponseT<testDataT> => {
  
  return {status: 200, data: { id: 1 }}
}

export const updateTestData = (data: { testDataId: testDataIdT, VocabularyDataId: VocabularydT }): ResponseT<testDataT> => {

  return {status: 200, data: { id: 1 }}
}

export const getTestData = (params: { testDataId: testDataIdT }): ResponseT<testDataT> => {



  return {status: 200, data: { id: 1 }}
}

export const deleteTestData = (params: { testDataId: testDataIdT }): ResponseT<testDataT> => {


  return {status: 200, data: { id: 1 }}
}
