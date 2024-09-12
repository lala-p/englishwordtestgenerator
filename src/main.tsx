import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Root from './component/common/Root'
import VocabularyList from './component/page/VocabularyList'
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<h1>error</h1>}>
      <Route index element={<h1>index page</h1>} />
      <Route path='/generateTest' element={<h1>generate page</h1>} />
      <Route path='/vocabularyList' element={<VocabularyList />} />

    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
