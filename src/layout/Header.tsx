import { Affix, Button, Input, Flex, Drawer } from 'antd'
import { SearchOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Logo from '../assets/images/main-logo.png'
import styled from 'styled-components'
import { navigations } from '../configs'
import { NavLink } from 'react-router-dom'
import Partner1 from '../assets/images/nitro-logo.jpg'
import Partner2 from '../assets/images/partner2 copy.svg'
import Partner2copy from '../assets/images/partner2.svg'
import { useEffect, useState } from 'react'

interface StyledContainerProps {
   isscrolled: string
}

const Header = () => {
   const [isscrolled, setIsScrolled] = useState(false)
   const [searchVisible, setSearchVisible] = useState(false)
   const [drawerVisible, setDrawerVisible] = useState(false)
   const [searchQuery, setSearchQuery] = useState('')

   const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   const handleSearchClick = () => {
      setSearchVisible(!searchVisible)
      // Сбросить поисковый запрос при открытии инпута
      if (!searchVisible) {
         setSearchQuery('')
      }
   }

   const handleDrawerToggle = () => {
      setDrawerVisible(!drawerVisible)
   }

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value)
   }

   return (
      <header
         style={{
            position: 'fixed',
            top: 0,
            zIndex: 100,
            width: '100%',
            height: '50px',
         }}
      >
         <Affix
            style={{ backgroundColor: isscrolled ? '#fff' : 'transparent' }}
            offsetTop={0}
         >
            <StyledContainer
               gap={20}
               justify="space-between"
               align="center"
               isscrolled={isscrolled.toString()}
            >
               <Flex align="center" gap={15}>
                  <NavLink to="/">
                     <img
                        className="main-logo"
                        src={Logo}
                        width="50"
                        alt="logo"
                     />
                  </NavLink>
               </Flex>

               <Flex
                  style={{ width: '100%' }}
                  justify="space-between"
                  gap={20}
                  align="center"
               >
                  {/* Условное отображение */}
                  {searchVisible ? (
                     <>
                        <StyledInput
                           value={searchQuery}
                           onChange={handleSearchChange}
                           placeholder="Search..."
                           autoFocus
                           style={{ border: 'none' }}
                        />
                        <CloseOutlined onClick={handleSearchClick} />

                        <Button type="primary">Поиск</Button>
                     </>
                  ) : (
                     <>
                        <nav className="desktop-nav">
                           {navigations.map(({ path, title, id }) => (
                              <NavLink key={id} to={path}>
                                 {title}
                              </NavLink>
                           ))}
                        </nav>

                        <Flex
                           className="header-partners"
                           align="center"
                           gap={20}
                        >
                           <img
                              className="partners-img"
                              src={Partner1}
                              alt=""
                           />
                           {isscrolled ? <Partner2copy /> : <Partner2 />}
                           <img src={Logo} width="50" alt="logo" />
                        </Flex>

                        <Button
                           className="search-desktop"
                           style={{ border: 'none' }}
                           onClick={handleSearchClick}
                        >
                           <SearchOutlined />
                        </Button>
                     </>
                  )}

                  <MenuOutlined
                     className="mobile-menu"
                     onClick={handleDrawerToggle}
                     style={{ display: 'none' }}
                  />
               </Flex>
            </StyledContainer>
         </Affix>

         <Drawer
            title="Навигация"
            placement="right"
            closable={true}
            onClose={handleDrawerToggle}
            open={drawerVisible}
         >
            <Flex vertical align="start">
               {navigations.map(({ path, title, id }) => (
                  <NavLink key={id} to={path} onClick={handleDrawerToggle}>
                     {title}
                  </NavLink>
               ))}
            </Flex>
         </Drawer>
      </header>
   )
}

export default Header

const StyledContainer = styled(Flex)<StyledContainerProps>`
   padding: 5px 30px;
   width: 100%;
   max-width: 1600px;
   margin: 0 auto;
   transition: background-color 0.3s ease, color 0.3s ease;
   color: ${({ isscrolled }) => (isscrolled === 'true' ? 'black' : 'white')};

   .search-desktop {
      svg {
         width: 1.5rem;
         height: 1.5rem;
         fill: #000;
      }
   }

   & .line {
      border: 0.5px solid;
      height: 25px;
      opacity: 0.2;
   }

   & nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      > a {
         color: ${({ isscrolled }) =>
            isscrolled === 'true' ? 'black' : 'white'};
         font-weight: 500;
         margin-right: 15px;
      }
   }

   .ant-btn-variant-outlined {
      padding: 22px 10px;
      border-radius: 10px;
   }

   .ant-drawer-header {
      flex-direction: row-reverse;

      .ant-drawer-extra {
         flex: 2;
      }
   }

   @media (max-width: 1260px) {
      .desktop-nav {
         a {
            font-size: 13px;
         }
      }
   }
   @media (max-width: 1150px) {
      .desktop-nav {
         display: none;
      }

      .header-partners {
         display: none;
      }

      .search-desktop {
         color: transparent;

         svg {
            width: 2rem;
            height: 2rem;
            fill: #000;
         }
      }

      .mobile-menu {
         display: block;
         svg {
            width: 2rem;
            height: 2rem;
            fill: #000;
         }
      }

      .main-logo {
         width: 80px;
      }
   }

   @media (max-width: 768px) {
      padding: 10px 20px;
      justify-content: space-between;
      width: 100%;

      .mobile-menu {
         display: block;
         svg {
            width: 1.4rem;
            height: 1.4rem;
            fill: #000;
         }
      }
   }
`

const StyledInput = styled(Input)`
   width: 100%;
   height: 40px;
   border-radius: 4px;
`
