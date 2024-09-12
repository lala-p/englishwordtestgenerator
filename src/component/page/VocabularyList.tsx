import { Link } from "react-router-dom"

interface VocabularyDataType {
  word: string
  meaning: string
  naverLink?: string
}

const VocabularyDataList: VocabularyDataType[] = [
  {
    word: 'apple',
    meaning: '사과'
  },
  {
    word: 'banana',
    meaning: '바나나'
  },
  {
    word: 'home',
    meaning: '집',
    naverLink: 'l'
  },
]


const VocabularyList = () => {
  const list = VocabularyDataList.map((data: VocabularyDataType, index: number) => {
    return (
      <tr key={index}>
        <td>{data.word}</td>
        <td>{data.meaning}</td>
        <td>{data.naverLink ? <Link to={'/generateTest'}>data.naverLink</Link> : '-'}</td>
      </tr>
    )
  })

  return (
    <>
      <h1>list</h1>
      <table>
        <thead>
          <tr>
            <th>단어</th>
            <th>뜻</th>
            <th>네이버 단어사전</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>

    </>
  )
}

export default VocabularyList