import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Flex, Skeleton } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import Button from './UI/Button'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useEffect } from 'react'
import { getTeam } from '../store/slice/team/teamThunk'

const Team = () => {
   const { players, headerTeam, isLoading } = useAppSelector(
      (state) => state.team
   )
   const first_team = headerTeam?.length > 0 ? headerTeam[0] : null
   const dispatch = useAppDispatch()
   useEffect(() => {
      if (first_team?.slug) dispatch(getTeam(first_team.slug))
   }, [dispatch, first_team])
   return (
      <Container>
         <Flex justify="space-between" align="start">
            <h2 className="main-title">ИГРОКИ</h2>
            <NavLink to="/team/fk-abdysh-ata">
               <Button type="primary">
                  Посмотреть всю команду <RightOutlined />
               </Button>
            </NavLink>
         </Flex>
         <Swiper
            spaceBetween={10}
            breakpoints={{
               200: { slidesPerView: 2 },
               768: { slidesPerView: 3 },
               1024: { slidesPerView: 4 },
            }}
         >
            {isLoading
               ? [...Array(4)].map((_, index) => (
                    <SwiperSlide key={index + 1}>
                       <StyledCard>
                          <Skeleton
                             active
                             title={false}
                             paragraph={{ rows: 4 }}
                          />
                       </StyledCard>
                    </SwiperSlide>
                 ))
               : players
                    ?.slice(0, 6)
                    .map(({ image, id, name, position, number, slug }) => (
                       <SwiperSlide key={id}>
                          <NavLink key={slug} to={`/player/${slug}`}>
                             <StyledCard>
                                <CardBackground
                                   $image={`https://abdysh-backend.webtm.ru/${image}`}
                                >
                                   <Overlay>
                                      <PlayerNumber>{number}</PlayerNumber>
                                      <PlayerName>{name}</PlayerName>
                                      <PlayerPosition>
                                         {position}
                                      </PlayerPosition>
                                   </Overlay>
                                </CardBackground>
                             </StyledCard>
                          </NavLink>
                       </SwiperSlide>
                    ))}
         </Swiper>
      </Container>
   )
}

export default Team
const Container = styled.section`
   margin: auto;
   padding: 100px 75px 0 75px;
   max-width: 1600px;
   @media (max-width: 1024px) {
      padding: 40px 20px 0;
   }
   .ant-card .ant-card-body {
      padding: 0;
   }
`
const StyledCard = styled(Card)`
   border-radius: 6px;
   width: 100%;
   max-height: 400px;
   overflow: hidden;
   position: relative;
   cursor: pointer;
   height: 400px;
   border: none;
   @media (max-width: 768px) {
      min-height: 350px;
   }
   @media (max-width: 480px) {
      min-height: 300px;
   }
   @media (max-width: 480px) {
   }
`
const CardBackground = styled.div<{ $image: string }>`
   background-image: url(${(props) => props.$image});
   background-size: cover;
   background-position: center;
   height: auto;
   display: flex;
   transition: transform 0.3s;
   border-radius: 6px;
   text-align: center;
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
   height: 350px;
   border-radius: 6px;
   z-index: 10;
   background: linear-gradient(to top, rgba(0, 0, 0, 0.769), transparent);
   @media (max-width: 480px) {
      height: 300px;
   }
`
const PlayerNumber = styled.div`
   font-size: 120px;
   font-weight: bold;
   color: rgba(255, 255, 255, 0.268);
   opacity: 0;
   transform: translateY(-30px);
   transition: transform 0.3s, opacity 0.3s;
   ${StyledCard}:hover & {
      opacity: 1;
      transform: translateY(30px);
   }
   @media (max-width: 768px) {
      font-size: 70px;
   }
`
const PlayerName = styled.h2`
   font-size: 24px;
   font-weight: bold;
   color: white;
   transform: translateY(10px);
   transition: transform 0.3s;
   ${StyledCard}:hover & {
      transform: translateY(5px);
   }
   @media (max-width: 768px) {
      font-size: 20px;
   }
`
const PlayerPosition = styled.h3`
   font-size: 18px;
   font-weight: normal;
   color: white;
   transform: translateY(10px);
   transition: transform 0.3s;
   ${StyledCard}:hover & {
      transform: translateY(5px);
   }
   @media (max-width: 768px) {
      font-size: 16px;
      opacity: 0.7;
   }
`
