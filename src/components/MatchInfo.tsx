import { Flex } from 'antd'
import { matches } from '../configs'
import MatchCard from './MatchCard'
import styled from 'styled-components'

const MatchInfo = () => {
   return (
      <StyledContainer>
         <Flex
            gap={15}
            className="container"
            justify="center"
            style={{ margin: '0 auto' }}
         >
            {matches.map((match, index) => (
               <MatchCard key={index} {...match} />
            ))}
         </Flex>
      </StyledContainer>
   )
}

export default MatchInfo

const StyledContainer = styled.section`
   margin-top: -100px;
   position: relative;
   z-index: 1;
   padding: 0 75px;
   width: 100%;

   & .container {
      display: flex;
      justify-content: center;

      @media (max-width: 800px) {
         gap: 10px;
      }
      @media (max-width: 1200px) {
         flex-wrap: wrap;
      }
   }

   @media (max-width: 800px) {
      .container {
         flex-direction: row;
         justify-content: space-between;
      }

      & > .container > div {
         flex: 0 0 calc(50% - 10px);
         max-width: calc(50% - 10px);
      }
   }

   @media (max-width: 600px) {
      padding: 0 30px;

      .container {
         flex-direction: column;
         align-items: center;
      }

      & > .container > div {
         flex: 0 0 100%;
         max-width: 100%;
      }
   }
`
