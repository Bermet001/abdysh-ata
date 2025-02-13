import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Suspense from './Suspense'
import { lazy } from 'react'
const UserLayout = lazy(() => import('../layout/UserLayout'))
const Landing = lazy(() => import('../pages/Landing'))
const MatchInfo = lazy(() => import('../pages/user/matches/MatchInfo'))
const Product = lazy(() => import('../pages/user/shop/Product'))
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
const Coaches = lazy(() => import('../pages/user/coach/Coaches'))
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
const Guideline = lazy(() => import('../pages/user/guideline/Guideline'))

const AppRouter = () => {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <UserLayout />,
         children: [
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
               path: 'match/:slug',
               element: (
                  <Suspense>
                     <MatchInfo />
                  </Suspense>
               ),
            },
            {
               path: 'banner/:slug',
               element: (
                  <Suspense>
                     <BannerInner />
                  </Suspense>
               ),
            },
            {
               path: 'player/:slug',
               element: (
                  <Suspense>
                     <Player />
                  </Suspense>
               ),
            },
            {
               path: 'news/:slug',
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
               path: 'team/:slug',
               element: (
                  <Suspense>
                     <TeamWrapper />
                  </Suspense>
               ),
            },
            {
               path: 'coaches/:slug',
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
               path: 'infrastructure/:slug',
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
               path: 'shop/:slug',
               element: (
                  <Suspense>
                     <Product />
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
               path: 'gallery/:slug',
               element: (
                  <Suspense>
                     <Photo />
                  </Suspense>
               ),
            },
            {
               path: 'guideline',
               element: (
                  <Suspense>
                     <Guideline />
                  </Suspense>
               ),
            },
         ],
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRouter
