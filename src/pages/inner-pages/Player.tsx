import { Flex } from 'antd'
import styled from 'styled-components'
import image from '../../assets/images/players/image.png'

const Player = () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth',
   })

   return (
      <StyledContainer>
         <Flex className="content" align="center">
            <Flex vertical>
               <PlayerImage src={image} alt="Player" />
            </Flex>

            <PlayerInfo>
               <PlayerCard>
                  <PlayerDetails>
                     <PlayerPosition>Вратарь</PlayerPosition>
                     <PlayerName>Бекжан Сагынбаев</PlayerName>
                     <PlayerAge>Возраст: 31 лет</PlayerAge>
                     <PlayerNumber>Номер игрока: 1</PlayerNumber>
                  </PlayerDetails>
               </PlayerCard>

               <PlayerBio>
                  A keeper with great reflexes and also excellent with the ball
                  at his feet. Бекжан Сагынбаев signed for FC Barcelona in the
                  summer of 2014 from Borussia Mönchengladbach. Born on 30 April
                  1992, he quickly made a name as one of Europe’s most promising
                  goalkeepers.
               </PlayerBio>

               <PlayerBio>
                  A keeper with great reflexes and also excellent with the ball
                  at his feet. Бекжан Сагынбаев signed for FC Barcelona in the
                  summer of 2014 from Borussia Mönchengladbach. Born on 30 April
                  1992, he quickly made a name as one of Europe’s most promising
                  goalkeepers.
               </PlayerBio>

               <DetailsContainer justify="space-between">
                  <Flex>
                     <DetailLabel>Date of Birth</DetailLabel>
                     <DetailValue>14/12/1996</DetailValue>
                  </Flex>

                  <Flex>
                     <DetailLabel>Weight</DetailLabel>
                     <DetailValue>68 kg</DetailValue>
                  </Flex>

                  <Flex>
                     <DetailLabel>Height</DetailLabel>
                     <DetailValue>176 cm</DetailValue>
                  </Flex>
               </DetailsContainer>
            </PlayerInfo>
         </Flex>
      </StyledContainer>
   )
}

export default Player

const StyledContainer = styled.section`
   background: linear-gradient(to bottom, #23a356, #18191b);
   padding: 75px 35px;
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 100vh;
   max-width: 1600px;

   .content {
      background-color: white;
      width: 100%;
      border-radius: 10px;

      padding-top: 20px;
   }
`

const PlayerImage = styled.img`
   width: 400px;
   border-radius: 10px;
   /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); */
`

const PlayerInfo = styled.div`
   margin-left: 40px;
   background-color: #ebf1ed;
   padding: 20px;
   border-radius: 10px;
   max-width: 850px;
   backdrop-filter: blur(10px);
   color: black;
`

const PlayerCard = styled.div`
   display: flex;
   align-items: center;
   padding: 15px;
   border-radius: 6px;
   margin-bottom: 20px;
   background-color: rgba(255, 255, 255, 0.8);
`

const PlayerDetails = styled.div`
   flex-grow: 1;
`

const PlayerPosition = styled.div`
   font-size: 14px;
   color: #666;
`

const PlayerName = styled.div`
   font-size: 20px;
   font-weight: bold;
   color: #333;
`

const PlayerAge = styled.div`
   font-size: 14px;
   color: #666;
`

const PlayerNumber = styled.div`
   font-size: 14px;
   color: #666;
`

const PlayerBio = styled.p`
   font-size: 16px;
   margin: 10px 0;
   color: #333;
   line-height: 1.5;
`
const DetailsContainer = styled(Flex)`
   margin-bottom: 20px;
   padding: 10px;
   border: 1px solid #ccc;
   border-radius: 6px;
`

const DetailLabel = styled.span`
   font-weight: bold;
   color: #333;
`

const DetailValue = styled.span`
   color: #666;
   /* margin-bottom: 10px; */
`
