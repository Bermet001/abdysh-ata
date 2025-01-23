import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Flex, Button } from 'antd'
import Image from '../assets/images/image7.jpg'
import { RightOutlined } from '@ant-design/icons'
import { leagues } from '../configs'
import { NavLink } from 'react-router-dom'

const VictoryBlock = () => {
   return (
      <Container>
         <VictoryDes className="victory-des">
            <Flex className="inner" align="center" justify="space-between">
               <Flex vertical align="start">
                  <Title>Достижения Команды</Title>

                  <Description>
                     Мы гордимся нашими трофеями и достижениями, которые стали
                     результатом упорного труда и преданности команды на
                     протяжении многих лет.
                  </Description>
               </Flex>

               <StyledButton type="primary">
                  <NavLink to={'/trophy'}>
                     Все трофеи <RightOutlined />
                  </NavLink>
               </StyledButton>
            </Flex>
         </VictoryDes>

         <SliderContainer>
            <Swiper
               spaceBetween={20}
               slidesPerView={1}
               breakpoints={{
                  480: {
                     slidesPerView: 2,
                  },
                  768: {
                     slidesPerView: 3,
                  },
                  1024: {
                     slidesPerView: 4,
                  },
               }}
            >
               {leagues.map(({ id, name, date, trophy }) => (
                  <SwiperSlide key={id}>
                     <StyledCard>
                        <img
                           className="trophy-image"
                           width={200}
                           height={250}
                           src={trophy}
                           alt="trophy"
                        />
                        <p>{date}</p>
                        <h2>{name}</h2>
                     </StyledCard>
                  </SwiperSlide>
               ))}
            </Swiper>
         </SliderContainer>
      </Container>
   )
}

export default VictoryBlock

const Container = styled.div`
   text-align: center;
   padding: 120px 0;
   color: black;

   @media (max-width: 1024px) {
      overflow: hidden;
      padding: 80px 0;
   }

   & .swiper {
      padding: 0 calc(15px + 1rem);
      position: relative;
      z-index: 10;
      margin: 0 auto;
      width: 100%;
      max-width: 1600px;
   }
`

const SliderContainer = styled.div`
   width: 100%;
   max-width: 1600px;
   margin: 0 auto;
   padding: 0 15px;
   margin-top: -100px;

   @media (max-width: 768px) {
      margin-top: -50px;
   }
`

const Title = styled.h1`
   margin-bottom: 20px;

   @media (max-width: 768px) {
      font-size: 36px;
   }

   @media (max-width: 480px) {
      font-size: 28px;
   }
`

const Description = styled.p`
   margin-bottom: 40px;
   font-size: 1rem;
   color: white;
   width: 700px;

   @media (max-width: 768px) {
      font-size: 0.9rem;
      width: 100%;
   }

   @media (max-width: 480px) {
      font-size: 0.8rem;
   }
`

const StyledCard = styled(Card)`
   text-align: start;
   border-radius: 10px;
   margin: 10px;

   .trophy-image {
      width: 100%;
      height: auto;
      object-fit: cover;
      min-height: 290px;
   }

   h2 {
      font-size: 1.2rem;
      margin-top: 10px;

      @media (max-width: 768px) {
         font-size: 1rem;
      }

      @media (max-width: 480px) {
         font-size: 0.9rem;
      }
   }

   p {
      font-size: 0.9rem;

      @media (max-width: 768px) {
         font-size: 0.8rem;
      }

      @media (max-width: 480px) {
         font-size: 0.7rem;
      }
   }
`

const VictoryDes = styled.div`
   width: 100vw;
   height: 350px;
   display: flex;
   flex-direction: column;
   background-image: url(${Image});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   position: relative;
   padding: 100px 75px 0 75px;

   .inner {
      max-width: 1500px;
      margin: 0 auto;
      width: 100%;
   }

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
   }

   p {
      margin-top: 10px;
   }

   h1 {
      font-size: 45px !important;

      @media (max-width: 768px) {
         font-size: 36px;
      }

      @media (max-width: 480px) {
         font-size: 28px;
      }
   }

   h1,
   p {
      position: relative;
      z-index: 2;
      color: white;
      text-align: start;
   }
`

const StyledButton = styled(Button)`
   border: none;
   position: relative;
   z-index: 2;
   color: white;
   padding: 25px 40px;
   font-size: 1rem;
   border-radius: 8px;

   &:focus {
      outline: none;
   }

   @media (max-width: 768px) {
      padding: 20px 30px;
      font-size: 0.9rem;
   }

   @media (max-width: 480px) {
      padding: 15px 20px;
      font-size: 0.8rem;
   }
`
