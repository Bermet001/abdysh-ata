import styled from 'styled-components'
import { Flex, Image } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getInfrastracture } from '../../../store/slice/infrastracture/infrastractureThunk'

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
                        <span>Область: </span>
                        {infrastracture?.region}
                     </p>
                     <p className="info">
                        <span>Адрес: </span> {infrastracture?.address}
                     </p>
                  </Flex>

                  <p className="info">
                     <span>Размеры: </span> {infrastracture?.weave}
                  </p>
               </Flex>

               <Flex className="short-info" gap={10} vertical>
                  <h2>Краткое описание</h2>
                  <p>{infrastracture?.description}</p>
               </Flex>
            </Flex>
         </Flex>

         <Flex style={{ overflowX: 'scroll' }} gap={20}>
            {infrastracture?.videos.map(({ video }, index) => {
               const getEmbedUrl = (url: string) => {
                  if (url.includes('youtube.com')) {
                     return `https://www.youtube.com/embed/${
                        url.split('v=')[1]?.split('&')[0]
                     }`
                  } else if (url.includes('vimeo.com')) {
                     return `https://player.vimeo.com/video/${url
                        .split('/')
                        .pop()}`
                  }
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

         <Flex vertical gap={20} wrap className="gallery">
            <h2 className="main-title">Картинки</h2>
            <Flex gap={20} wrap>
               {infrastracture?.images.map((item) => (
                  <img
                     key={item.id}
                     className="gallery-image"
                     src={item.image}
                     alt="image"
                  />
               ))}
            </Flex>
         </Flex>

         <Flex vertical className="map-block">
            <h2>Маршрут</h2>

            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18..."
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
   margin-top: 80px;
   padding: 20px 75px;
   background-color: #f9f9f9;

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

   .gallery {
      padding: 0 100px;
      margin-top: 90px;

      @media (max-width: 1300px) {
         margin-top: 50px;
         padding: 0 20px;
      }

      @media (max-width: 768px) {
         padding: 0;
      }

      img {
         width: calc(33.33% - 20px);
         height: 250px;
         object-fit: cover;
         border-radius: 6px;

         @media (max-width: 768px) {
            width: calc(50% - 10px);
            height: auto;
         }
         @media (max-width: 480px) {
            width: calc(50% - 10px);
         }
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
`
