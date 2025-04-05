import styled from 'styled-components'
import { Flex } from 'antd'
import bgImage from '../../assets/images/victory.webp'
import { useAppDispatch, useAppSelector } from '../../store/store'
import {
   getPartners,
   getPartnersBanner,
} from '../../store/slice/partners/partnersThunk'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const Partners = () => {
   window.scrollTo(0, 0)

   const { partners, banner } = useAppSelector((state) => state.partner)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getPartnersBanner())
      dispatch(getPartners())
   }, [dispatch])

   return (
      <>
         <Helmet>
            <title>Партнеры</title>
            <meta
               name="description"
               content="Спонсоры Абдыш ата являются ключевыми партнерами клуба, обеспечивая необходимую поддержку для развития команд и организации различных мероприятий."
            />
            <meta name="keywords" content="партнеры" />
            <meta name="author" content="Абдыш ата" />
            <script type="application/ld+json">
               {`
         {
           "@context": "https://schema.org",
           "@type": "Organization",
           "name": "Абдыш ата",      
           "member": [
             ${partners
                .map(
                   (sponsor) => `
               {
                 "@type": "Organization",
                 "name": "${sponsor.title}",
                 "url": "${sponsor.link}",
                 "logo": "${sponsor.image}"
               }
             `
                )
                .join(',')}
           ]
         }
      `}
            </script>
         </Helmet>
         <StyledContainer>
            <BackgroundSection banners={banner[0]?.image}>
               <div className="first-part">
                  <Content>
                     <h1 className="main-title">Спонсоры Абдыш ата</h1>
                     <p>
                        Спонсоры Абдыш ата являются ключевыми партнерами клуба,
                        обеспечивая необходимую поддержку для развития команд и
                        организации различных мероприятий. Их вклад способствует
                        росту и популяризации спорта в нашем регионе.
                     </p>
                  </Content>
               </div>
            </BackgroundSection>

            <Flex gap={40} justify="center" wrap className="partners-container">
               {partners.map((sponsor) => (
                  <SponsorItem key={sponsor.id}>
                     <a aria-label="партнер" href={sponsor.link}>
                        <img
                           height="100%"
                           src={sponsor.image}
                           alt={sponsor.title}
                        />
                     </a>
                  </SponsorItem>
               ))}
            </Flex>
         </StyledContainer>
      </>
   )
}

export default Partners

const StyledContainer = styled.main`
   max-width: 1600px;
   margin: 0 auto;
   margin-top: 30px;
   color: white;

   .partners-container {
      padding: 50px 300px 150px;

      @media (max-width: 1024px) {
         padding: 20px;
      }

      @media (max-width: 500px) {
         gap: 15px !important;
      }
   }

   .first-part {
      background: linear-gradient(to top, #ffffff, transparent 50%);
      height: 100%;
   }
`

const BackgroundSection = styled.div<{ banners: string }>`
   position: relative;
   height: 500px;
   padding-top: 200px;
   text-align: center;
   background-image: url(${(props) => props.banners || bgImage});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   margin: 0;

   @media (max-width: 768px) {
      padding-top: 170px;
      height: 300px;
   }
`

const Content = styled.div`
   position: relative;
   z-index: 2;

   .main-title {
      margin-bottom: 5px;
      text-transform: uppercase;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      transition: color 0.3s ease;

      @media (max-width: 768px) {
         font-size: 28px;
      }
   }

   > p {
      width: 440px;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 80px;
      font-size: 13px;
      color: white;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      transition: color 0.3s ease;

      @media (max-width: 768px) {
         width: 90%;
         font-size: 10px;
         color: #ffcc00;
      }
   }

   &:hover .main-title,
   &:hover > p {
      color: #ffcc00;
   }
`

const SponsorItem = styled.div`
   flex: 0 0 calc(18% - 40px);
   max-width: calc(25% - 40px);
   display: flex;
   gap: 40px;
   align-items: center;
   justify-content: center;
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-5px);
   }

   img {
      display: block;
      padding: 10px;
      width: 155px;
      height: 140px;
      object-fit: contain;
      cursor: pointer;
      transition: transform 0.3s ease;
   }

   img:hover {
      transform: translateY(-6px);
   }

   @media (max-width: 500px) {
      flex: 0 0 calc(20% - 10px);
      max-width: 100%;

      img {
         width: 110px;
      }
   }
`
