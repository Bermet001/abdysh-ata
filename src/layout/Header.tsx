import { Affix, Flex } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import Logo from '../assets/images/logo.png'
import styled from 'styled-components'
import { navigations } from '../configs'
import { NavLink } from 'react-router-dom'
import Partner1 from '../assets/images/nitro-logo.jpg'

const Header = () => {
   return (
      <Affix>
         <StyledContainer>
            <Flex gap={15}>
               <MenuOutlined /> <div className="line" />
               <NavLink to="/">
                  <img src={Logo} width="50" alt="logo" />
               </NavLink>
            </Flex>

            <nav>
               {navigations.map(({ path, title }) => (
                  <NavLink to={path}>{title}</NavLink>
               ))}
            </nav>

            <Flex>
               <img className="partners-img" src={Partner1} alt="" />
            </Flex>
         </StyledContainer>
      </Affix>
   )
}

export default Header

const StyledContainer = styled(Flex)`
   padding: 30px;

   & .line {
      border: 0.5px solid grey;
   }
`
