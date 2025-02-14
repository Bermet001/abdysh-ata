import {
   Affix,
   Button,
   Input,
   Flex,
   Drawer,
   Dropdown,
   Menu,
   MenuProps,
} from 'antd'
import { SearchOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Logo from '../assets/images/main-logo.png'
import styled from 'styled-components'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { getAllTeams, getOurTeam } from '../store/slice/team/teamThunk'
import { searchGlobal } from '../store/slice/globalSearch/globalSearchThunk'
import { getInfrastractures } from '../store/slice/infrastracture/infrastractureThunk'

type MenuItem = Required<MenuProps>['items'][number]

interface StyledContainerProps {
   isscrolled: string
}

const Header = () => {
   const { headerTeam } = useAppSelector((state) => state.team)
   const { infrastractures } = useAppSelector((state) => state.infrastracture)
   const { data } = useAppSelector((state) => state.global_search)
   const { partners } = useAppSelector((state) => state.partner)

   const [isscrolled, setIsScrolled] = useState(false)
   const [searchVisible, setSearchVisible] = useState(false)
   const [drawerVisible, setDrawerVisible] = useState(false)
   const [searchQuery, setSearchQuery] = useState('')

   const items: MenuItem[] = [
      {
         key: '1',
         label: <NavLink to="/">Главная</NavLink>,
      },
      {
         key: '2',
         label: 'Команды',
         children:
            headerTeam?.map(({ slug, title }) => ({
               key: slug,
               label: (
                  <NavLink className="mobile_navigations" to={`/team/${slug}`}>
                     {title}
                  </NavLink>
               ),
            })) || [],
      },
      {
         key: '3',
         label: 'О клубе',
         children: [
            {
               key: '21',
               label: (
                  <NavLink className="mobile_navigations" to="/history">
                     История
                  </NavLink>
               ),
            },
            {
               key: '22',
               label: (
                  <NavLink className="mobile_navigations" to="/guideline">
                     Руководство
                  </NavLink>
               ),
            },
            {
               key: '23',
               label: (
                  <NavLink className="mobile_navigations" to="/contacts">
                     Контакты
                  </NavLink>
               ),
            },
         ],
      },
      {
         key: '4',
         label: <NavLink to="/match">Матчи</NavLink>,
      },
      {
         key: '8',
         label: 'Инфраструктура',
         children:
            infrastractures?.map(({ slug, title }) => ({
               key: slug,
               label: (
                  <NavLink
                     className="mobile_navigations"
                     to={`/infrastructure/${slug}`}
                  >
                     {title}
                  </NavLink>
               ),
            })) || [],
      },
      {
         key: '5',
         label: <NavLink to="/rating">Таблица рейтинга</NavLink>,
      },
      {
         key: '6',
         label: <NavLink to="/partners">Партнеры</NavLink>,
      },
      {
         key: '7',
         label: <NavLink to="/trophy">Наши достижения</NavLink>,
      },
   ]

   const location = useLocation()
   const dispatch = useAppDispatch()

   const handleScroll = () => setIsScrolled(window.scrollY > 50)

   useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   useEffect(() => {
      dispatch(getAllTeams())
      dispatch(getOurTeam())
      dispatch(getInfrastractures())
   }, [dispatch])

   const handleSearchClick = () => {
      setSearchVisible(!searchVisible)
      if (!searchVisible) {
         setSearchQuery('')
      }
   }

   const openDrawer = () => setDrawerVisible(true)

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setSearchQuery(value)
      if (value) dispatch(searchGlobal(value))
      else setSearchVisible(false)
   }

   const handleMenuClick = () => {
      setSearchVisible(false)
      setDrawerVisible(false)
   }

   const isOnDifferentPage = location.pathname !== '/'

   const searchResults = data
      ? [
           ...data.teams.map((team) => ({
              key: `team-${team.id}`,
              label: (
                 <NavLink to={`/team/${team.slug}`} onClick={handleMenuClick}>
                    {team.title}
                 </NavLink>
              ),
           })),
           ...data.products.map((product) => ({
              key: `product-${product.id}`,
              label: (
                 <NavLink
                    to={`/shop/${product.slug}`}
                    onClick={handleMenuClick}
                 >
                    {product.title}
                 </NavLink>
              ),
           })),
           ...data.news.map((news) => ({
              key: `news-${news.id}`,
              label: (
                 <NavLink to={`/news/${news.slug}`} onClick={handleMenuClick}>
                    {news.title}
                 </NavLink>
              ),
           })),
        ]
      : []

   const navigations = [
      { path: '/', title: 'Главная', id: 1 },
      {
         path: '#',
         title: 'Команды',
         id: 2,
         sub_nav: headerTeam?.map(({ slug, title, id }) => ({
            slug: `/team/${slug}`,
            title,
            id,
         })),
      },
      {
         path: '/',
         title: 'О клубе',
         sub_nav: [
            { slug: '/history', title: 'История ', id: 21 },
            { slug: '/guideline', title: 'Руководство', id: 22 },
            { slug: '/contacts', title: 'Контакты', id: 23 },
         ],
         id: 3,
      },
      { path: '/match', title: 'Матчи', id: 4 },
      {
         path: '/infrastracture',
         title: 'Инфраструктура',
         sub_nav: infrastractures?.map(({ slug, title, id }) => ({
            slug: `/infrastructure/${slug}`,
            title,
            id,
         })),
         id: 8,
      },
      { path: '/rating', title: 'Таблица рейтинга', id: 5 },
      { path: '/partners', title: 'Партнеры', id: 6 },
      { path: '/trophy', title: 'Наши достижения', id: 7 },
   ]

   const onClick: MenuProps['onClick'] = () => setDrawerVisible(false)

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
                        <StyledDropdown
                           overlay={<Menu items={searchResults} />}
                           trigger={['click']}
                           visible={
                              searchQuery.length > 0 && searchResults.length > 0
                           }
                        >
                           <StyledInput
                              value={searchQuery}
                              onChange={handleSearchChange}
                              placeholder="Поиск..."
                              autoFocus
                              style={{ border: 'none' }}
                           />
                        </StyledDropdown>
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
                                         slug: subPath,
                                         title: subTitle,
                                         id: subId,
                                      }) => ({
                                         key: subId,
                                         label: (
                                            <NavLink
                                               to={subPath}
                                               onClick={handleMenuClick}
                                            >
                                               {subTitle}
                                            </NavLink>
                                         ),
                                      })
                                   )
                                 : []

                              return (
                                 <Dropdown
                                    key={id}
                                    menu={{
                                       items: menuItems as MenuProps['items'],
                                    }}
                                    trigger={['hover']}
                                 >
                                    <NavLink
                                       to={path}
                                       onClick={handleMenuClick}
                                    >
                                       {title}
                                    </NavLink>
                                 </Dropdown>
                              )
                           })}
                        </nav>

                        <Flex
                           className="header-partners"
                           align="center"
                           gap={20}
                        >
                           {partners.slice(0, 3).map((item) => (
                              <a
                                 aria-label="партнеры"
                                 key={item.link}
                                 href={item.link}
                              >
                                 <img src={item.image} width="60" alt="" />
                              </a>
                           ))}
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

                  <MenuOutlined className="mobile-menu" onClick={openDrawer} />
               </Flex>
            </StyledContainer>
         </Affix>

         <StyledDrawer
            placement="right"
            closable={true}
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
         >
            <Menu
               onClick={(e) => {
                  onClick(e)
                  handleMenuClick()
               }}
               mode="inline"
               items={items}
            />

            <Flex wrap style={{ padding: '24px' }} align="center" gap={20}>
               {partners.slice(0, 3).map((item) => (
                  <a aria-label="партнеры" key={item.link} href={item.link}>
                     <img src={item.image} width="90" alt="" />
                  </a>
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
      }
   }

   @media (max-width: 768px) {
      padding: 5px 20px;

      .main-logo {
         width: 40px;
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
   .ant-drawer-body {
      padding: 10px 0;
   }
   .ant-drawer-header-title {
      flex-direction: row-reverse !important;
   }

   span {
      color: #2d2d2d;
      padding: 15px 20px;
      display: block;
      font-weight: bold;
      font-size: 20px;
   }

   .ant-menu-item-only-child {
      .mobile_navigations {
         font-weight: 600;
         font-size: 18px;
      }
   }

   a:hover {
      background-color: rgba(0, 0, 0, 0.05);
   }
`

const StyledDropdown = styled(Dropdown)`
   width: 100% !important;
   border-radius: 6px !important;

   .ant-dropdown .ant-dropdown-menu {
      border-radius: 6px !important;
   }

   .ant-dropdown-menu-item {
      padding: 10px 16px;
      border-bottom: 1px solid #f0f0f0 !important;
   }

   .ant-dropdown-menu-item:hover {
      background-color: rgba(0, 0, 0, 0.05);
   }
`
