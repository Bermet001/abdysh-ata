import { Flex } from 'antd'
import styled from 'styled-components'
import Telegram from '..//assets/icons/telegram.svg'
import Instagram from '..//assets/icons/instagramm.svg'
import Whatsapp from '..//assets/icons/whatsapp.svg'
import { navigations, teams } from '../configs'
import { NavLink } from 'react-router-dom'
import {
   EnvironmentOutlined,
   MailOutlined,
   PhoneOutlined,
} from '@ant-design/icons'
import Logo from '../assets/images/main-logo.png'

const Footer = () => {
   return (
      <StyledFooter>
         <Flex className="inner" vertical gap={15}>
            <Flex justify="space-between" align="center">
               <Flex align="center">
                  <img width={100} src={Logo} alt="logo" />
                  <h1>Abdysh-ata</h1>
               </Flex>

               <Flex align="center" gap={30}>
                  <a href="">
                     <Telegram />
                  </a>

                  <a href="">
                     <Instagram />
                  </a>

                  <a href="">
                     <Whatsapp />
                  </a>
               </Flex>
            </Flex>
            <div className="line" />
            <Flex justify="space-between">
               <Flex vertical gap={20}>
                  <p className="title">Разделы сайта</p>

                  <nav>
                     <Flex vertical gap={12}>
                        {navigations.map(({ path, title, id }) => (
                           <NavLink key={id} to={path}>
                              {title}
                           </NavLink>
                        ))}
                     </Flex>
                  </nav>
               </Flex>

               <Flex vertical gap={20}>
                  <p className="title">Контакты</p>

                  <Flex gap={10} vertical>
                     <a href="">
                        <PhoneOutlined />
                        <p>+777 124 653</p>
                     </a>

                     <a href="">
                        <MailOutlined />
                        <p>abdyshata@gmail.com</p>
                     </a>

                     <a href="">
                        <EnvironmentOutlined />
                        <p>Адрес</p>
                     </a>
                  </Flex>
               </Flex>

               <Flex vertical gap={20}>
                  <p className="title">Команды</p>

                  <nav>
                     <Flex vertical gap={12}>
                        {teams.map(({ path, title, id }) => (
                           <NavLink key={id} to={path}>
                              {title}
                           </NavLink>
                        ))}
                     </Flex>
                  </nav>
               </Flex>

               <Flex>
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6738.152065823012!2d74.84559925585054!3d42.89327015188126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eaf1c6c88f963%3A0x1c2c66a255f92694!2zNyDRg9C7LiDQnNC-0YHQutC-0LLRgdC60LDRjywg0JrQsNC90YI!5e0!3m2!1sru!2skg!4v1734777304392!5m2!1sru!2skg"
                     width="450"
                     height="100%"
                     loading="lazy"
                  />
               </Flex>
            </Flex>

            <div className="line" />
            {/* <Flex></Flex> */}
         </Flex>
      </StyledFooter>
   )
}

export default Footer

const StyledFooter = styled.footer`
   padding: 80px 75px;
   background-color: #18191b;
   color: #fff;

   h1 {
      color: #fff;
   }

   & > .inner {
      max-width: 1600px;
      margin: 0 auto;
   }

   & .line {
      border: 0.5px solid;
      opacity: 0.2;
   }

   & .title {
      font-family: 'Roboto Condensed', serif;
      font-size: 30px;
      font-weight: 500;
   }

   a {
      font-size: 17px;
      font-weight: 600;
      color: white;
      line-height: 22px;
      display: flex;
      gap: 10px;
      transition: color, transform 0.4s ease;
   }

   a:hover {
      transform: translateX(5px);
      color: #00a64f;
   }
`
