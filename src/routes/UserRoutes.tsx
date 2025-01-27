import { lazy } from 'react'
const Landing = lazy(() => import('../pages/Landing'))
const Photo = lazy(() => import('../pages/user/gallery/Photo'))
const New = lazy(() => import('../pages/user/1_inner-pages/New'))
const Gallery = lazy(() => import('../pages/user/gallery/Gallery'))
const Shop = lazy(() => import('../pages/user/shop/Shop'))
const Rating = lazy(() => import('../pages/user/rating-table/Rating'))
const Infrastracture = lazy(
   () => import('../pages/user/Infrastructure/Infrastracture')
)
const History = lazy(() => import('../pages/user/History'))
const Contacts = lazy(() => import('../pages/user/Contacts'))
const Partners = lazy(() => import('../pages/user/Partners'))
const TeamWrapper = lazy(() => import('../pages/user/team/TeamWrapper'))
const Coach = lazy(() => import('../pages/user/coach/Coach'))
const Coaches = lazy(() => import('../pages/user/coach/Сoaches'))
const NewsPage = lazy(() => import('../pages/user/NewsPage'))
const Player = lazy(() => import('../pages/user/team/Player'))
const SchedulMatche = lazy(() => import('../pages/user/matches/Matches'))
const BannerInner = lazy(
   () => import('../pages/user/1_inner-pages/BannerInner')
)
const Trophy = lazy(() => import('../pages/user/trophy/Trophy'))
const Infrastructures = lazy(
   () => import('../pages/user/Infrastructure/Infrastructures')
)

import Suspense from './Suspense'

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
      element: (
         <Suspense>
            <SchedulMatche />
         </Suspense>
      ),
   },
   {
      path: 'banner/:id',
      element: (
         <Suspense>
            <BannerInner />
         </Suspense>
      ),
   },
   {
      path: 'player/:id',
      element: (
         <Suspense>
            <Player />
         </Suspense>
      ),
   },
   {
      path: 'news/:id',
      element: (
         <Suspense>
            <New />
         </Suspense>
      ),
   },
   {
      path: 'news',
      element: (
         <Suspense>
            <NewsPage />
         </Suspense>
      ),
   },
   {
      path: 'coaches',
      element: (
         <Suspense>
            <Coaches />
         </Suspense>
      ),
   },
   {
      path: 'team',
      element: (
         <Suspense>
            <TeamWrapper />
         </Suspense>
      ),
   },
   {
      path: 'coaches/:id',
      element: (
         <Suspense>
            <Coach />
         </Suspense>
      ),
   },
   {
      path: 'partners',
      element: (
         <Suspense>
            <Partners />
         </Suspense>
      ),
   },
   {
      path: 'contacts',
      element: (
         <Suspense>
            <Contacts />
         </Suspense>
      ),
   },
   {
      path: 'history',
      element: (
         <Suspense>
            <History />
         </Suspense>
      ),
   },
   {
      path: 'infrastracture',
      element: (
         <Suspense>
            <Infrastructures />
         </Suspense>
      ),
   },
   {
      path: 'infrastructure/:id',
      element: (
         <Suspense>
            <Infrastracture />
         </Suspense>
      ),
   },
   {
      path: 'trophy',
      element: (
         <Suspense>
            <Trophy />
         </Suspense>
      ),
   },

   {
      path: 'rating',
      element: (
         <Suspense>
            <Rating />
         </Suspense>
      ),
   },
   {
      path: 'shop',
      element: (
         <Suspense>
            <Shop />
         </Suspense>
      ),
   },

   {
      path: 'gallery',
      element: (
         <Suspense>
            <Gallery />
         </Suspense>
      ),
   },

   {
      path: 'gallery/:id',
      element: (
         <Suspense>
            <Photo />
         </Suspense>
      ),
   },
]
