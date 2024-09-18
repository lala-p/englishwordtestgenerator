import { vocabularyDataArr } from "../data/Vocabulary"
import { ResponseT, VocabularyDataApiT, VocabularyDataT } from "../types"



export const getVocabularyDataList = (params: VocabularyDataApiT|undefined): ResponseT<{list: VocabularyDataT[]}> => {
  let responseData: {list: VocabularyDataT[]} = { list: [] }

  if (params !== undefined) {
    responseData.list = vocabularyDataArr 
  } else {
    responseData.list = vocabularyDataArr 
  }

  return { status: 200, data: responseData }
}