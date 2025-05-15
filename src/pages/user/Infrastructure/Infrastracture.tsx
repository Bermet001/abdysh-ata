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
                  {infrastracture?.weave &&
                     <p className="info">
                        <span>Размер поля: </span> {infrastracture?.weave}
                     </p>
                     }

                     {infrastracture?.places &&
                     <p className="info">
                        <span>Вместимость: </span> {infrastracture?.places}
                     </p>
                     }
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
                  <img  loading="lazy" className="gallery-image" src={item.image} alt="image" />
               </SwiperSlide>
            ))}
         </Swiper>

          <div style={{ marginTop: '60px' }}> 
            {infrastracture?.football_fields?.length > 0 && (
           <>
           <h3 className='main-title'>Поля</h3>
               <Flex vertical className="gallery-block">
                  {infrastracture?.football_fields.map((item:any, index:number) => (
                     <Flex
                     key={item.id}
                     className="field-block"
                     style={{
                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '60px',
                     }}
                     >
                        <img
                           loading="lazy"
                           className="field-image"
                           src={item.image}
                           alt={item.title}
                           style={{ width: '45%', borderRadius: '8px' }}
                           />
                        <div style={{ maxWidth: '50%' }}>
                           <h2 style={{ fontSize: '30px', marginBottom: '12px' }}>{item.title}</h2>
                           <p style={{ fontSize: '16px', color: '#333' }}>{item.description}</p>
                        </div>
                     </Flex>
                  ))}
               </Flex>
                  </>
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

   .field-block {
      display: flex;
      align-items: center;
      margin-bottom: 60px;
      gap: 40px;

      &.reverse {
         flex-direction: row-reverse;
      }

      @media (max-width: 1024px) {
         flex-direction: column !important;
         gap: 20px;
      }
   }

   .field-image {
      width: 50%;
      border-radius: 8px;

      @media (max-width: 1024px) {
         width: 100%;
         height: auto;
      }
   }

   .field-text {
      width: 50%;

      h2 {
         font-size: 30px;
         color: #ed5a0c;
         margin-bottom: 12px;
         @media (max-width: 768px) {
            font-size: 24px;
         }
      }

      p {
         font-size: 16px;
         color: #333;
         @media (max-width: 768px) {
            font-size: 14px;
         }
      }

      @media (max-width: 1024px) {
         width: 100%;
      }
   }
`
