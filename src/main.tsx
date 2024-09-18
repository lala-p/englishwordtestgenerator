import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Root from './component/common/Root'
import IndexHome from './component/page/IndexHome'
import VocabularyList from './component/page/VocabularyList'
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<h1>error</h1>}>
      <Route index element={<IndexHome />} />
      <Route path='/createTest' element={<h1>create page</h1>} />
      <Route path='/vocabularyList' element={<VocabularyList />} />
      <Route path='/test/:testDataId' />

    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
