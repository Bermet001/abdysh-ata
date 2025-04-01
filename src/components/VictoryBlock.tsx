import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Flex, Button, Skeleton } from 'antd'
import Image from '../assets/images/image7.jpg'
import { RightOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useEffect } from 'react'
import { getAchievements } from '../store/slice/ahievements/ahievementsThunk'
import Person from '../assets/images/person.png'

const VictoryBlock = () => {
   const { achievements, isLoading } = useAppSelector(
      (state) => state.achievements
   )

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getAchievements())
   }, [dispatch])

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
               <NavLink to={'/trophy'}>
                  <StyledButton type="primary">
                     Все трофеи <RightOutlined />
                  </StyledButton>
               </NavLink>
            </Flex>
         </VictoryDes>
         <SliderContainer>
            <Swiper
               spaceBetween={20}
               slidesPerView={1}
               breakpoints={{
                  200: { slidesPerView: 2 },
                  580: { slidesPerView: 3 },
                  768: { slidesPerView: 3 },
                  1130: { slidesPerView: 4 },
               }}
            >
               {isLoading
                  ? Array.from({ length: 4 }).map((_, index) => (
                       <SwiperSlide key={index}>
                          <StyledCard>
                             <Skeleton active />
                          </StyledCard>
                       </SwiperSlide>
                    ))
                  : achievements?.map(({ id, title, season, image, slug }) => (
                       <SwiperSlide key={id}>
                          <NavLink to={`/trophy/${slug}`}>
                             <StyledCard>
                                <Flex vertical>
                                   <img
                                      loading="lazy"
                                      className="trophy-image"
                                      src={image}
                                      alt="trophy"
                                   />
                                   <div className="contents-trophy">
                                      <p>{season}</p>
                                      <h2>{title}</h2>
                                   </div>
                                </Flex>
                             </StyledCard>
                          </NavLink>
                       </SwiperSlide>
                    ))}
            </Swiper>
         </SliderContainer>
      </Container>
   )
}

export default VictoryBlock

const Container = styled.section`
   text-align: center;
   padding: 120px 0;
   padding-bottom: 0;
   color: black;

   @media (max-width: 1024px) {
      padding: 0;
      padding-top: 60px;
      min-height: 500px;

      .swiper {
         padding: 0px !important;
      }
   }

   @media (max-width: 600px) {
      min-height: 400px;
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
   margin-top: -60px;

   @media (max-width: 768px) {
      margin-top: -50px;
   }
`

const Title = styled.h1`
   margin-bottom: 20px;
`

const Description = styled.p`
   margin-bottom: 50px;
   font-size: 1rem;
   color: white;
   width: 700px;

   @media (max-width: 1024px) {
      width: 60%;
   }

   @media (max-width: 768px) {
      font-size: 0.9rem;
      width: 80%;
   }

   @media (max-width: 480px) {
      font-size: 0.6rem;
      margin-bottom: 30px;
   }
`

const VictoryDes = styled.div`
   width: 100%;
   height: 300px;
   display: flex;
   flex-direction: column;
   background-image: url(${Image});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   position: relative;
   padding: 100px 75px 0 75px;

   @media (max-width: 1024px) {
      padding: 70px 20px 0 20px;
   }

   .inner {
      max-width: 1500px;
      margin: 0 auto;
      width: 100%;
   }

   p {
      margin-top: 10px;
   }

   h1 {
      font-size: 45px;

      @media (max-width: 768px) {
         font-size: 36px;
      }

      @media (max-width: 630px) {
         font-size: 30px;
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

const StyledCard = styled(Card)`
   text-align: start;
   border-radius: 10px;
   margin: 10px;
   position: relative;
   overflow: hidden;
   border: none;

   .contents-trophy {
      padding: 15px !important;

      p {
         font-size: 10px;
      }

      h2 {
         font-size: 20px;
      }
   }

   .ant-card-body {
      padding: 0px !important;
   }

   @media (max-width: 830px) {
      margin: 0px;

      .contents-trophy {
         padding: 10px !important;
      }
   }

   .trophy-image {
      width: 200px;
      height: 230px;
      object-position: top;
      object-fit: cover;
      width: 100%;
      margin: 0 auto;
      border-radius: 10px 10px 0 0;
      transition: transform 0.3s ease-in-out;
      position: relative;
   }

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(237, 91, 12, 0.583);
      z-index: 2;
      height: 230px;
      transition: opacity 0.3s ease;
   }

   &::after {
      content: '';
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      background-image: url(${Person});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 3;
      transition: opacity 0.3s ease;
   }

   &:hover {
      .trophy-image {
         transform: scale(1.1);
      }

      &::before,
      &::after {
         opacity: 0;
      }
   }

   h2 {
      @media (max-width: 830px) {
         margin-top: 5px;
         font-size: 0.9rem;
         max-height: 45px;
         min-height: 45px;
      }

      @media (max-width: 768px) {
         font-size: 1rem;
      }

      @media (max-width: 480px) {
         font-size: 0.9rem;
      }
   }

   p {
      font-size: 0.9rem;

      @media (max-width: 830px) {
         font-size: 0.7rem;
      }

      @media (max-width: 768px) {
         font-size: 0.8rem;
      }

      @media (max-width: 480px) {
         font-size: 0.5rem;
      }
   }
`
