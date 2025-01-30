import { Affix, Button, Input, Flex, Drawer, Dropdown, Menu } from 'antd'
import { SearchOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Logo from '../assets/images/main-logo.png'
import styled from 'styled-components'
import { navigations } from '../configs'
import { NavLink, useLocation } from 'react-router-dom'
import Partner1 from '../assets/images/nitro-logo.png'
import Partner2 from '../assets/images/partner2 copy.svg'
import Nashe from '../assets/images/nashe-logo.jpg'
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

   const location = useLocation()

   const handleScroll = () => setIsScrolled(window.scrollY > 50)

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   const handleSearchClick = () => {
      setSearchVisible(!searchVisible)
      if (!searchVisible) {
         setSearchQuery('')
      }
   }

   const handleDrawerToggle = () => setDrawerVisible(!drawerVisible)

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setSearchQuery(e.target.value)

   const isOnDifferentPage = location.pathname !== '/'

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
            style={{
               backgroundColor:
                  isOnDifferentPage || isscrolled ? '#fff' : 'transparent',
            }}
            offsetTop={0}
         >
            <StyledContainer
               gap={20}
               justify="space-between"
               align="center"
               isscrolled={isOnDifferentPage ? 'true' : isscrolled.toString()}
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
                  justify="space-between"
                  gap={20}
                  className="main-nav"
                  align="center"
               >
                  {searchVisible ? (
                     <>
                        <StyledInput
                           value={searchQuery}
                           onChange={handleSearchChange}
                           placeholder="Поиск..."
                           autoFocus
                           style={{ border: 'none' }}
                        />
                        <CloseOutlined onClick={handleSearchClick} />

                        <Button type="primary">Поиск</Button>
                     </>
                  ) : (
                     <>
                        <nav className="desktop-nav">
                           {navigations.map(({ path, title, id, sub_nav }) => {
                              const menuItems = sub_nav
                                 ? sub_nav.map(
                                      ({
                                         path: subPath,
                                         title: subTitle,
                                         id: subId,
                                      }) => ({
                                         key: subId,
                                         label: (
                                            <NavLink to={subPath}>
                                               {subTitle}
                                            </NavLink>
                                         ),
                                      })
                                   )
                                 : []

                              const menu = <Menu items={menuItems} />

                              return (
                                 <Dropdown
                                    key={id}
                                    overlay={menu}
                                    trigger={['hover']}
                                 >
                                    <NavLink to={path}>{title}</NavLink>
                                 </Dropdown>
                              )
                           })}
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

                           <img src={Nashe} width="50" alt="logo" />
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
                  />
               </Flex>
            </StyledContainer>
         </Affix>

         <StyledDrawer
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
         </StyledDrawer>
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
   color: ${({ isscrolled }) =>
      isscrolled === 'true' || window.location.pathname === '/special'
         ? 'black'
         : 'white'};

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

   .main-nav {
      width: 100%;
   }

   @media (max-width: 1360px) {
      .desktop-nav {
         a {
            font-size: 13px;
         }
      }
   }

   .mobile-menu {
      display: none;
   }

   @media (max-width: 1170px) {
      .main-nav {
         width: auto;
      }

      .desktop-nav {
         display: none;
      }

      .header-partners {
         display: none;
      }

      .mobile-menu {
         display: block;
      }

      .search-desktop {
         display: none;

         svg {
            width: 1.5rem;
            height: 1.5rem;
            fill: #000;
         }
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
            width: 1.5rem;
            height: 1.5rem;
            fill: ${({ isscrolled }) =>
               isscrolled === 'true' ? 'black' : 'white'};
         }
      }

      .main-logo {
         width: 65px;
      }
   }

   @media (max-width: 768px) {
      padding: 5px 20px;

      .main-logo {
         width: 50px;
      }

      .mobile-menu {
         svg {
            width: 1.2rem;
            height: 1.2rem;
         }
      }
   }
`

const StyledInput = styled(Input)`
   width: 100%;
   height: 40px;
   border-radius: 4px;

   @media (max-width: 1170px) {
      display: none;
   }
`

const StyledDrawer = styled(Drawer)`
   .ant-drawer-header-title {
      flex-direction: row-reverse !important;
   }
`
