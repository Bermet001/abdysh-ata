import { Affix, Button, Dropdown, Input, Menu, Flex } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Logo from '../assets/images/logo.png'
import styled from 'styled-components'
import { navigations } from '../configs'
import { NavLink } from 'react-router-dom'
import Partner1 from '../assets/images/nitro-logo.jpg'
import Partner2 from '../assets/images/partner2.svg'
import { useEffect, useState } from 'react'

interface StyledContainerProps {
   isScrolled: boolean
}

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false)
   const [searchVisible, setSearchVisible] = useState(false)

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
   }

   const menu = (
      <Menu style={{ padding: '10px', minWidth: '300px' }}>
         <Menu.Item>
            <Flex align="center">
               <StyledInput placeholder="Search..." />
               <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  style={{ marginLeft: '10px' }}
               >
                  Search
               </Button>
            </Flex>
         </Menu.Item>
      </Menu>
   )

   return (
      <header
         style={{
            position: 'fixed',
            top: 0,
            zIndex: 100,
            bottom: '0',
            width: '100%',
            height: '70px',
         }}
      >
         <Affix
            style={{ backgroundColor: isScrolled ? '#fff' : 'transparent' }}
            offsetTop={0}
         >
            <StyledContainer
               gap={20}
               justify="space-between"
               align="center"
               isScrolled={isScrolled}
            >
               <Flex align="center" gap={15}>
                  <NavLink to="/">
                     <img src={Logo} width="50" alt="logo" />
                  </NavLink>
               </Flex>

               <Flex
                  style={{ width: '100%' }}
                  justify="space-between"
                  gap={20}
                  align="center"
               >
                  <nav>
                     {navigations.map(({ path, title, id }) => (
                        <NavLink key={id} to={path}>
                           {title}
                        </NavLink>
                     ))}
                  </nav>

                  <Flex align="center" gap={20}>
                     <img className="partners-img" src={Partner1} alt="" />
                     <Partner2 />
                     <img src={Logo} width="50" alt="logo" />
                  </Flex>

                  <Dropdown
                     overlay={menu}
                     visible={searchVisible}
                     onVisibleChange={setSearchVisible}
                     trigger={['click']}
                     placement="bottomRight"
                  >
                     <Button onClick={handleSearchClick}>
                        <SearchOutlined />
                     </Button>
                  </Dropdown>
               </Flex>
            </StyledContainer>
         </Affix>
      </header>
   )
}

export default Header

const StyledContainer = styled(Flex)<StyledContainerProps>`
   padding: 15px 30px;
   width: 100%;
   max-width: 1600px;
   margin: 0 auto;
   transition: background-color 0.3s ease, color 0.3s ease;
   color: ${({ isScrolled }) => (isScrolled ? 'black' : 'white')};

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
         color: ${({ isScrolled }) => (isScrolled ? 'black' : 'white')};
         font-weight: 500;
      }
   }

   .ant-btn-variant-outlined {
      padding: 22px 10px;
      border-radius: 10px;

      .anticon-search {
         svg {
            width: 1.9rem;
            height: 1.9rem;
            cursor: pointer;
         }
      }
   }

   .ant-drawer-header {
      flex-direction: row-reverse;

      .ant-drawer-extra {
         flex: 2;
      }
   }
`

const StyledInput = styled(Input)`
   width: 85vw;
   border-radius: 4px;
`
