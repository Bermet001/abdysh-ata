import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from '../pages/Landing'
import BannerInner from '../pages/BannerInner'

const AppRouter = () => {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Landing />,
      },
      {
         path: 'banner/:id',
         element: <BannerInner />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRouter
