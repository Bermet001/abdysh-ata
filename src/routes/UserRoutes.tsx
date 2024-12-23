import { lazy } from 'react'
import Suspense from './Suspense'
import BannerInner from '../pages/BannerInner'
import SchedulMatche from '../pages/Matches'
const Landing = lazy(() => import('../pages/Landing'))

export const USER_ROUTES = [
   {
      path: '/',
      element: (
         <Suspense>
            <Landing />
         </Suspense>
      ),
   },

   {
      path: 'match',
      element: <SchedulMatche />,
   },

   {
      path: 'banner/:id',
      element: <BannerInner />,
   },
]
