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
                  align="center"
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
               </Flex>
            </Flex>
         </StyledComponent>
      </main>
   )
}

export default Coach

const fadeIn = keyframes`
   from { opacity: 0; transform: translateY(-20px); }
   to { opacity: 1; transform: translateY(0); }
`

const slideInLeft = keyframes`
   from { opacity: 0; transform: translateX(-30px); }
   to { opacity: 1; transform: translateX(0); }
`

const StyledComponent = styled(Flex)`
   margin: 0 auto;
   .first-part-coach {
      padding: 0 75px;
      max-width: 1600px;
      width: 100vw;
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
   }
`

const StyledCard = styled(Card)`
   width: 220px;
   background-color: #fff;
   border-radius: 6px;
`

const AnimatedCard = styled(StyledCard)`
   opacity: 0;
   max-width: 520px;
   width: 520px;
   min-width: 325px;
   animation: ${slideInLeft} 0.9s ease-in-out forwards;
   animation-delay: 0.4s;
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
`
const AnimatedSurname = styled.p`
   opacity: 0;
   animation: ${fadeIn} 0.6s ease-in-out forwards;
   animation-delay: 0.5s;
   width: 100%;
`
