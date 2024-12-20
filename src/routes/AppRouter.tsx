import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from '../pages/Landing'

const AppRouter = () => {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Landing />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRouter
