import { useEffect, useState } from 'react'
import { Carousel, Flex } from 'antd'
import styled, { keyframes } from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import {
   getAchievements,
   getAchievementsBanner,
} from '../../../store/slice/ahievements/ahievementsThunk'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'

const Trophy = () => {
   window.scrollTo(0, 0)
   const { achievements, banner } = useAppSelector(
      (state) => state.achievements
   )
   const isMobile = window.innerWidth <= 768
   const [isUserScrolling, setIsUserScrolling] = useState<boolean>(false)
   useEffect(() => {
      const handleScroll = () => setIsUserScrolling(true)
      const scrollDown = () =>
         !isUserScrolling && !innerWidth
            ? window.scrollBy({
                 top: 50,
                 behavior: 'smooth',
              })
            : null
      window.addEventListener('wheel', handleScroll, { passive: false })
      const interval = setInterval(scrollDown, 70)
      return () => {
         clearInterval(interval)
         window.removeEventListener('wheel', handleScroll)
      }
   }, [isUserScrolling, isMobile])
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(getAchievements())
      dispatch(getAchievementsBanner())
   }, [dispatch])
   return (
      <main>
         <Helmet>
            <title>Достижения Футбольного Клуба «Абдыш-Ата»</title>
            <meta
               name="description"
               content="Посмотрите достижения Абдыш ата в нашей трофейной комнате. Узнайте о национальных и европейских наградах клуба."
            />
            <meta
               name="keywords"
               content="трофейная комната, достижения, Абдыш ата"
            />
            <meta name="author" content="Абдыш ата" />
            <meta property="og:title" content="Трофейная комната Абдыш ата" />
            <meta
               property="og:description"
               content="Посмотрите достижения Абдыш ата."
            />
            <meta property="og:url" content="http://mysite.com/trophy" />
            <meta property="og:type" content="website" />
            <script type="application/ld+json">
               {`
               {
                 "@context": "https://schema.org",
                 "@type": "WebPage",
                 "name": "Трофейная комната Абдыш ата",
                 "description": "Посмотрите достижения Абдыш ата.",
                 "url": "http://mysite.com/trophy",
               }
            `}
            </script>
         </Helmet>
         <StyledContainer vertical>
            <StyledFirstPart banner={banner[0]?.image}>
               <div className="first-part">
                  <Flex className="first" align="end">
                     <DarkOverlay />
                     <Flex justify="end" vertical className="container">
                        <h2 className="title">
                           ДОСТИЖЕНИЯ ФУТБОЛЬНОГО КЛУБА АБДЫШ-АТА»
                        </h2>
                        <p>
                           В этом разделе вы можете посмотреть наши достижения
                        </p>
                     </Flex>
                  </Flex>
               </div>
            </StyledFirstPart>
            <div className="second-part-trophy">
               <p className="text">
                  Футбольный клуб «Абдыш-Ата» (г. Кант) — это команда с
                  амбициозным духом, твердым стремлением к победе и постоянным
                  развитием на протяжении своей истории. Каждый сезон для нас —
                  это возможность выйти на новый уровень и продемонстрировать
                  силу, сплоченность и мастерство на поле.
                  <br />
                  <br />
                  <strong>Наш путь — это путь прогресса</strong>
                  <br />
                  <br />
                  ФК «Абдыш-Ата» — это не просто клуб, это семья, для которой
                  важны не только титулы, но и развитие футбольной культуры,
                  поддержка молодёжи и преданность болельщикам. Мы не
                  останавливаемся на достигнутом и стремимся к новым вершинам в
                  каждом сезоне.
                  <br />
                  <br />
                  <strong>Вперёд, Абдыш-Ата!</strong>
               </p>
               <Flex vertical className="trophy-block-container">
                  {achievements.map((item, index) => (
                        <Flex
                           justify="space-between"
                           key={item.id}
                           className="trophy-block"
                           style={{
                              flexDirection:
                                 index % 2 === 1 ? 'row-reverse' : 'row',
                              justifyContent:
                                 index % 2 === 1 ? 'space-between' : 'start',
                           }}
                        >
                           <StyledCarousel autoplay dots={true}>
  {[item.image, ...(item.images || [])].map((img: any, index: number) => (
            <div key={index}>
                <img
                              className="image"
                              loading="lazy"
                              src={img.image || item.image}
                              alt={img.id}
                              />
            </div>
         ))}
                          
                              </StyledCarousel>
                           <Flex gap={40} vertical className="texstovka">
                              <h2>{item.title}</h2>
                              <p className="description-text">
                                 {item.descriptions}
                              </p>
                               <NavLink to={`/trophy/${item.slug}`} key={item.id}>
                              <p className="read-more">Читать дальше →</p>
                               </NavLink>
                           </Flex>
                        </Flex>
                  ))}
               </Flex>
            </div>
         </StyledContainer>
      </main>
   )
}

export default Trophy

const fadeInUp = keyframes`
0% { opacity: 0; transform: translateY(20px)}
100% {opacity: 1; transform: translateY(0)}
`
const StyledContainer = styled(Flex)`
   margin-top: 30px;
   .description-text {
      color: grey;
               @media (max-width: 400px) {
                  font-size: 13px;
               }
   }
   .read-more {
      color: #ed5a0c !important;
   }
   .read-more:hover {
      color: #f39f71 !important;
   }
   @media (max-width: 768px) {
      flex-direction: column;
   }
   .second-part-trophy {
      max-width: 1600px;
      margin: 0 auto;
   }
   .first-part {
      height: 100%;
      width: 100%;
      position: relative;
      z-index: 9;
      padding: 75px;
      .first {
         max-width: 1600px;
         margin: 0 auto;
         height: 100%;
      }
      @media (max-width: 1024px) {
         padding: 10px;
      }
   }
   .image {
      height: 400px;
      object-fit: cover;
      @media (max-width: 768px) {
         height: auto;
         min-width: none;
      }
      @media (max-width: 480px) {
         width: 100%;
         height: 250px;
      }
   }
   .text {
      padding: 75px;
      padding-bottom: 0;
      height: auto;
      font-size: 20px;
      font-weight: 200;
      @media (max-width: 1024px) {
         padding: 10px;
         line-height: 1.5;
      }
      @media (max-width: 768px) {
         font-size: 16px;
      }
      @media (max-width: 480px) {
         font-size: 12px;
         padding-bottom: 0;
      }
   }
   .trophy-block-container {
      padding: 75px;
      @media (max-width: 1024px) {
         padding: 10px;
      }
      @media (max-width: 480px) {
         gap: 30px;
      }
      .trophy-block {
         &:hover .read-more {
            color: grey;
         }
         @media (max-width: 480px) {
            flex-direction: column !important;
         }
         @media (max-width: 768px) {
            padding: 0px;
         }
         .texstovka {
            padding: 40px;
            @media (max-width: 768px) {
               gap: 20px !important;
               padding: 25px;
               .text-info {
                  font-size: 14px;
               }
            }
            @media (max-width: 610px) {
               gap: 20px !important;
               padding: 10px;
               .text-info {
                  gap: 10px !important;
                  font-size: 10px;
               }
            }
            @media (max-width: 480px) {
               gap: 10px !important;
               .text-info {
                  gap: 10px !important;
                  font-size: 13px;
               }
            }
            h2 {
               font-family: 'Inter', serif;
               font-size: 35px;
               font-weight: 600;
               @media (max-width: 768px) {
                  font-size: 23px;
               }
               @media (max-width: 610px) {
                  font-size: 20px;
               }
               @media (max-width: 400px) {
                  font-size: 20px;
               }
            }
         }
      }
   }
`
const StyledFirstPart = styled(Flex)<{ banner: string | undefined }>`
   position: relative;
   background-image: url(${(props) => props.banner});
   background-size: cover;
   background-position: center;
   height: 70vh;
   width: 100%;
   color: white;
   .container {
      position: relative;
      z-index: 2;
      text-align: start;
      .title {
         margin-bottom: 5px;
         text-transform: uppercase;
         color: white;
         font-size: 45px;
         text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
         transition: color 0.3s ease;
         animation-name: ${fadeInUp};
         animation-delay: 0.5s;
      }
      > p {
         text-align: start;
         font-size: 20px;
         color: white;
         text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
         transition: color 0.3s ease;
         @media (max-width: 768px) {
            font-size: 16px;
         }
      }
      &:hover .title,
      &:hover > p {
         color: #ffcc00;
      }
   }
   @media (max-width: 1024px) {
      height: 60vh;
      .container {
         .title {
            font-size: 60px;
         }
         > p {
            font-size: 17px;
         }
      }
   }
   @media (max-width: 768px) {
      height: 300px;
      .container {
         .title {
            font-size: 40px;
         }
      }
   }
   @media (max-width: 610px) {
      height: 40vh;
      .container {
         .title {
            font-size: 25px;
         }
         > p {
            font-size: 12px;
         }
      }
   }
`
const DarkOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(to bottom, #000, transparent 99%);
   z-index: 1;
`



const StyledCarousel = styled(Carousel)`
   width:620px;
   .slick-slide {
      text-align: center;
      line-height: 250px;
      background: #fff;
   }

   @media (max-width: 500px) {
      width: 350px;
   }

   .slick-slide img {
      display: block;
      width: 100%;
      object-fit: cover;
   }

   .slick-prev,
   .slick-next {
      z-index: 10;
      width: 30px;
      height: 30px;
      background-color: rgba(237, 90, 12, 0.8);
      border-radius: 50%;
      display: flex !important;
      align-items: center;
      justify-content: center;
   }

   .slick-prev::after,
   .slick-next::after {
      font-size: 20px;
      color: white;
      opacity: 1;
      top:9px;
      left: 6px;
   }
   .slick-prev::after{
      left: 10px;

   }
   
   .slick-prev:hover,
   .slick-next:hover {
      background-color: rgba(237, 90, 12, 1);
   }

  
`