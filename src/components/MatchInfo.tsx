import { Flex } from 'antd'
import { matches } from '../configs'
import MatchCard from './MatchCard'
import styled from 'styled-components'

const MatchInfo = () => {
   return (
      <StyledContainer justify="space-between" gap={15}>
         {matches.map((match, index) => (
            <MatchCard key={index} {...match} />
         ))}
      </StyledContainer>
   )
}

export default MatchInfo

const StyledContainer = styled(Flex)`
   margin-top: -100px;
   position: relative;
   z-index: 1;
   padding: 0 75px;
`
