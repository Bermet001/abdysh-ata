import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Flex } from 'antd'
import { team } from '../configs'
import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Button from './UI/Button'

interface CardBackgroundProps {
   image: string
}

const Team = () => {
   return (
      <Container>
         <Flex justify="space-between" align="start">
            <h1>ИГРОКИ</h1>
            <Button type="primary">
               Посмотреть всю команду <RightOutlined />
            </Button>
         </Flex>

         <Swiper
            spaceBetween={10}
            breakpoints={{
               1024: {
                  slidesPerView: 4,
               },
            }}
         >
            {team.map(({ image, id, full_name, position, number }) => (
               <SwiperSlide key={id}>
                  <Link to={`/player/${id}`}>
                     <StyledCard>
                        <CardBackground image={image}>
                           <Overlay>
                              <PlayerNumber>{number}</PlayerNumber>
                              <PlayerName>{full_name}</PlayerName>
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

const Container = styled.div`
   margin: auto;
   padding: 120px 75px 0 75px;
   max-width: 1600px;

   h1 {
      margin-bottom: 50px;
      font-size: 40px;
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
`

const CardBackground = styled.div<CardBackgroundProps>`
   background-image: url(${(props) => props.image});
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
`
