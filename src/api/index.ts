import { RequestT } from "../types"

import { getVocabularyDataList } from "./vocabulary"
import { createTestData, deleteTestData, getTestData, updateTestData } from "./test"



export const sendApi = async <Response, Request>(request: RequestT<Response, Request>): Promise<void> => {
  let response = request.requestFun(request.data)

  console.log('asd111')
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('asd')

  if (response.status === 200 && request.then !== undefined) {
    await request.then(response)

  } else if (response.status !== 200 && request.catch !== undefined) {
    await request.catch(response)
  }

  if (request.finally !== undefined) {
    await request.finally(response)
  }

}

export { 
  getVocabularyDataList as getVocabularyDataList,

  createTestData as createTestData, 
  updateTestData as updateTestData, 
  getTestData as getTestData, 
  deleteTestData as deleteTestData, 
  
}

