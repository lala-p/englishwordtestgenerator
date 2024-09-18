import { ReactNode, Suspense } from "react"
import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

import { VocabularyDataT, VocabularyDataApiT } from "../../types"
import { sendApi, getVocabularyDataList } from "../../api"

import { CommonTable1, CommonTable1_tr, CommonTable1_td } from "../common/CommonTable1"

const VocabularyList = () => {

  const VocabularyRowList = (): ReactNode => {
    let listNode: ReactNode;
    
    sendApi<{list: VocabularyDataT[]}, VocabularyDataApiT|undefined>({
      data: undefined,
      requestFun: getVocabularyDataList,
      then: async (response) => {
        listNode = response.data.list.map((data: VocabularyDataT) => {
          return (
            <Fragment key={data.id}>
              <CommonTable1_tr>
                <CommonTable1_td>{data.word}</CommonTable1_td>
                <CommonTable1_td align="left">{data.meaning}</CommonTable1_td>
                <CommonTable1_td align="right" >
                  {data.naverLink ? <Link to={data.naverLink} target="_blank" className={`underline hover:no-underline text-blue-500 visited:text-purple-500`}>{data.word}</Link> : ''}
                  </CommonTable1_td>
              </CommonTable1_tr>
            </Fragment>
          )
        })
        
      },
      finally: async (response) => {
        console.log(response)
      }

    })

    return listNode
  
  }
const testCom = () => <h1>123412341234</h1>

  return (
    <>
      <h1>list</h1>
      <Suspense fallback={<h1>asdfasdfasdf</h1>}>
      <CommonTable1 className={`m-auto`} headArr={['word', 'meaning', 'dictionary']}>
        {/* <Suspense fallback={<h1>asdfasdfasdf</h1>}> */}
          <VocabularyRowList />
      
      </CommonTable1>
      </Suspense>
    </>
  )
}

export default VocabularyList