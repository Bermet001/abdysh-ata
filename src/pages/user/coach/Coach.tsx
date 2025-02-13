import { Card, Flex, Typography } from 'antd'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { getCoach } from '../../../store/slice/coach/coachThunk'

const { Title } = Typography

const Coach: FC = () => {
   const { slug } = useParams()

   window.scrollTo(0, 0)
   const { coach } = useAppSelector((state) => state.coach)

   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(getCoach(slug))
   }, [dispatch, slug])

   const { image, name, position, birth_date, bio } = coach

   return (
      <main>
         <StyledComponent>
            <Flex vertical>
               <Flex
                  className="first-part-coach"
                  justify="space-between"
                  align="end"
               >
                  <Flex
                     gap={80}
                     className="main-info"
                     vertical
                     justify="center"
                  >
                     <h1 className="coach-full-name">
                        <AnimatedSurname>{name}</AnimatedSurname>
                     </h1>

                     <AnimatedCard>
                        <Flex vertical gap={15}>
                           <Flex vertical>
                              <StyledTitle level={5}>Должность</StyledTitle>
                              <StyledText>{position}</StyledText>
                           </Flex>

                           <Flex vertical>
                              <StyledTitle level={5}>Дата рождения</StyledTitle>
                              <StyledText>{birth_date}</StyledText>
                           </Flex>
                        </Flex>
                     </AnimatedCard>
                  </Flex>

                  <AnimatedImage src={image} alt="" />
               </Flex>

               <Flex vertical className="biography-box">
                  <h2 className="main-title">Биография</h2>
                  <p className="bio">{bio}</p>

                  <h2 className="main-title">Достижения</h2>
                  {/* <AchievementsContainer>
                     {achievements?.map(({ image, text }) => (
                        <StyledCard key={text}>
                           <img
                              className="trophy-image"
                              src={image}
                              alt="trophy"
                              height="220px"
                           />
                           <h2>{text}</h2>
                        </StyledCard>
                     ))}
                  </AchievementsContainer> */}

                  <br />
                  <br />
                  <h2 className="main-title">Ассистенты</h2>
                  <div></div>
               </Flex>
            </Flex>
         </StyledComponent>
      </main>
   )
}

export default Coach

const fadeIn = keyframes`
   from {
      opacity: 0;
      transform: translateY(-20px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
`

const slideInLeft = keyframes`
   from {
      opacity: 0;
      transform: translateX(-30px);
   }
   to {
      opacity: 1;
      transform: translateX(0);
   }
`

// const AchievementsContainer = styled.div`
//    display: flex;
//    overflow-x: auto;
//    gap: 30px;
//    width: 100%;
//    padding: 10px 0;
//    margin-bottom:20px

//    &::-webkit-scrollbar {
//       display: none;
//    }
// `

const StyledComponent = styled(Flex)`
   margin: 0 auto;

   .first-part-coach {
      padding: 150px 75px 0;
      max-width: 1600px;
      width: 100vw;

      @media (max-width: 1024px) {
         padding: 90px 20px 0;
      }
   }

   .coach-full-name {
      line-height: 0.6;
      font-size: 55px;
      font-family: 'Inter', serif;
      width: 100%;
   }

   .biography-box {
      padding: 35px 75px 55px;
      max-width: 1600px;
      margin-top: 50px;
      background-color: #f1f4f6;

      @media (max-width: 1024px) {
         padding: 35px 20px 55px;
      }

      .main-title {
         margin-bottom: 20px;
      }

      .bio {
         font-size: 13px;
         font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
         min-height: 80px;
         margin-bottom: 20px;
      }
   }

   @media (max-width: 770px) {
      .first-part-coach {
         flex-direction: column-reverse;
         align-items: start;
      }
   }

   .main-info {
      @media (max-width: 1200px) {
      }
   }
`

const StyledCard = styled(Card)`
   width: 220px;
   background-color: #fff;
   border-radius: 6px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

   .ant-typography {
      margin: 0;
   }

   .trophy-image {
      object-fit: cover;
      width: 100%;
   }
`

const AnimatedCard = styled(StyledCard)`
   opacity: 0;
   max-width: 520px;
   width: 520px;
   min-width: 325px;

   animation: ${slideInLeft} 0.9s ease-in-out forwards;
   animation-delay: 0.4s;

   @media (max-width: 1200px) {
      width: 100%;
   }

   @media (max-width: 600px) {
      width: 100%;
   }
`

const StyledTitle = styled(Title)`
   color: #333;
   font-size: 17px;
`

const StyledText = styled.h2`
   font-size: 30px;
   color: #00a64f;
`

const AnimatedImage = styled.img`
   width: 500px;
   height: auto;
   opacity: 0;
   animation: ${fadeIn} 0.4s ease-in-out forwards;
   animation-delay: 0.3s;

   box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);

   @media (max-width: 870px) {
      width: 400px;
   }

   @media (max-width: 450px) {
      width: 375px;
   }

   @media (max-width: 400px) {
      width: 335px;
   }
`

// const AnimatedName = styled.span`
//    opacity: 0;
//    animation: ${fadeIn} 0.9s ease-in-out forwards;
//    font-size: 30px;
//    line-height: 2;
//    animation-delay: 0.3s;
// `

const AnimatedSurname = styled.p`
   opacity: 0;
   animation: ${fadeIn} 0.6s ease-in-out forwards;
   animation-delay: 0.5s;
   width: 100%;
   /* font-size: 40px; */
`
