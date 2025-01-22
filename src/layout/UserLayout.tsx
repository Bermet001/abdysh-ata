import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const UserLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   )
}

export default UserLayout
