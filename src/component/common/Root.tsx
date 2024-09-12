import { Outlet } from "react-router-dom"

const Root = () => {

  return(
      <>
        <h1>root</h1>
        <Outlet />
      </> 
  )
}


export default Root