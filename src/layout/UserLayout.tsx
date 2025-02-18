import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

const UserLayout = () => (
   <>
      <Header />
      <Outlet />
      <Footer />
   </>
)

export default UserLayout
