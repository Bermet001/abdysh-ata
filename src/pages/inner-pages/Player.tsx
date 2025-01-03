import { Flex } from 'antd'
import styled from 'styled-components'
import image from '../../assets/images/players/image.png'

const Player = () => {
   return (
      <StyledContainer>
         <Flex className="content" align="center">
            <Flex>
               <PlayerImage src={image} alt="Player" />
            </Flex>

            <PlayerInfo>
               <PlayerCard>
                  <PlayerDetails>
                     <PlayerPosition>Goalkeeper</PlayerPosition>
                     <PlayerName>1 Marc-André TER STEGEN</PlayerName>
                  </PlayerDetails>
               </PlayerCard>

               <PlayerBio>
                  A keeper with great reflexes and also excellent with the ball
                  at his feet. Marc-André ter Stegen signed for FC Barcelona in
                  the summer of 2014 from Borussia Mönchengladbach. Born on 30
                  April 1992, he quickly made a name as one of Europe’s most
                  promising goalkeepers.
               </PlayerBio>
            </PlayerInfo>
         </Flex>
      </StyledContainer>
   )
}

export default Player
const StyledContainer = styled.section`
   background: linear-gradient(to bottom, #23a356, #18191b);
   padding: 30px;
   display: flex;
   align-items: center;
   justify-content: center;

   .content {
      margin-top: 40px;
      border-radius: 6px;
      background-color: white;
      width: 100%;
   }
`

const PlayerImage = styled.img`
   width: 400px;
   border-radius: 10px;
`

const PlayerInfo = styled.div`
   margin-left: 40px;
   background-color: rgba(255, 255, 255, 0.1);
   padding: 20px;
   border-radius: 10px;
   max-width: 400px;
   backdrop-filter: blur(10px);
   color: black;
`

const PlayerCard = styled.div`
   display: flex;
   align-items: center;
   padding: 15px;
   border-radius: 6px;
   margin-bottom: 20px;
`

const PlayerDetails = styled.div`
   flex-grow: 1;
`

const PlayerPosition = styled.div`
   font-size: 14px;
   color: black;
`

const PlayerName = styled.div`
   font-size: 20px;
   font-weight: bold;
   color: black;
`

const PlayerBio = styled.p`
   font-size: 16px;
   margin: 10px 0;
   color: black;
`
