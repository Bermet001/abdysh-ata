import { lazy } from 'react'
import Suspense from './Suspense'
import BannerInner from '../pages/user/1_inner-pages/BannerInner'
import SchedulMatche from '../pages/user/matches/Matches'
import Player from '../pages/user/team/Player'
import New from '../pages/user/1_inner-pages/New'
import NewsPage from '../pages/user/NewsPage'
import Coaches from '../pages/user/coach/Сoaches'
import Coach from '../pages/user/coach/Coach'
import TeamWrapper from '../pages/user/team/TeamWrapper'
import Partners from '../pages/user/Partners'
import Contacts from '../pages/user/Contacts'
import History from '../pages/user/History'
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
      path: 'team',
      element: <TeamWrapper />,
   },
   {
      path: 'coaches/:id',
      element: <Coach />,
   },
   {
      path: 'partners',
      element: <Partners />,
   },
   {
      path: 'contacts',
      element: <Contacts />,
   },
   {
      path: 'history',
      element: <History />,
   },
]
