import { Card, Flex, Typography } from 'antd'
import styled from 'styled-components'

const { Title } = Typography

interface CoachProps {
   img?: string
   name?: string
   surename?: string
   position?: string
   dateOfBirth?: string
   biography?: string
}

const Coach: React.FC<CoachProps> = ({
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
                     <p className="coach-name"> {name}</p>
                     <br />
                     {surename}
                  </h1>
                  <StyledCard>
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
                  </StyledCard>
               </Flex>

               <img className="photo" src={img} alt="" />
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

      > .coach-name {
         font-size: 30px;
      }
   }

   .photo {
      width: 500px;
      height: auto;
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

const StyledTitle = styled(Title)`
   color: #333;
   font-size: 17px;
`

const StyledText = styled.h1`
   font-size: 30px;
   color: #00a64f;
`
