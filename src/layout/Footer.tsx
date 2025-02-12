import { Flex } from 'antd'
import styled from 'styled-components'
import Telegram from '..//assets/icons/telegram.svg'
import Instagram from '..//assets/icons/instagramm.svg'
import Whatsapp from '..//assets/icons/whatsapp.svg'
// import { teams } from '../configs'
import { NavLink } from 'react-router-dom'
import {
   EnvironmentOutlined,
   MailOutlined,
   PhoneOutlined,
} from '@ant-design/icons'

import { useAppDispatch, useAppSelector } from '../store/store'
import { useEffect } from 'react'
import { CONTACTS_THUNK } from '../store/slice/contacts/contactsThunk'

const Footer = () => {
   const { contacts } = useAppSelector((state) => state.contacts)
   const { allTeams } = useAppSelector((state) => state.team)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(CONTACTS_THUNK.getContacts())
   }, [dispatch])

   const navigations = [
      { path: '/', title: 'Главная', id: 1 },
      {
         path: '/',
         title: 'Команды',
         id: 2,
         sub_nav: allTeams,
      },

      {
         path: '/',
         title: 'О клубе',
         sub_nav: [
            {
               slug: '/history',
               title: 'История ',
               id: 21,
            },
            {
               slug: '/guideline',
               title: 'Руководство',
               id: 22,
            },
            {
               slug: '/contacts',
               title: 'Контакты',
               id: 23,
            },
         ],
         id: 3,
      },

      { path: '/match', title: 'Матчи', id: 4 },

      {
         path: '/infrastracture',
         title: 'Инфраструктура',

         sub_nav: [
            {
               slug: '/',
               title: 'СК Нитро-Арена ',
               id: 21,
            },
            {
               slug: '/',
               title: 'СК Спорт-Сити',
               id: 22,
            },
            {
               slug: '/',
               title: 'Стадион Центральный',
               id: 23,
            },
            {
               slug: '/',
               title: 'Тренажерный зал',
               id: 24,
            },
            {
               slug: '/',
               title: 'Батутный зал',
               id: 25,
            },
         ],
         id: 8,
      },
      { path: '/rating', title: 'Таблица рейтинга', id: 5 },
      { path: '/partners', title: 'Партнеры', id: 6 },
      { path: '/trophy', title: 'Наши достижения', id: 7 },
   ]

   const contact = contacts.length > 0 ? contacts[0] : null

   return (
      <StyledFooter>
         <Flex className="inner" vertical gap={15}>
            <Flex
               className="first-block"
               justify="space-between"
               align="center"
            >
               <Flex className="logo" align="center">
                  <img width={100} src={contact?.logo} alt="logo" />
                  <h1>Abdysh-ata</h1>
               </Flex>

               <Flex className="socials" align="center" gap={30}>
                  <a href={contact?.telegram}>
                     <Telegram />
                  </a>

                  <a href={contact?.instagram}>
                     <Instagram />
                  </a>

                  <a href={contact?.whatsapp}>
                     <Whatsapp />
                  </a>
               </Flex>
            </Flex>

            <div className="line" />

            <Flex className="footer-main-info-box" justify="space-between">
               <Flex vertical gap={20}>
                  <p className="title">Разделы сайта</p>

                  <nav>
                     <Flex className="footer-nav" vertical gap={12}>
                        {navigations.map(({ path, title, id }) => (
                           <NavLink key={id} to={path}>
                              {title}
                           </NavLink>
                        ))}
                     </Flex>
                  </nav>
               </Flex>

               <Flex className="footer-nav" vertical gap={20}>
                  <p className="title">Контакты</p>

                  <Flex gap={10} vertical>
                     <a href="">
                        <PhoneOutlined />
                        <p>{contact?.phone}</p>
                     </a>

                     <a href="mailto:abdyshata@gmail.com">
                        <MailOutlined />
                        <p>{contact?.email}</p>
                     </a>

                     <a href="">
                        <EnvironmentOutlined />
                        <p>Адрес: Лермонтова 2</p>
                     </a>
                  </Flex>
               </Flex>

               <Flex className="footer-nav" vertical gap={20}>
                  <p className="title">Команды</p>

                  <nav>
                     <Flex vertical gap={12}>
                        {allTeams.map(({ slug, title, id }) => (
                           <NavLink key={id} to={`team/${slug}`}>
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
                     className="footer-map"
                  />
               </Flex>
            </Flex>

            <div className="line" />
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

   @media (max-width: 1220px) {
      padding: 80px 30px;
      .inner {
         .first-block {
            .logo {
               img {
                  width: 4rem;
               }

               h1 {
                  font-size: 25px;
               }
            }
         }
      }

      .footer-main-info-box {
         flex-wrap: wrap;
         gap: 30px;

         .title {
            font-size: 23px;
         }

         .footer-nav {
            a {
               font-size: 14px;
            }

            gap: 7px !important;
         }

         .footer-map {
            width: 100%;
            min-width: 200px;
            height: auto;
         }
      }
   }

   @media (max-width: 765px) {
      padding: 80px 20px;

      .inner {
         .first-block {
            .logo {
               img {
                  width: 3rem;
               }

               h1 {
                  font-size: 20px;
               }
            }

            .socials {
               gap: 15px !important;

               > a {
                  svg {
                     width: 17px;
                     height: 17px;
                  }
               }
            }
         }
      }
   }

   @media (max-width: 425px) {
      .footer-main-info-box {
         .title {
            font-size: 20px;
         }

         .footer-nav {
            a {
               font-size: 13px;
            }

            gap: 7px !important;
         }

         .footer-map {
            width: 100%;
            min-width: 200px;
            height: auto;
         }
      }
   }
`
