import styled from 'styled-components'
import { Carousel, Flex, Image, Tabs } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useParams, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getInfrastracture, getTabDetail } from '../../../store/slice/infrastracture/infrastractureThunk'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import { groupBy } from 'lodash'

const Infrastructure = () => {
   const { slug } = useParams<{ slug: string }>()
   const { infrastracture,tabDetail } = useAppSelector((state) => state.infrastracture)
   const dispatch = useAppDispatch()

   const [searchParams, setSearchParams] = useSearchParams()
   const activeTabKey = searchParams.get('tab') || 'main'

   useEffect(() => {
      dispatch(getInfrastracture(slug))
   }, [dispatch, slug])

   const getEmbedUrl = (url: string) => {
      const youtubeMatch = url.match(/(?:youtube\.com.+?v=|be\.com\/)([^&]+)/)
      const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
      if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`
      if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`
      return url
   }

   const handleTabChange = (key: string) => {
   setSearchParams({ tab: key })

   const [type, slugId] = key.split(':')
   const tabSlug = slugId?.split('-')[0]
   if (type && tabSlug && slug) {
      dispatch(getTabDetail({ slug, tabSlug }))
   }
}

   const mainContent = (
      <>
         <Flex className="first-block" gap={40}>
            <Flex vertical>
               <Image className="main-image" src={infrastracture?.image} />
            </Flex>
            <Flex justify="start" gap={30} vertical>
               <h1 className="main-title">{infrastracture?.title}</h1>
               <Flex vertical gap={20}>
                  <Flex gap={20}>
                     {infrastracture?.opening && (
                        <p className="info">
                           <span>Открытие стадиона: </span>
                           {infrastracture.opening}
                        </p>
                     )}
                     {infrastracture?.address && (
                        <p className="info">
                           <span>Адрес: </span>
                           {infrastracture.address}
                        </p>
                     )}
                  </Flex>
                  <Flex gap={20}>
                     {infrastracture?.weave && (
                        <p className="info">
                           <span>Размер поля: </span>
                           {infrastracture.weave}
                        </p>
                     )}
                     {infrastracture?.places && (
                        <p className="info">
                           <span>Вместимость: </span>
                           {infrastracture.places}
                        </p>
                     )}
                  </Flex>
               </Flex>
               <Flex className="short-info" gap={10} vertical>
                  <h2>Краткое описание</h2>
                  <p>{infrastracture?.description}</p>
               </Flex>
            </Flex>
         </Flex>

         {/* {infrastracture?.videos && ( */}
            <Flex style={{ overflowX: 'scroll' }} gap={20}>
               {infrastracture?.videos.map(({ video }, index) => (
                  <iframe
                     key={index}
                     width="100%"
                     height="240"
                     title={`видео обзор ${index + 1}`}
                     src={getEmbedUrl(video)}
                     className="video"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
               ))}
            </Flex>
         {/* )} */}

         <h2 className="main-title">Галерея</h2>
         <Swiper
            navigation
            modules={[FreeMode, Navigation]}
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
               350: { slidesPerView: 1.2 },
               500: { slidesPerView: 2 },
               900: { slidesPerView: 3 },
            }}
         >
            {infrastracture?.images?.map((item) => (
               <SwiperSlide key={item.id}>
                  <img loading="lazy" className="gallery-image" src={item.image} alt="image" />
               </SwiperSlide>
            ))}
         </Swiper>

         {infrastracture?.football_fields?.length > 0 && (
            <div style={{ marginTop: '60px' }}>
               <h2 className="main-title">Футбольные поля</h2>
               <Flex wrap="wrap" gap={20}>
                  {infrastracture?.football_fields.map((item:any) => (
                     <StyledCard key={item.id}>
                        <div className="carousel-wrapper">
                           <StyledCarousel autoplay autoplaySpeed={6000} dots={false} arrows>
                              {[item.image, ...(item.inf_images || [])].map((img, index) => (
                                 <div key={index}>
                                    <img
                                       className="card-image"
                                       src={img?.image || img}
                                       alt={`image-${index}`}
                                       loading="lazy"
                                    />
                                 </div>
                              ))}
                           </StyledCarousel>
                           <div className="overlay" />
                           <h3 className="card-title">{item.title}</h3>
                        </div>
                     </StyledCard>
                  ))}
               </Flex>
            </div>
         )}

         <Flex vertical className="map-block">
            <h2>Маршрут</h2>
            <iframe
               src={infrastracture?.map_url}
               width="100%"
               height="300"
               title="Карта"
               loading="lazy"
               style={{ borderRadius: '6px', border: 'none' }}
            />
         </Flex>
      </>
   )

   const groupedTabs = groupBy(infrastracture?.tabs || [], 'type')

  const tabItems = [
  {
    key: 'main',
    label: 'Главная',
    children: mainContent,
  },
  ...Object.entries(groupedTabs).flatMap(([type, tabs]) =>
    tabs.map((tab) => {
      const tabKey = `${type}:${tab.slug}-${tab.id}`
      return {
        key: tabKey,
        label: tab.title,
        children: (
          <div style={{ padding: '15px 0', fontSize: '16px' }}>
            <div dangerouslySetInnerHTML={{ __html: tabDetail?.slug === tab.slug ? tabDetail?.content : tab.content }} />
          </div>
        ),
      }
    })
  ),
]

   return (
      <StyledContainer>
         <Tabs
            type="line"
            items={tabItems}
            activeKey={activeTabKey}
            onChange={handleTabChange}
         />
      </StyledContainer>
   )
}

export default Infrastructure

const StyledCard = styled.div`
   width: calc(50% - 10px);
   border-radius: 8px;
   overflow: hidden;
   position: relative;
   box-sizing: border-box;
   max-width: 1600px;

   .carousel-wrapper {
      position: relative;
      width: 100%;
      height: auto;

      .overlay {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background: rgba(0, 0, 0, 0.187);
         z-index: 1;
         border-radius: 6px;
      }

      .card-title {
         position: absolute;
         z-index: 2;
         top: 85%;
         font-size: 20px;
         font-weight: 700;
         color: #fff;
         text-transform: uppercase;
         text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
         padding: 0 10px;
          @media (max-width: 425px) {
          top: 72%;
               }
      }

      .card-image {
         width: 100%;
         object-fit: cover;
         border-radius: 6px;
         display: block;
      }
   }

   @media (max-width: 768px) {
      width: 100%;
      .carousel-wrapper {
         height: 200px;
      }
   }
`

const StyledContainer = styled.main`
   max-width: 1600px;
   margin: 0 auto;
   margin-top: 80px;
   padding: 20px 75px;
   background-color: #f9f9f9;

   @media (max-width: 1200px) {
      padding: 20px 40px;
   }

   @media (max-width: 768px) {
      padding: 20px 16px;
   }

   .main-title {
      font-size: 40px;
      color: #333;
      margin: 40px 0 20px;

      @media (max-width: 768px) {
         font-size: 28px;
         margin: 30px 0 15px;
      }
   }

   .first-block {
      margin-bottom: 50px;
      display: flex;

      .main-image {
         object-fit: cover;
         height: 400px;
         width: 650px;
         border-radius: 6px;

         @media (max-width: 1024px) {
            height: 300px;
            width: 100%;
      flex-wrap: wrap;

         }
      }

      .info {
         font-size: 18px;
         width: 330px;
         @media (max-width: 1400px) {
         width: auto;
      }

         @media (max-width: 768px) {
            font-size: 16px;
         }
         
         span {
            color: grey;
         }
      }

      @media (max-width: 1024px) {
         flex-direction: column;
         gap: 20px;
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

   .gallery-image {
      border-radius: 6px;
      width: 100%;
      height: 230px;

      @media (max-width: 768px) {
         height: 170px;
      }
   }

   .map-block {
      margin-top: 80px;
      margin-bottom: 30px;

      h2 {
         font-size: 40px;
         margin-bottom: 20px;
         color: #333;

         @media (max-width: 768px) {
            font-size: 28px;
         }
      }

      iframe {
         width: 100%;
         border-radius: 6px;
         border: none;
      }
   }

   iframe.video {
      width: 100% !important;
      height: 240px;
      border-radius: 6px;
      border: none;

      @media (max-width: 768px) {
         height: 200px;
      }
   }

   .swiper {
      padding: 10px 0;
   }

   .swiper-button-prev,
   .swiper-button-next {
      color: #ed5a0c;
      width: 40px;
      height: 40px;

      @media (max-width: 768px) {
         width: 30px;
         height: 30px;
      }
   }
`

const StyledCarousel = styled(Carousel)`
   .slick-slide {
      text-align: center;
      height: 250px;
      line-height: 250px;
      background: #fff;
   }

   .slick-slide img {
      display: block;
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 6px;
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