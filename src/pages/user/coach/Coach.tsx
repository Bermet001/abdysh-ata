import { Card, Flex, Typography } from 'antd'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { coaches } from '../../../configs'

const { Title } = Typography
interface AchievementshProps {
   image?: string
   text: string
}

interface CoachProps {
   img?: string
   name?: string
   surename?: string
   position?: string
   dateOfBirth?: string
   biography?: string
   achievements?: AchievementshProps[]
}

const Coach: FC = () => {
   const { id } = useParams()

   const [selectedCoach, setSelectedCoach] = useState<CoachProps | null>(null)
   useEffect(() => {
      const foundCoach = coaches.find((coach) => coach.id.toString() === id)
      setSelectedCoach(foundCoach || null)
   }, [id])

   if (!selectedCoach) {
      return <div>Загрузка...</div>
   }

   const {
      img,
      name,
      surename,
      position,
      dateOfBirth,
      biography,
      achievements,
   } = selectedCoach

   return (
      <main>
         <StyledComponent>
            <Flex vertical>
               <Flex
                  className="frist-part-coach"
                  justify="space-between"
                  align="end"
               >
                  <Flex gap={80} vertical justify="center">
                     <h1 className="coach-full-name">
                        <AnimatedName>{name}</AnimatedName>
                        <br />
                        <AnimatedSurname>{surename}</AnimatedSurname>
                     </h1>

                     <AnimatedCard>
                        <Flex vertical gap={15}>
                           <Flex vertical>
                              <StyledTitle level={5}>Должность</StyledTitle>
                              <StyledText>{position}</StyledText>
                           </Flex>

                           <Flex vertical>
                              <StyledTitle level={5}>Дата рождения</StyledTitle>
                              <StyledText>{dateOfBirth}</StyledText>
                           </Flex>
                        </Flex>
                     </AnimatedCard>
                  </Flex>

                  <AnimatedImage src={img} alt="" />
               </Flex>

               <Flex vertical className="biography-box">
                  <h2 className="main-title">Биография</h2>
                  <p className="bio">{biography}</p>

                  <br />
                  <br />

                  <h2 className="main-title">Достижения</h2>

                  <Flex gap={50} justify="start" className="">
                     {achievements?.map(({ image, text }) => (
                        <StyledCard>
                           <img
                              className="trophy-image"
                              width="100%"
                              height="220px"
                              src={image}
                              alt="trophy"
                           />

                           <h2>{text}</h2>
                        </StyledCard>
                     ))}
                  </Flex>

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

const StyledComponent = styled(Flex)`
   margin: 0 auto;

   .frist-part-coach {
      padding: 150px 75px 0;
      max-width: 1600px;
   }

   .coach-full-name {
      line-height: 0.6;
      font-size: 55px;
      font-family: 'Inter', serif;
   }

   .biography-box {
      padding: 35px 75px 55px;
      max-width: 1600px;
      margin-top: 50px;
      background-color: #f1f4f6;

      .main-title {
         margin-bottom: 20px;
      }

      .bio {
         font-size: 13px;
         font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
         min-height: 80px;
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
   }
`

const AnimatedCard = styled(StyledCard)`
   opacity: 0;
   width: 520px;
   animation: ${slideInLeft} 0.9s ease-in-out forwards;
   animation-delay: 0.4s;
`

const StyledTitle = styled(Title)`
   color: #333;
   font-size: 17px;
`

const StyledText = styled.h1`
   font-size: 30px;
   color: #00a64f;
`

const AnimatedImage = styled.img`
   width: 500px;
   height: auto;
   opacity: 0;
   animation: ${fadeIn} 0.4s ease-in-out forwards;
   animation-delay: 0.3s;

   -webkit-box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
   -moz-box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
   box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
`

const AnimatedName = styled.span`
   opacity: 0;
   animation: ${fadeIn} 0.9s ease-in-out forwards;
   font-size: 30px;
   line-height: 2;
   animation-delay: 0.3s;
`

const AnimatedSurname = styled.span`
   opacity: 0;
   animation: ${fadeIn} 0.6s ease-in-out forwards;
   animation-delay: 0.5s;
`
