import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

import { VocabularyDataT } from "../../types"
import { VocabularyDataArr } from "../../data/Vocabulary"

import { CommonTable1, CommonTable1_tr, CommonTable1_td } from "../common/CommonTable1"


const VocabularyList = () => {

  return (
    <>
      <h1>list</h1>
      <CommonTable1 className={`m-auto`} headArr={['word', 'meaning', 'dictionary']}>
        {
          VocabularyDataArr.map((data: VocabularyDataT) => {
            return (
              <Fragment key={data.id}>
                <CommonTable1_tr>
                  <CommonTable1_td>{data.word}</CommonTable1_td>
                  <CommonTable1_td align="left">{data.meaning}</CommonTable1_td>
                  <CommonTable1_td align="right" >
                    {data.naverLink ? <Link to={data.naverLink} target="_blank" className={`text-blue-500 line`}>{data.word}</Link> : ''}
                    </CommonTable1_td>
                </CommonTable1_tr>
              </Fragment>
            )
          })
        }
      </CommonTable1>
    </>
  )
}

export default VocabularyList