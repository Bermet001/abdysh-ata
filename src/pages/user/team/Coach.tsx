import { Card, Flex, Typography } from 'antd'
import { FC } from 'react'
import styled, { keyframes } from 'styled-components'

const { Title } = Typography

interface CoachProps {
   img?: string
   name?: string
   surename?: string
   position?: string
   dateOfBirth?: string
   biography?: string
}

const Coach: FC<CoachProps> = ({
   img,
   name,
   surename,
   position,
   dateOfBirth,
   biography,
}) => {
   return (
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
            </Flex>
         </Flex>
      </StyledComponent>
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
   margin: 20px auto;
   width: 500px;
   background-color: #f0f2f5;
   border-radius: 6px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

   .ant-typography {
      margin: 0;
   }
`

const AnimatedCard = styled(StyledCard)`
   opacity: 0;
   animation: ${slideInLeft} 0.9s ease-in-out forwards;
   animation-delay: 0.7s;
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
   animation: ${fadeIn} 0.9s ease-in-out forwards;
   animation-delay: 0.3s;
`

const AnimatedName = styled.span`
   opacity: 0;
   animation: ${fadeIn} 0.9s ease-in-out forwards;
   font-size: 30px;
   line-height: 2;
   animation-delay: 0.5s;
`

const AnimatedSurname = styled.span`
   opacity: 0;
   animation: ${fadeIn} 0.9s ease-in-out forwards;
   animation-delay: 0.8s;
`
