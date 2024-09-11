import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider, RouteObject, Outlet } from 'react-router-dom'
import './index.css'

const routerStructure: RouteObject[] = [
  {
    path: "/",
    element: <><h1>root</h1><div className="text-3xl bg-blue-500">Tailwind Css 적용 테스트</div><Outlet /></>,
    errorElement: <h1>error errorElement</h1>,
    children: [
      {
        index: true,
        element: <h1>index home</h1>,
      },
      {
        path: "/generateTest",
        element: <h1>generateTest</h1>,
      },
      {
        path: "/vocabularyList",
        element: <h1>vocabularyList</h1>,
      },
    ],
  },
]


const router = createBrowserRouter(routerStructure)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
