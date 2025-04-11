import styled from 'styled-components'
import { Flex, Image } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getInfrastracture } from '../../../store/slice/infrastracture/infrastractureThunk'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'

const Infrastructure = () => {
   window.scrollTo(0, 0)
   const { slug } = useParams<{ slug: string }>()
   const { infrastracture } = useAppSelector((state) => state.infrastracture)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getInfrastracture(slug))
   }, [dispatch, slug])

   return (
      <StyledContainer>
         <Flex className="first-block" gap={40}>
            <Flex vertical>
               <Image className="main-image" src={infrastracture?.image} />
            </Flex>

            <Flex justify="start" gap={30} vertical>
               <h1 className="main-title">{infrastracture?.title}</h1>

               <Flex vertical gap={20}>
                  <Flex gap={20}>
                     <p className="info">
                        <span>Открытие стадиона: </span>
                        {infrastracture?.opening}
                     </p>

                     <p className="info">
                        <span>Адрес: </span> {infrastracture?.address}
                     </p>
                  </Flex>

                  <Flex gap={20}>
                     <p className="info">
                        <span>Размер поля: </span> {infrastracture?.weave}
                     </p>

                     <p className="info">
                        <span>Вместимость: </span> {infrastracture?.places}
                     </p>
                  </Flex>
               </Flex>

               <Flex className="short-info" gap={10} vertical>
                  <h2>Краткое описание</h2>
                  <p>{infrastracture?.description}</p>
               </Flex>
            </Flex>
         </Flex>

         <Flex style={{ overflowX: 'scroll' }} gap={20}>
            {infrastracture?.videos?.map(({ video }, index) => {
               const getEmbedUrl = (url: string) => {
                  const youtubeMatch = url.match(
                     /(?:youtube\.com.+?v=|be\.com\/)([^&]+)/
                  )
                  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)

                  if (youtubeMatch)
                     return `https://www.youtube.com/embed/${youtubeMatch[1]}`
                  if (vimeoMatch)
                     return `https://player.vimeo.com/video/${vimeoMatch[1]}`
                  return url
               }

               return (
                  <iframe
                     key={index}
                     width="100%"
                     title={`видео обзор стадиона ${index + 1}`}
                     height="240"
                     src={getEmbedUrl(video)}
                     className="video"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
               )
            })}
         </Flex>

         <h2 className="main-title">Картинки</h2>
         <Swiper
            navigation
            modules={[FreeMode, Navigation]}
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
               350: { slidesPerView: 2 },
               500: { slidesPerView: 2 },
               900: { slidesPerView: 3 },
            }}
         >
            {infrastracture?.images?.map((item) => (
               <SwiperSlide key={item.id}>
                  <img className="gallery-image" src={item.image} alt="image" />
               </SwiperSlide>
            ))}
         </Swiper>

         <div style={{ marginTop: '60px' }}>
            {infrastracture?.football_fields &&
               infrastracture?.football_fields?.length > 0 && (
                  <Flex vertical className="gallery-block">
                     <Flex wrap="wrap" gap={20}>
                        {infrastracture?.football_fields?.map((item) => (
                           <StyledCard key={item?.id}>
                              <img
                                 className="card-image"
                                 src={item?.image}
                                 alt="стадион"
                              />
                              <h3 className="card-title">{item?.title}</h3>
                           </StyledCard>
                        ))}
                     </Flex>
                  </Flex>
               )}
         </div>

         <Flex vertical className="map-block">
            <h2>Маршрут</h2>
            <iframe
               src={
                  infrastracture?.map_url ||
                  'https://www.google.com/maps/embed?pb=!1m18...'
               }
               width="100%"
               height="300"
               title="место положение стадиона"
               loading="lazy"
               style={{ borderRadius: '6px', border: 'none' }}
            />
         </Flex>
      </StyledContainer>
   )
}

export default Infrastructure

const StyledContainer = styled.main`
   max-width: 1600px;
   margin: 0 auto;
   margin-top: 80px;
   padding: 20px 75px;
   background-color: #f9f9f9;

   .swiper-button-prev,
   .swiper-button-next {
      color: #ed5a0c;
      width: 50px;
      height: 50px;
   }

   @media (max-width: 1300px) {
      padding: 20px;
   }

   .first-block {
      margin-bottom: 50px;

      .main-image {
         object-fit: cover;
         height: 400px;
         width: 650px;
         border-radius: 6px;

         @media (max-width: 768px) {
            height: 300px;
            width: 100%;
         }
      }

      .main-title {
         margin-bottom: 0px;
         font-size: 40px;
         color: #333;

         @media (max-width: 768px) {
            font-size: 30px;
         }
      }

      .info {
         span {
            color: grey;
         }
      }

      @media (max-width: 1024px) {
         flex-direction: column !important;
         gap: 20px !important;
      }
   }

   .gallery-image {
      border-radius: 6px;
      width: 100%;
      height: 230px;

      @media (max-width: 768px) {
         height: 170px;
      }
   }

   .media {
      .main-title {
         margin-bottom: 30px;
         font-size: 40px;
         color: #333;

         @media (max-width: 768px) {
            font-size: 30px;
         }
      }

      margin-top: 70px;

      .video {
         border-radius: 6px;
         border: none;

         @media (max-width: 970px) {
            width: 100% !important;
            height: auto;
         }
      }
   }

   .short-info {
      h2 {
         font-size: 25px;
         color: #333;

         @media (max-width: 768px) {
            font-size: 20px;
         }
      }

      p {
         font-weight: 300;
         font-size: 18px;

         @media (max-width: 768px) {
            font-size: 16px;
         }
      }
   }

   .map-block {
      margin-top: 80px;

      h2 {
         font-size: 40px;
         margin-bottom: 20px;
         color: #333;

         @media (max-width: 768px) {
            font-size: 30px;
         }
      }

      margin-bottom: 30px;
   }

   .gallery-block {
      margin-bottom: 50px;

      .section-title {
         font-size: 40px;
         color: #333;
         margin-bottom: 30px;

         @media (max-width: 768px) {
            font-size: 30px;
         }
      }
   }
`

const StyledCard = styled.div`
   background: #fff;
   border: 1px solid #e0e0e0;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   padding: 20px;
   border-radius: 8px;
   flex: 1 1 calc(33.333% - 40px / 3);
   box-sizing: border-box;

   .card-title {
      font-size: 18px;
      font-weight: 700;
      color: #000;
      margin: 0 0 15px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      @media (max-width: 768px) {
         font-size: 16px;
      }
   }

   .card-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 4px;

      @media (max-width: 768px) {
         height: 200px;
      }
   }

   @media (max-width: 768px) {
      flex: 1 1 100%;
   }
`
