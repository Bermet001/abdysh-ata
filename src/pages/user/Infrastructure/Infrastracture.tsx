import styled from 'styled-components'
import { Flex, Image } from 'antd'

const images = [
   'https://swiperjs.com/demos/images/nature-1.jpg',
   'https://swiperjs.com/demos/images/nature-2.jpg',
   'https://swiperjs.com/demos/images/nature-10.jpg',
   'https://swiperjs.com/demos/images/nature-3.jpg',
   'https://swiperjs.com/demos/images/nature-4.jpg',
   'https://swiperjs.com/demos/images/nature-10.jpg',
   'https://swiperjs.com/demos/images/nature-10.jpg',
   'https://swiperjs.com/demos/images/nature-10.jpg',
   'https://swiperjs.com/demos/images/nature-10.jpg',
]

const Infrastructure = () => {
   return (
      <StyledContainr>
         <Flex className="first-block" gap={40}>
            <Flex vertical>
               <Image
                  className="main-image"
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
               />
            </Flex>

            <Flex justify="start" gap={30} vertical>
               <h2 className="main-title"> kanvafnv;fnvafjd</h2>

               <Flex vertical gap={20}>
                  <Flex gap={20}>
                     <p className="info">
                        <span>Область: </span>Chui
                     </p>

                     <p className="info">
                        <span>Адрес: </span> 1223 саоыкл5 са
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
                     exciting adventures. The tour program includes hiking along
                     picturesque trails, climbing peaks, evening bonfires and
                     much more. This tour is ideal for those who are looking for
                     new emotions and want to escape from the bustle of the
                     city.
                  </p>
               </Flex>
            </Flex>
         </Flex>

         <Flex vertical className="media">
            <h2 className="main-title">Видео</h2>

            <Flex gap={20}>
               <iframe
                  width="560"
                  height="240"
                  src="https://www.youtube.com/embed/xx-fB-Ml_Yg?si=6ADORznAJs9OdMD6"
                  title="YouTube video player"
                  className="video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               />
               <iframe
                  width="560"
                  height="240"
                  src="https://www.youtube.com/embed/xx-fB-Ml_Yg?si=6ADORznAJs9OdMD6"
                  title="YouTube video player"
                  className="video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               />
               <iframe
                  width="560"
                  height="240"
                  src="https://www.youtube.com/embed/xx-fB-Ml_Yg?si=6ADORznAJs9OdMD6"
                  title="YouTube video player"
                  className="video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               />
            </Flex>
         </Flex>

         <Flex vertical gap={20} wrap className="galery">
            <Flex gap={20} wrap>
               {images.map((item) => (
                  <img className="galery-image" src={item} alt="image" />
               ))}
            </Flex>
         </Flex>

         <Flex vertical className="map-block">
            <h2>Маршрут</h2>

            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6887.935602500561!2d74.84216768171416!3d42.88937676368082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eaee0c1efa677%3A0xcf6c142d63f73f90!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDRgNGL0L3QvtC6INCz0L7RgNC-0LTQsCDQmtCw0L3Rgg!5e0!3m2!1sru!2skg!4v1736931000952!5m2!1sru!2skg"
               width="100%"
               height="300"
               loading="lazy"
               style={{ borderRadius: '6px', border: 'none' }}
            />
         </Flex>
      </StyledContainr>
   )
}

export default Infrastructure

const StyledContainr = styled.main`
   margin-top: 80px;
   padding: 20px 75px;

   .first-block {
      margin-bottom: 50px;

      .main-image {
         object-fit: cover;
         height: 400px;
         width: 650px;
         border-radius: 6px;
      }

      .main-title {
         margin-bottom: 0px;
         font-size: 40px;
      }

      .info {
         span {
            color: grey;
         }
      }
   }

   .galery {
      padding: 0 100px;
      margin-top: 90px;

      img {
         width: calc(100% / 3 - 20px);
         height: 250px;
         object-fit: cover;
         border-radius: 6px;
      }
   }

   .media {
      .main-title {
         margin-bottom: 30px;
         font-size: 40px;
      }

      margin-top: 70px;
      .video {
         border-radius: 6px;
         border: none;
      }
   }

   .short-info {
      h2 {
         font-size: 25px;
      }

      p {
         font-weight: 300;
         font-size: 18px;
      }
   }

   .map-block {
      margin-top: 80px;

      h2 {
         font-size: 40px;
         margin-bottom: 20px;
      }

      margin-bottom: 30px;
   }

   .description {
      margin-top: 40px;

      h1 {
         font-size: 40px;
      }

      p {
         margin-top: 10px;
         width: 650px;
         font-weight: 300;
         font-size: 18px;
      }
   }
`
