import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Button, Flex } from 'antd';
import { team } from '../configs';
import { RightOutlined } from '@ant-design/icons';

interface CardBackgroundProps {
   image: string;
}

const Team = () => {
   return (
      <Container>
         <Flex justify="space-between" align="start">
            <h1>ИГРОКИ</h1>
            <StyledButtonView type="primary">
               Посмотреть все команды <RightOutlined />
            </StyledButtonView>
         </Flex>

         <Swiper
            spaceBetween={10}
            breakpoints={{
               1024: {
                  slidesPerView: 4,
               },
            }}
         >
            {team.map(({ image, id, full_name, position }) => (
               <SwiperSlide key={id}>
                  <StyledCard>
                     <CardBackground image={image}>
                        <Overlay>
                           <PlayerName>{full_name}</PlayerName>
                           <PlayerPosition>{position}</PlayerPosition>
                        </Overlay>
                     </CardBackground>
                  </StyledCard>
               </SwiperSlide>
            ))}
         </Swiper>
      </Container>
   );
};

export default Team;

const Container = styled.div`
   margin: auto;
   padding: 120px 75px 0 75px;
   max-width: 1600px;

   h1 {
      margin-bottom: 50px;
      font-size: 40px;
   }
`;

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

   /* Псевдоэлемент для тени */
   &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%; /* Высота тени */
      background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
      border-radius: 0 0 6px 6px; /* Закругляем углы */
      pointer-events: none; /* Игнорируем события мыши */
   }
`;

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
`;

const Overlay = styled.div`
   width: 100%;
   padding: 20px;
   color: white;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   height: 100%;
   border-radius: 6px;
   z-index: 10; /* Увеличиваем z-index, чтобы текст был выше тени */
`;

const PlayerName = styled.h2`
   font-size: 24px;
   font-weight: bold;
   text-align: center;
   color: white;
   opacity: 1;
   transition: transform 0.3s;
   transform: translateY(0);

   ${StyledCard}:hover & {
      transform: translateY(-5px);
   }
`;

const PlayerPosition = styled.h3`
   font-size: 18px;
   font-weight: normal;
   text-align: center;
   color: white;
   opacity: 1; 
   transition: transform 0.3s;
   transform: translateY(0); 

   ${StyledCard}:hover & {
      transform: translateY(-5px);
   }
`;

const StyledButtonView = styled(Button)`
   padding: 23px 25px;
   border: none;
   color: white;
   border-radius: 8px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 500;

   svg {
      margin-left: 5px;
   }
`;