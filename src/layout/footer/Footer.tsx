import { Flex } from 'antd'
import styled from 'styled-components'
import Telegram from '../../assets/icons/telegram.svg'
import Instagram from '../../assets/icons/instagramm.svg'
import Whatsapp from '../../assets/icons/whatsapp.svg'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { FC, useEffect } from 'react'
import { CONTACTS_THUNK } from '../../store/slice/contacts/contactsThunk'
import FooterSection from './FooterSection'
import FooterContacts from './FooterContacts'

const Footer: FC = () => {
   const dispatch = useAppDispatch()
   const { headerTeam } = useAppSelector((state) => state.team)
   const { contacts } = useAppSelector((state) => state.contacts)
   const contact = contacts?.[0] || {}

   useEffect(() => {
      dispatch(CONTACTS_THUNK.getContacts())
   }, [dispatch])

   const navigations = [
      { path: '/', title: 'Главная' },
      { path: '/', title: 'Команды', sub_nav: headerTeam },
      {
         path: '/',
         title: 'О клубе',
         sub_nav: [
            { slug: '/history', title: 'История' },
            { slug: '/guideline', title: 'Руководство' },
            { slug: '/contacts', title: 'Контакты' },
         ],
      },
      { path: '/match', title: 'Матчи' },
      { path: '/infrastracture', title: 'Инфраструктура' },
      { path: '/rating', title: 'Турниры' },
      { path: '/partners', title: 'Партнеры' },
      { path: '/trophy', title: 'Наши достижения' },
   ]

   const socialLinks = [
      {
         label: 'Перейти в телеграм чат',
         href: contact.telegram,
         Icon: Telegram,
      },
      {
         label: 'Перейти в инстаграм директ',
         href: contact.instagram,
         Icon: Instagram,
      },
      {
         label: 'Перейти в whatsapp чат',
         href: contact.whatsapp,
         Icon: Whatsapp,
      },
   ]

   return (
      <StyledFooter>
         <Flex className="inner" vertical gap={15}>
            <Flex
               className="first-block"
               justify="space-between"
               align="center"
            >
               <Flex gap={15} className="logo" align="center">
                  <img loading="lazy" src={contact.logo} alt="logo" />
                  <h1 className="main-title">Абдыш-ата</h1>
               </Flex>
               <Flex className="socials" align="center" gap={30}>
                  {socialLinks.map(({ label, href, Icon }, index) => (
                     <a key={index} aria-label={label} href={href}>
                        <Icon />
                     </a>
                  ))}
               </Flex>
            </Flex>
            <div className="line" />

            <Flex
               gap={30}
               wrap
               className="footer-main-info-box"
               justify="space-between"
            >
               <FooterSection title="Разделы сайта" items={navigations} isNav />
               <FooterContacts contact={contact} />
               <FooterSection
                  title="Команды"
                  items={headerTeam.slice(0, 5)}
                  prefix="team/"
               />
               <iframe
                  src={contact.location}
                  width="450px"
                  height="300px"
                  loading="lazy"
                  className="footer-map"
                  title="локация"
               />
            </Flex>
            <div className="line" />
         </Flex>
      </StyledFooter>
   )
}
export default Footer

const StyledFooter = styled.footer`
   padding: 40px;

   .logo {
      img {
         width: 60px;
         height: 75px;
      }
   }

   .socials {
      a > svg {
         fill: #40a852;
         width: 30px;
         height: 30px;

         path {
            fill: #40a852;
         }
      }
   }

   @media (max-width: 1024px) {
      padding: 20px 20px;
      .footer-map {
         width: 100%;
      }
   }
   h1 {
      margin-bottom: 0;
      color: #05a558;
   }
   .inner {
      max-width: 1600px;
      margin: 0 auto;
   }
   .line {
      border: 0.5px solid;
      opacity: 0.2;
   }

   .title {
      font-size: 27px;
      font-weight: 500;
   }
   a {
      font-size: 15px;
      font-weight: 600;
      /* color: white; */
      color: #212121;
      display: flex;
      gap: 10px;
      transition: color 0.4s ease, transform 0.4s ease;
   }
   a:hover {
      transform: translateX(5px);
      color: #ed5a0c;
   }

   @media (max-width: 500px) {
      .footer-main-info-box {
         min-height: 100%;
         justify-content: flex-start !important;
      }

      .column-footer {
         max-width: 145px !important;
      }

      .socials {
         gap: 10px !important;
      }
   }

   @media (max-width: 1024px) {
      .title {
         font-size: 16px;
      }
      p,
      a {
         font-size: 12px;
      }
   }
`
