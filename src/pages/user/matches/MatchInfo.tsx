import styled from 'styled-components'
import { Card, Typography, Row, Col, Flex } from 'antd'
import bg from '../../../assets/images/banner.avif'
import spartakLogo from '../../../assets/images/barselona.png'

const { Title, Text } = Typography

const MatchInfo = () => {
   return (
      <MatchCard>
         <DarkOverlay />
         <BackgroundImage />
         <Content>
            <Text className="time">02 ФЕВРАЛЯ, 18:30</Text>
            <Flex
               gap={50}
               justify="center"
               align="center"
               style={{ margin: '20px 0' }}
            >
               <Col>
                  <Team>
                     <img
                        src={spartakLogo}
                        alt="Спартак"
                        style={{ width: '140px' }}
                     />
                     <Title className="team-name" level={3}>
                        Спартак
                     </Title>
                  </Team>
               </Col>
               <Flex gap={10}>
                  <Score>4</Score>
                  <Score>:</Score>
                  <Score>4</Score>
               </Flex>
               <Col>
                  <Team>
                     <img
                        src={spartakLogo}
                        alt="Спартак"
                        style={{ width: '140px' }}
                     />
                     <Title className="team-name" level={3}>
                        Спартак
                     </Title>
                  </Team>
               </Col>
            </Flex>
            <Row justify="center">
               <Text>Джебель Али</Text>
               <Text>45'</Text>
               <Text>89'</Text>
            </Row>
         </Content>
      </MatchCard>
   )
}

export default MatchInfo

const MatchCard = styled(Card)`
   position: relative;
   padding-top: 100px;
   color: white;
`

const BackgroundImage = styled.div`
   background-image: url(${bg});
   background-size: cover;
   background-position: center;
   position: absolute;
   width: 100vw;
   height: 65vh;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 0;
   opacity: 1;
`

const DarkOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.365);
   border-radius: 10px;
   opacity: 1;
   height: 65vh;
   z-index: 1;

   @media (max-width: 768px) {
      border-radius: 6px;
   }
`

const Content = styled.div`
   position: relative;
   z-index: 2;
   padding: 20px;
   text-align: center;

   > .time {
      color: white;
      font-size: 20px;
      font-weight: 600;
   }

   .team-name {
      font-size: 25px;
      color: white;
   }
`

const Team = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Score = styled.div`
   font-size: 36px;
   font-weight: bold;
`
