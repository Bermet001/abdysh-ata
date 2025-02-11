import { Flex } from 'antd'
import styled, { keyframes } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import { getPlayer } from '../../../store/slice/team/teamThunk'

const Player = () => {
   const { slug } = useParams<{ slug: string }>()
   const { player } = useAppSelector((state) => state.team)

   window.scrollTo(0, 0)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getPlayer(slug))
   }, [dispatch, slug])

   return (
      <StyledContainer>
         <Flex vertical className="main-box">
            <Flex className="content" align="end">
               <Flex vertical className="main-info">
                  <PlayerImage src={player.image} alt="Player" />

                  <PlayerCard>
                     <PlayerDetails>
                        <PlayerPosition>{player.position}</PlayerPosition>
                        <PlayerName>
                           <PlayerNumber>{player.number}</PlayerNumber>
                           <span className="name">{player.name}</span>
                        </PlayerName>
                     </PlayerDetails>
                  </PlayerCard>
               </Flex>

               <PlayerInfo>
                  <h3 className="player-title">{player.bio_title}</h3>

                  <PlayerBio>{player.bio}</PlayerBio>

                  <h3 className="player-title">Команда</h3>
                  <PlayerBio style={{ display: 'flex', alignItems: 'center' }}>
                     <img
                        width={30}
                        src={player.team.logo}
                        alt="логотим команды"
                     />
                     {'  '}
                     <p>{player.team.title}</p>
                  </PlayerBio>
                  <PlayerBio>insta: {player.instagram} </PlayerBio>

                  <DetailsContainer
                     className="characteristics-container"
                     justify="space-between"
                  >
                     <Flex vertical gap={5}>
                        <DetailLabel>Дата рождения</DetailLabel>
                        <DetailValue>{player.birth_date}</DetailValue>
                     </Flex>

                     <Flex vertical gap={5}>
                        <DetailLabel>Вес</DetailLabel>
                        <DetailValue>{player.weight} кг</DetailValue>
                     </Flex>

                     <Flex vertical gap={5}>
                        <DetailLabel>Рост</DetailLabel>
                        <DetailValue>{player.height} см</DetailValue>
                     </Flex>

                     <Flex vertical gap={5}>
                        <DetailLabel>Дебют в клубе</DetailLabel>
                        <DetailValue>{player.debut}</DetailValue>
                     </Flex>
                  </DetailsContainer>
               </PlayerInfo>
            </Flex>

            <Flex vertical className="accomplishments">
               <h2 className="main-title">Достижения</h2>

               <Swiper
                  slidesPerView={1}
                  centeredSlides={true}
                  spaceBetween={10}
                  grabCursor={true}
                  breakpoints={{
                     200: {
                        slidesPerView: 1.2,
                     },
                     500: {
                        slidesPerView: 1,
                     },

                     768: {
                        slidesPerView: 3,
                     },
                     1130: {
                        slidesPerView: 5,
                     },
                  }}
                  className="mySwiper"
               >
                  {player.achievements.map((item) => (
                     <SwiperSlide key={item.id}>
                        <Flex
                           vertical
                           justify="space-between"
                           className="honours-box"
                           align="start"
                        >
                           <Flex vertical align="start">
                              <h5 className="liga-honour">{item.liga.title}</h5>
                              <h4 className="text-honour">{item.title}</h4>
                           </Flex>

                           <p className="year-honour">{item.date}</p>
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

const StyledContainer = styled.main`
   background: linear-gradient(to bottom, #23a356, #18191b);
   padding: 90px 35px;
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 100vh;
   /* max-width: 1600px; */

   @media (max-width: 768px) {
      padding: 60px 20px;
   }

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

   .main-box {
      background-color: white;
      padding: 0 20px;
      padding-top: 20px;
      padding-bottom: 30px;
      border-radius: 3px;
      width: 100%;
      margin: 0 auto;
      max-width: 1600px;
   }

   .content {
      background-color: white;
      margin-bottom: 50px;
      position: relative;

      @media (max-width: 1200px) {
         flex-direction: column;
         align-items: start;
         gap: 20px;
      }

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

   @media (max-width: 768px) {
      width: 100%;
      max-width: 300px;
   }
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

   @media (max-width: 1200px) {
      margin-left: 0;
   }

   .player-title {
      font-size: 35px;
      width: 80%;
      margin-bottom: 20px;

      @media (max-width: 768px) {
         font-size: 24px;
      }
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

   @media (max-width: 768px) {
      width: 80%;
      left: 10%;
   }
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

   @media (max-width: 768px) {
      font-size: 14px;
   }
`
const DetailsContainer = styled(Flex)`
   margin-bottom: 20px;
   padding: 20px 10px;
   border-top: 1px solid grey;
   border-bottom: 1px solid grey;
   margin-top: 40px;

   @media (max-width: 500px) {
      flex-direction: column;
      gap: 20px;
   }
`

const DetailLabel = styled.span`
   font-weight: bold;
   color: #000000;
   font-size: 12px;
`

const DetailValue = styled.span`
   color: #3b3b3b;
   font-size: 25px;

   @media (max-width: 768px) {
      font-size: 20px;
   }
`
