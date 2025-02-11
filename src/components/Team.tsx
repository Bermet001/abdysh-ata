import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Flex } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { Link, NavLink } from 'react-router-dom'
import Button from './UI/Button'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useEffect } from 'react'
import { getTeam } from '../store/slice/team/teamThunk'

const Team = () => {
   const { players, allTeams } = useAppSelector((state) => state.team)
   const first_team = allTeams?.length > 0 ? allTeams[0] : null

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getTeam(first_team?.slug))
   }, [dispatch, first_team])

   return (
      <Container>
         <Flex justify="space-between" align="start">
            <h2 className="main-title">ИГРОКИ</h2>
            <Button type="primary">
               <NavLink to="/team">
                  Посмотреть всю команду <RightOutlined />
               </NavLink>
            </Button>
         </Flex>

         <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
               200: {
                  slidesPerView: 1.1,
               },
               768: {
                  slidesPerView: 3,
               },
               1024: {
                  slidesPerView: 4,
               },
            }}
         >
            {players.map(({ image, id, name, position, number, slug }) => (
               <SwiperSlide key={id}>
                  <Link to={`/player/${slug}`}>
                     <StyledCard>
                        <CardBackground $image={image}>
                           <Overlay>
                              <PlayerNumber>{number}</PlayerNumber>
                              <PlayerName>{name}</PlayerName>
                              <PlayerPosition>{position}</PlayerPosition>
                           </Overlay>
                        </CardBackground>
                     </StyledCard>
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>
      </Container>
   )
}

export default Team

const Container = styled.section`
   margin: auto;
   padding: 120px 75px 0 75px;
   max-width: 1600px;

   @media (max-width: 1024px) {
      padding: 40px 20px 0;
      overflow: hidden;
   }
`

const StyledCard = styled(Card)`
   border-radius: 6px;
   width: 100%;
   overflow: hidden;
   position: relative;
   cursor: pointer;
   height: 400px;
   border: none;

   .ant-card-body {
      height: 100%;
      padding: 0;
   }

   @media (max-width: 768px) {
      height: 350px;
   }

   @media (max-width: 480px) {
      height: 300px;
   }
`

const CardBackground = styled.div<{ $image: string }>`
   background-image: url(${(props) => props.$image});
   background-size: cover;
   background-position: center;
   height: 100%;
   display: flex;
   transition: transform 0.3s;
   border-radius: 6px;

   &:hover {
      transform: scale(1.05);
   }
`

const Overlay = styled.div`
   width: 100%;
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   height: 100%;
   border-radius: 6px;
   z-index: 10;
   background: linear-gradient(to top, rgba(0, 0, 0, 0.769), transparent);
`

const PlayerNumber = styled.div`
   font-size: 120px;
   font-weight: bold;
   text-align: center;
   color: rgba(255, 255, 255, 0.268);
   opacity: 0;
   transform: translateY(-30px);
   transition: transform 0.3s, opacity 0.3s;

   ${StyledCard}:hover & {
      opacity: 1;
      transform: translateY(30px);
   }

   @media (max-width: 768px) {
      font-size: 80px;
   }

   @media (max-width: 480px) {
      font-size: 60px;
   }
`

const PlayerName = styled.h2`
   font-size: 24px;
   font-weight: bold;
   text-align: center;
   color: white;
   transform: translateY(10px);
   transition: transform 0.3s;

   ${StyledCard}:hover & {
      transform: translateY(5px);
   }

   @media (max-width: 768px) {
      font-size: 20px;
   }

   @media (max-width: 480px) {
      font-size: 18px;
   }
`

const PlayerPosition = styled.h3`
   font-size: 18px;
   font-weight: normal;
   text-align: center;
   color: white;
   transform: translateY(10px);
   transition: transform 0.3s;

   ${StyledCard}:hover & {
      transform: translateY(5px);
   }

   @media (max-width: 768px) {
      font-size: 16px;
   }

   @media (max-width: 480px) {
      font-size: 14px;
   }
`
