import { useState } from 'react'
import { Affix, Button, Drawer, Flex, Menu, Space } from 'antd'
import {
   CloseOutlined,
   DownOutlined,
   MenuOutlined,
   SearchOutlined,
} from '@ant-design/icons'
import Logo from '../assets/images/logo.png'
import styled from 'styled-components'
import { navigations } from '../configs'
import { NavLink } from 'react-router-dom'
import Partner1 from '../assets/images/nitro-logo.jpg'
import Partner2 from '../assets/images/partner2.svg'

const Header = () => {
   const [open, setOpen] = useState(false)

   const toggleDrawer = () => setOpen((prev) => !prev)

   return (
      <header>
         <Affix offsetTop={0}>
            <StyledContainer gap={20} justify="space-between" align="center">
               <Flex align="center" gap={15}>
                  <MenuOutlined onClick={toggleDrawer} />
                  <div className="line" />
                  <NavLink to="/">
                     <img src={Logo} width="50" alt="logo" />
                  </NavLink>
               </Flex>

               <Drawer
                  extra={
                     <Space>
                        <Button onClick={toggleDrawer}>
                           <CloseOutlined />
                        </Button>
                     </Space>
                  }
                  title="Basic Drawer"
                  placement="left"
                  closable={false}
                  onClose={toggleDrawer}
                  open={open}
                  getContainer={false}
               >
                  <Menu mode="inline">
                     <Menu.Item key="1">Fútbol</Menu.Item>
                     <Menu.SubMenu
                        key="sub1"
                        title="Baloncesto"
                        icon={<DownOutlined />}
                     >
                        <Menu.Item key="2">Primer Equipo Baloncesto</Menu.Item>
                        <Menu.Item key="3">Cantera Baloncesto</Menu.Item>
                     </Menu.SubMenu>
                     <Menu.Item key="4">Calendario</Menu.Item>
                     <Menu.Item key="5">RMTV en directo</Menu.Item>
                     <Menu.Item key="6">Club</Menu.Item>
                     <Menu.Item key="7">Estadio Bernabéu</Menu.Item>
                     <Menu.Item key="8">Noticias</Menu.Item>
                     <Menu.Item key="9">Fundación Real Madrid</Menu.Item>
                     <Menu.Item key="10">
                        Escuela Universitaria Real Madrid
                     </Menu.Item>
                     <Menu.Item key="11">RM Next</Menu.Item>
                     <Menu.Item key="12">Tienda Online</Menu.Item>
                  </Menu>
                  {/* <p>Some contents...</p> */}
               </Drawer>

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

                  <Button>
                     <SearchOutlined />
                  </Button>
               </Flex>
            </StyledContainer>

            <hr style={{ opacity: '0.5' }} />
         </Affix>
      </header>
   )
}

export default Header

const StyledContainer = styled(Flex)`
   padding: 15px 30px;
   width: 100%;
   background-color: #fff;

   & .line {
      border: 0.5px solid;
      height: 25px;
      opacity: 0.2;
   }

   .anticon-menu {
      svg {
         width: 1.3rem;
         height: 1.3rem;
         cursor: pointer;
      }
   }

   & nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      > a {
         color: black;
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
