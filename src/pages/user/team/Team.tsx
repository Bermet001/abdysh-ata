import styled from 'styled-components'
import { Card, Col, Flex } from 'antd'
import { team_page } from '../../../configs'
import { Link } from 'react-router-dom'

interface CardBackgroundProps {
   image: string
}

const Team = () => {
   window.scrollTo(0, 0)

   return (
      <Container>
         <h2 className="main-title">Название команды</h2>

         <TeamContainer className="team-container" wrap gap={22}>
            {team_page.map(({ image, id, full_name, position, number }) => (
               <Col key={id} xs={11} sm={11} md={7} lg={5} xl={4}>
                  <StyledCard>
                     <Link to={`/player/${id}`}>
                        <CardBackground image={image}>
                           <Overlay>
                              <PlayerNumber>{number}</PlayerNumber>
                              <div style={{ marginBottom: '15px' }}>
                                 <PlayerName>{full_name}</PlayerName>
                                 <PlayerPosition>{position}</PlayerPosition>
                              </div>
                           </Overlay>
                        </CardBackground>
                     </Link>
                  </StyledCard>
               </Col>
            ))}
         </TeamContainer>
      </Container>
   )
}

export default Team

const Container = styled.div`
   margin: auto;
   max-width: 1600px;
   overflow: hidden;
`

const StyledCard = styled(Card)`
   border-radius: 8px;
   width: 100%;
   position: relative;
   cursor: pointer;
   height: 350px;

   @media (max-width: 390px) {
      height: 400px !important;
   }

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
   padding: 10px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   height: 100%;
   border-radius: 6px;
   z-index: 10;
   margin-bottom: 10px;
   background: linear-gradient(to top, rgba(0, 0, 0, 0.769), transparent);
`

const PlayerNumber = styled.div`
   font-size: 80px;
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

   @media (min-width: 768px) {
      font-size: 120px;
   }
`

const PlayerName = styled.h2`
   font-size: 20px;
   font-weight: bold;
   text-align: center;
   color: white;
   transform: translateY(10px);
   transition: transform 0.3s;

   ${StyledCard}:hover & {
      transform: translateY(5px);
   }

   @media (max-width: 390px) {
      font-size: 30px;
   }
`

const PlayerPosition = styled.h3`
   font-size: 16px;
   font-weight: normal;
   text-align: center;
   color: white;
   transform: translateY(10px);
   transition: transform 0.3s;

   ${StyledCard}:hover & {
      transform: translateY(5px);
   }

   @media (min-width: 768px) {
      font-size: 18px;
   }
`

const TeamContainer = styled(Flex)`
   width: 100vw;

   @media (max-width: 768px) {
      flex-wrap: wrap;
   }

   @media (max-width: 480px) {
      flex-direction: column !important;
      .ant-col-xs-11 {
         max-width: 100% !important;
         flex: 1 0 45% !important;
      }
   }
`
