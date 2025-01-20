import { Flex } from 'antd'
import { matches } from '../configs'
import MatchCard from './MatchCard'
import styled from 'styled-components'

const MatchInfo = () => {
   return (
      <StyledContainer>
         <StyledFlexContainer>
            {matches.map((match, index) => (
               <MatchCard key={index} {...match} />
            ))}
         </StyledFlexContainer>
      </StyledContainer>
   )
}

export default MatchInfo

const StyledContainer = styled.section`
   margin: 0 auto;
   margin-top: -100px;
   position: relative;
   z-index: 1;
   width: 100%;
   padding: 0 75px;
   max-width: 1600px;
`

const StyledFlexContainer = styled(Flex)`
   gap: 15px;
   justify-content: center;

   @media (max-width: 1200px) {
      flex-wrap: wrap;
   }

   @media (max-width: 800px) {
      gap: 10px;
      flex-direction: row;
      justify-content: space-between;

      > div {
         flex: 0 0 calc(50% - 10px);
         max-width: calc(50% - 10px);
      }
   }

   @media (max-width: 600px) {
      padding: 0 30px;
      flex-direction: column;
      align-items: center;

      > div {
         flex: 0 0 100%;
         max-width: 100%;
      }
   }
`
