import { Flex } from 'antd'
import styled from 'styled-components'
import image from '../../assets/images/players/image.png'

const Player = () => {
   return (
      <StyledContainer>
         <Flex className="content" align="center">
            <PlayerImage src={image} alt="Player" />

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
               <ReadMoreButton>READ FULL BIO +</ReadMoreButton>
            </PlayerInfo>
         </Flex>
      </StyledContainer>
   )
}

export default Player

const StyledContainer = styled.section`
   background: linear-gradient(to bottom, #23a356, #18191b);
   padding: 30px;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
`

const PlayerImage = styled.img`
   width: 450px;
   border-radius: 10px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`

const PlayerInfo = styled.div`
   margin-left: 40px; /* Отступ от изображения */
   background-color: rgba(255, 255, 255, 0.1);
   padding: 20px;
   border-radius: 10px;
   max-width: 400px; /* Максимальная ширина блока с информацией */
   backdrop-filter: blur(10px); /* Эффект размытия фона */
`

const PlayerCard = styled.div`
   display: flex;
   align-items: center;
   background-color: #08111f;
   padding: 15px;
   border-radius: 6px;
   color: white;
   margin-bottom: 20px; /* Отступ снизу */
`

const PlayerDetails = styled.div`
   flex-grow: 1;
`

const PlayerPosition = styled.div`
   font-size: 14px;
   color: #bbb; /* Более светлый цвет для позиции */
`

const PlayerName = styled.div`
   font-size: 20px;
   font-weight: bold;
`

const PlayerBio = styled.p`
   font-size: 16px;
   color: #f9f9f9; /* Светлый цвет текста */
   margin: 10px 0;
`

const ReadMoreButton = styled.button`
   background-color: #23a356;
   color: white;
   border: none;
   padding: 10px 20px;
   border-radius: 5px;
   cursor: pointer;
   font-weight: bold;
   transition: background-color 0.3s;

   &:hover {
      background-color: #1e8b4e; /* Потемнение при наведении */
   }
`
