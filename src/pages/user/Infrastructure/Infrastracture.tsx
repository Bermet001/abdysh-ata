import styled from 'styled-components'
import { Flex, Image } from 'antd'

const images = [
   'https://swiperjs.com/demos/images/nature-1.jpg',
   'https://swiperjs.com/demos/images/nature-2.jpg',
   'https://swiperjs.com/demos/images/nature-10.jpg',
   'https://swiperjs.com/demos/images/nature-3.jpg',
   'https://swiperjs.com/demos/images/nature-4.jpg',
]

const Infrastructure = () => {
   window.scrollTo(0, 0)

   return (
      <StyledContainer>
         <Flex className="first-block" gap={40}>
            <Flex vertical>
               <Image
                  className="main-image"
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
               />
            </Flex>

            <Flex justify="start" gap={30} vertical>
               <h1 className="main-title">Краткое название</h1>

               <Flex vertical gap={20}>
                  <Flex gap={20}>
                     <p className="info">
                        <span>Область: </span>Chui
                     </p>
                     <p className="info">
                        <span>Адрес: </span> 1223 САОыкл5 Са
                     </p>
                  </Flex>

                  <p className="info">
                     <span>Размеры: </span>500fs
                  </p>
               </Flex>

               <Flex className="short-info" gap={10} vertical>
                  <h2>Краткое описание</h2>
                  <p>
                     Join us for an unforgettable mountain tour! For several
                     days you will enjoy amazing views, clean mountain air and
                     exciting adventures...
                  </p>
               </Flex>
            </Flex>
         </Flex>

         <Flex vertical className="media">
            <h2 className="main-title">Видео</h2>
            <Flex style={{ overflowX: 'scroll' }} gap={20}>
               {[...Array(3)].map((_, index) => (
                  <iframe
                     key={index}
                     width="100%"
                     height="240"
                     src="https://www.youtube.com/embed/xx-fB-Ml_Yg?si=6ADORznAJs9OdMD6"
                     title="YouTube video player"
                     className="video"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
               ))}
            </Flex>
         </Flex>

         <Flex vertical gap={20} wrap className="gallery">
            <Flex gap={20} wrap>
               {images.map((item, index) => (
                  <img
                     key={index}
                     className="gallery-image"
                     src={item}
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
