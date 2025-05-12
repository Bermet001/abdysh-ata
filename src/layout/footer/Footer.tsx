import { Flex } from 'antd';
import styled from 'styled-components';
import Telegram from '../../assets/icons/telegram.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Whatsapp from '../../assets/icons/whatsapp.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Tiktok from '../../assets/icons/tiktok.svg';
import Youtube from '../../assets/icons/youtube.svg';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { FC, useEffect } from 'react';
import { CONTACTS_THUNK } from '../../store/slice/contacts/contactsThunk';
import FooterSection from './FooterSection';
import FooterContacts from './FooterContacts';
import logo from '../../assets/images/white-logo.webp';

const Footer: FC = () => {
   const dispatch = useAppDispatch();
   const { headerTeam } = useAppSelector((state) => state.team);
   const { contacts } = useAppSelector((state) => state.contacts);
   const contact = contacts?.[0] || {};

   useEffect(() => {
      dispatch(CONTACTS_THUNK.getContacts());
   }, [dispatch]);

   const navigations = [
      { path: '/', title: 'Главная' },
      { path: 'team/futbolnaya-akademiya', title: 'Академия' },
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
   ];

   const socialLinks = [
      {
         label: 'Перейти в телеграм чат',
         href: contact.telegram || '#',
         Icon: Telegram,
      },
      {
         label: 'Перейти в инстаграм директ',
         href: contact.instagram || '#',
         Icon: Instagram,
      },
      {
         label: 'Перейти в WhatsApp чат',
         href: contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : '#',
         Icon: Whatsapp,
      },
      {
         label: 'Перейти на YouTube канал',
         href: contact.youtube || '#',
         Icon: Youtube,
      },
      {
         label: 'Перейти в TikTok',
         href: contact.tik_tok || '#',
         Icon: Tiktok,
      },
      {
         label: 'Перейти на Facebook',
         href: contact.facebook || '#',
         Icon: Facebook,
      },
   ];

   return (
      <StyledFooter>
         <Flex className="inner" vertical gap={15}>
            <Flex
               className="first-block"
               justify="space-between"
               align="center"
               gap={20}
            >
               <Flex gap={5} className="logo" align="center">
                  <img
                     src={logo}
                     alt="Логотип Абдыш-Ата"
                     width={90}
                     height={80}
                     loading="lazy"
                     style={{ aspectRatio: '90 / 80' }}
                  />
                  <h1 className="main-title">Абдыш-ата</h1>
               </Flex>
               <Flex wrap className="socials" align="center" gap={30}>
                  {socialLinks.map(({ label, href, Icon }, index) => (
                     <a
                        key={index}
                        aria-label={label}
                        href={href}
                        rel="noopener noreferrer"
                     >
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
               <div className="map-wrapper">
                  <iframe
                     src={contact.location || 'about:blank'}
                     width="450"
                     height="300"
                     loading="lazy"
                     className="footer-map"
                     title="Локация клуба Абдыш-Ата"
                  />
               </div>
            </Flex>
            <div className="line" />
         </Flex>
      </StyledFooter>
   );
};

export default Footer;

const StyledFooter = styled.footer`
   padding: 40px;
   background-color: #05a550;
   color: #fff;
   min-height: 507px; /* Изменено с height на min-height для предотвращения сжатия */

   .logo {
      img {
         width: 90px;
         height: 80px;
         aspect-ratio: 90 / 80; /* Зафиксировано соотношение сторон */
         object-fit: contain;
      }

      @media (max-width: 450px) {
         img {
            width: 60px;
            height: 60px;
            aspect-ratio: 60 / 60; /* Адаптивное соотношение */
         }
      }
   }

   .map-wrapper {
      width: 450px;
      height: 300px; /* Зарезервировано пространство для iframe */
      position: relative;
      @media (max-width: 1024px) {
         width: 100%;
         height: 300px; /* Фиксированная высота на мобильных */
      }
   }

   .footer-map {
      width: 100%;
      height: 100%;
      border: 0; /* Убрана рамка для чистоты */
      position: absolute;
      top: 0;
      left: 0;
   }

   @media (max-width: 1024px) {
      padding: 20px;
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
      width: 100%;
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

   .footer-main-info-box {
      min-height: 300px; /* Зарезервировано место для динамического контента */
      @media (max-width: 500px) {
         min-height: auto; /* Адаптивность на мобильных */
         justify-content: flex-start !important;
      }
   }

   .column-footer {
      @media (max-width: 500px) {
         max-width: 145px !important;
      }
   }

   .socials {
      @media (max-width: 500px) {
         gap: 10px !important;
      }
   }

   svg {
      width: 20px;
      height: 20px;
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
`;