import { Link } from "react-router-dom"

const IndexHome = () => {

  return (
    <>
      <Link to={`/generateTest`}>generate a english word test</Link>
      <Link to={`/vocabularyList`}></Link>          

    </>
  )
}


export default IndexHome