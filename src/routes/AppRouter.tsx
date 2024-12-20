import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from '../layout/Header'

const AppRouter = () => {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Header />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRouter
