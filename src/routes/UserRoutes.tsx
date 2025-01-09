import { lazy } from 'react'
import Suspense from './Suspense'
import BannerInner from '../pages/BannerInner'
import SchedulMatche from '../pages/Matches'
import Team from '../pages/Team'
import Player from '../pages/inner-pages/Player'
import New from '../pages/inner-pages/New'
import NewsPage from '../pages/user/NewsPage'
import Coaches from '../pages/user/team/Сoaches'
import Coach from '../pages/user/team/Coach'
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

   {
      path: 'players',
      element: <Team />,
   },

   {
      path: 'player/:id',
      element: <Player />,
   },
   {
      path: 'news/:id',
      element: <New />,
   },
   {
      path: 'news',
      element: <NewsPage />,
   },
   {
      path: 'coaches',
      element: <Coaches />,
   },

   {
      path: 'coaches/:id',
      element: <Coach />,
   },
]
