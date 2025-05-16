import styled from 'styled-components'
import { Card, Col, Flex } from 'antd'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../store/store'

interface CardBackgroundProps {
   image: string
}

const Team = () => {
   window.scrollTo(0, 0)
   const { players } = useAppSelector((state) => state.team)
   return (
      <Container>
         <h2 className="main-title">Состав команды</h2>
         <TeamContainer wrap gap={42}>
            {players.map(({ image, id, name, position, number, slug }) => (
               <Col key={id} xs={24} sm={5} md={5} lg={4}>
                  <StyledCard>
                     <Link to={`/team/player/${slug}`}>
                        <CardBackground
                           image={`https://abdysh-backend.webtm.ru/${image}`}
                        >
                           <Overlay>
                              <div style={{ marginBottom: '15px' }}>
                                 <PlayerName>
                                    <PlayerNumber>{number}</PlayerNumber> <p style={{marginLeft:"35px"}}>{name}</p>
                                 </PlayerName>
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
   margin: 0 auto;
   max-width: 1600px;
   padding: 0 35px;
`

const StyledCard = styled(Card)`
   border-radius: 8px;
   width: 230px;
   position: relative;
   cursor: pointer;
   height: 350px;
   &:hover {
      transform: scale(1.05);
   }
   @media (max-width: 390px) {
      height: 400px !important;
   }
   @media (max-width: 1400px) {
      min-width: 200px !important;
      width: 200px !important;
   }
   @media (max-width: 700px) {
      width: 100% !important;
      height: 550px !important;
   }
   .ant-card-body {
      height: 100%;
      padding: 0;
   }
`

const CardBackground = styled.div<CardBackgroundProps>`
   background-image: url(${({ image }) => image});
   background-size: cover;
   background-position: center;
   height: 100%;
   display: flex;
   transition: transform 0.3s;
   border-radius: 6px;
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
   /* font-size: 28px; */
   font-weight: 900;
   font-size: 25px;
   color: #ed5a0c;
   position: absolute;
   /* text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); */
   display: inline-block;
   /* margin-right: 8px; */
   /* background: rgba(255, 255, 255, 0.1); */
   /* padding: 2px 6px; */
   /* border-radius: 4px;
   transform: translateY(10px);
   transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
   opacity: 0.7; */
   /* ${StyledCard}:hover & {
      transform: translateY(5px);
      opacity: 1;
   }
   @media (min-width: 768px) {
      font-size: 32px;
      padding: 3px 8px;
   }
   @media (max-width: 390px) {
      font-size: 24px;
      padding: 2px 5px;
   } */
`

const PlayerName = styled.div`
   font-size: 20px;
   font-weight: bold;
   text-align: center;
   color: white;
   transform: translateY(10px);
   transition: transform 0.3s ease-in-out;
   display: flex;
   ${StyledCard}:hover & {
      transform: translateY(5px);
   }
   @media (max-width: 390px) {
      font-size: 24px;
   }
   @media (min-width: 768px) {
      font-size: 22px;
   }
`

const PlayerPosition = styled.h3`
   font-size: 16px;
   font-weight: normal;
   text-align: center;
   color: white;
   transform: translateY(10px);
   transition: transform 0.3s ease-in-out;
   ${StyledCard}:hover & {
      transform: translateY(5px);
   }
   @media (min-width: 768px) {
      font-size: 18px;
   }
   @media (max-width: 390px) {
      font-size: 14px;
   }
`

const TeamContainer = styled(Flex)`
   max-width: 1600px;
   margin: 0 auto;
   @media (max-width: 1400px) {
      flex-wrap: wrap;
      width: 100%;
   }
   @media (max-width: 800px) {
      gap: 0px !important;
      justify-content: center;
   }
   @media (max-width: 480px) {
      flex-direction: column !important;
      gap: 25px !important;
      .ant-col-xs-11 {
         max-width: 100% !important;
         flex: 1 0 45% !important;
      }
   }
`