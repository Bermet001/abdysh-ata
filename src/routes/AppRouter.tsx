import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import { USER_ROUTES } from './UserRoutes'

const AppRouter = () => {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <UserLayout />,
         children: USER_ROUTES,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRouter
