import { Card, Flex, Typography } from 'antd'
import styled from 'styled-components'

const { Title, Text } = Typography

interface CoachProps {
   img: string
   name: string
   surename: string
   position: string
   dateOfBirth: string
   biography: string
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
            <Flex justify="space-around">
               <Flex vertical justify="center">
                  <h1>
                     {name} <br />
                     {surename}
                  </h1>

                  <StyledCard>
                     <StyledTitle level={5}>Должность</StyledTitle>
                     <StyledText strong>{position}</StyledText>
                     <StyledTitle level={5}>Дата рождения</StyledTitle>
                     <StyledText strong>{dateOfBirth}</StyledText>
                  </StyledCard>
               </Flex>

               <img className="photo" src={img} alt="" />
            </Flex>

            <Flex>
               <p>{biography}</p>
            </Flex>
         </Flex>
      </StyledComponent>
   )
}

export default Coach

const StyledComponent = styled(Flex)`
   max-width: 1600px;

   .photo {
      width: 450px;
      height: auto;
   }
`

const StyledCard = styled(Card)`
   max-width: 300px;
   margin: 20px auto;
   padding: 20px;
   background-color: #f0f2f5;
   border-radius: 10px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

const StyledTitle = styled(Title)`
   margin: 0;
   color: #333;
`

const StyledText = styled(Text)`
   font-size: 18px;
   color: #d00000;
   margin-bottom: 16px;
`
