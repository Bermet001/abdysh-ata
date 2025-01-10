import { Flex } from 'antd'
import styled, { keyframes } from 'styled-components'
import image from '../../../assets/images/players/image.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import honours from '../../../configs'

const Player = () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth',
   })

   return (
      <StyledContainer>
         <Flex vertical className="main-box">
            <Flex className="content" align="end">
               <Flex vertical className="main-info">
                  <PlayerImage src={image} alt="Player" />
                  <PlayerCard>
                     <PlayerDetails>
                        <PlayerPosition>Вратарь</PlayerPosition>
                        <PlayerName>
                           <PlayerNumber> 1</PlayerNumber>
                           <span className="name">Бекжан</span>
                           Сагынбаев
                        </PlayerName>
                     </PlayerDetails>
                  </PlayerCard>
               </Flex>

               <PlayerInfo>
                  <h3 className="player-title">
                     He brings together various talents which allow him to
                     operate anywhere up front
                  </h3>

                  <PlayerBio>
                     A keeper with great reflexes and also excellent with the
                     ball at his feet. Бекжан Сагынбаев signed for FC Barcelona
                     in the summer of 2014 from Borussia Mönchengladbach. Born
                     on 30 April 1992, he quickly made a name as one of Europe’s
                     most promising goalkeepers.
                  </PlayerBio>
                  <PlayerBio>
                     A keeper with great reflexes and also excellent with the
                     ball at his feet. Бекжан Сагынбаев signed for FC Barcelona
                     in the summer of 2014 from Borussia Mönchengladbach. Born
                     on 30 April 1992, he quickly made a name as one of Europe’s
                     most promising goalkeepers.
                  </PlayerBio>
                  <PlayerBio>insta: @asdfr </PlayerBio>

                  <DetailsContainer justify="space-between">
                     <Flex vertical gap={5}>
                        <DetailLabel>Дата рождения</DetailLabel>
                        <DetailValue>14/12/1996</DetailValue>
                     </Flex>

                     <Flex vertical gap={5}>
                        <DetailLabel>Вес</DetailLabel>
                        <DetailValue>68 кг</DetailValue>
                     </Flex>

                     <Flex vertical gap={5}>
                        <DetailLabel>Рост</DetailLabel>
                        <DetailValue>176 см</DetailValue>
                     </Flex>

                     <Flex vertical gap={5}>
                        <DetailLabel>Дебют в клубе</DetailLabel>
                        <DetailValue>14/12/2020</DetailValue>
                     </Flex>
                  </DetailsContainer>
               </PlayerInfo>
            </Flex>

            <Flex vertical className="accomplishments">
               <h1 className="main-title">Достижения</h1>

               <Swiper
                  slidesPerView={5}
                  centeredSlides={true}
                  spaceBetween={10}
                  grabCursor={true}
                  pagination={{}}
                  className="mySwiper"
               >
                  {honours.map((item) => (
                     <SwiperSlide key={item.id}>
                        <Flex
                           vertical
                           justify="space-between"
                           className="honours-box"
                           align="start"
                        >
                           <Flex vertical align="start">
                              <h5 className="liga-honour">{item.liga}</h5>
                              <h4 className="text-honour">{item.text}</h4>
                           </Flex>

                           <p className="year-honour">{item.year}</p>
                        </Flex>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </Flex>
         </Flex>
      </StyledContainer>
   )
}

export default Player

const StyledContainer = styled.section`
   background: linear-gradient(to bottom, #23a356, #18191b);
   padding: 75px 35px;
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 100vh;
   max-width: 1600px;

   .swiper {
      width: 100%;
      height: 100%;
   }

   .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
   }

   .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .accomplishments {
   }

   .main-box {
      background-color: white;
      padding: 0 40px;
      padding-top: 20px;
      padding-bottom: 30px;
      border-radius: 3px;
      width: 100%;
   }

   .content {
      background-color: white;
      margin-bottom: 50px;
      position: relative;

      .main-info {
         position: relative;
      }
   }

   .honours-box {
      background-color: #18191b;
      height: 150px;
      width: 350px;
      padding: 20px;
      text-align: start;
      border-radius: 3px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

      .liga-honour {
         color: #7f7f7f;
      }
      font-size: 13px;

      .year-honour {
         color: #7f7f7f;
         font-size: 10px;
         font-weight: bold;
      }

      .text-honour {
         color: white;
         font-size: 15px;
      }
   }
`

const PlayerImage = styled.img`
   width: 400px;
   border-radius: 10px;
`

const slideInRight = keyframes`
   from {
      transform: translateX(10px);
   }
   to {
      opacity: 1;
      transform: translateX(0);
   }
`

const PlayerInfo = styled.div`
   margin-left: 40px;
   background-color: #ebf1ed;
   padding: 20px;
   border-radius: 10px;
   max-width: 850px;
   backdrop-filter: blur(10px);
   color: black;

   animation: ${slideInRight} 0.7s ease-in;
   animation-delay: 0.2s;

   .player-title {
      font-size: 35px;
      width: 80%;
      margin-bottom: 20px;
   }
`

const slideInLeft = keyframes`
   from {
      transform: translateY(30px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
`

const PlayerCard = styled.div`
   display: flex;
   align-items: center;
   position: absolute;
   bottom: -20px;
   left: 10%;
   padding: 15px;
   border-radius: 6px;
   margin-bottom: 20px;
   background-color: rgba(28, 28, 28, 0.963);
   color: white;
   width: 350px;

   opacity: 0;
   animation: ${slideInLeft} 0.6s ease-in-out forwards;
   animation-delay: 0.2s;
`

const PlayerDetails = styled.div`
   flex-grow: 1;
   text-align: center;
`

const PlayerPosition = styled.div`
   font-size: 14px;
   font-weight: bold;
   color: #808490;
`

const PlayerName = styled.div`
   font-size: 25px;
   font-weight: bold;
   display: flex;
   align-items: end;
   color: #fff;
   gap: 7px;
   justify-content: center;
   font-family: 'Roboto Condensed', serif;

   .name {
      color: #acafb9;
      font-size: 17px;
      font-weight: 500;
   }
`

const PlayerNumber = styled.div`
   font-size: 35px;
   color: #808490;
   line-height: 1;
   font-family: 'Roboto Condensed', serif;
`

const PlayerBio = styled.p`
   font-size: 16px;
   margin: 10px 0;
   color: #333;
   line-height: 1.5;
`
const DetailsContainer = styled(Flex)`
   margin-bottom: 20px;
   padding: 20px 10px;
   border-top: 1px solid grey;
   border-bottom: 1px solid grey;
   margin-top: 40px;
`

const DetailLabel = styled.span`
   font-weight: bold;
   color: #000000;
   font-size: 12px;
`

const DetailValue = styled.span`
   color: #3b3b3b;
   font-size: 25px;
`
