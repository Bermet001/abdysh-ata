import { Flex } from 'antd'
import MatchCard from './MatchCard'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useEffect } from 'react'
import { getMatches } from '../store/slice/matches/matchesThunk'

const MatchInfo = () => {
   const { matches } = useAppSelector((state) => state.matches)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getMatches())
   }, [dispatch])

   return (
      <StyledContainer>
         <StyledFlexContainer>
            {matches.map((match, index: number) => (
               <MatchCard key={index} match={match} />
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
   overflow-x: overlay;
   height: 210px;

   ::-webkit-scrollbar {
      display: none;
   }

   scrollbar-width: none;

   @media (max-width: 1450px) {
      padding: 0 20px;
   }

   @media (max-width: 600px) {
      padding: 0 20px;
      margin-top: -60px;
   }

   @media (max-width: 480px) {
      height: 150px;
   }
`

const StyledFlexContainer = styled(Flex)`
   gap: 15px;
   justify-content: center;
   flex-wrap: nowrap;
   height: 210px;
   align-items: end;

   @media (max-width: 1000px) {
      width: 970px;
   }

   @media (max-width: 880px) {
      gap: 10px;
      width: 900px;
   }

   @media (max-width: 680px) {
      gap: 10px;
      width: 800px;
   }

   @media (max-width: 480px) {
      height: 150px;
      width: 600px;
   }
`
