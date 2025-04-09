import { Flex } from 'antd'
import styled from 'styled-components'
import Telegram from '../../assets/icons/telegram.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Whatsapp from '../../assets/icons/whatsapp.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Tiktok from '../../assets/icons/tiktok.svg'
import Youtube from '../../assets/icons/youtube.svg'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { FC, useEffect } from 'react'
import { CONTACTS_THUNK } from '../../store/slice/contacts/contactsThunk'
import FooterSection from './FooterSection'
import FooterContacts from './FooterContacts'
import logo from '../../assets/images/white-logo.png'

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
         href: `https://wa.me/${contact.whatsapp}`,
         Icon: Whatsapp,
      },
      {
         label: 'Перейти в whatsapp чат',
         href: `https://youtube.com/@fc-abdysh-ata?si=FzUmxg_dUyoSBoAR`,
         Icon: Youtube,
      },
      {
         label: 'Перейти в whatsapp чат',
         href: `https://www.tiktok.com/@fc_abdysh_ata?_t=ZS-8vMZoh4FDh1&_r=1`,
         Icon: Tiktok,
      },
      {
         label: 'Перейти в whatsapp чат',
         href: `https://www.facebook.com/share/16PmNCFP3S/?mibextid=wwXIfr`,
         Icon: Facebook,
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
                  <img loading="lazy" src={logo} alt="logo" />
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
   background-color: #05a550;
   color: #fff;

   .logo {
      img {
         width: 90px;
         height: 80px;
      }
   }

   @media (max-width: 1024px) {
      padding: 20px 20px;
      .footer-map {
         width: 100%;
      }
   }

   @media (max-width: 450px) {
      .first-block {
         flex-wrap: wrap;

         .socials {
            align-self: end;
         }
      }
   }

   h1 {
      margin-bottom: 0;
      color: #fff;
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
      color: white;
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

         a {
         }
      }
   }

   svg {
      width: 25px;
      height: 25px;
      path {
         fill: white !important;
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
