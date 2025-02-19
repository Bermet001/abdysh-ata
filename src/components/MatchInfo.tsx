import { Flex, Skeleton } from 'antd'
import MatchCard from './MatchCard'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useEffect } from 'react'
import { getMatches } from '../store/slice/matches/matchesThunk'

const MatchInfo = () => {
   const { matches, isLoading } = useAppSelector((state) => state.matches)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getMatches())
   }, [dispatch])

   return (
      <StyledContainer>
         <StyledFlexContainer align="end" justify="center" gap={15}>
            {isLoading
               ? [...Array(4)].map((_, index) => (
                    <SkeletonMatchCard key={index} />
                 ))
               : matches?.map((match, index: number) => (
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
      margin-top: -60px;
   }

   @media (max-width: 480px) {
      height: 150px;
   }
`

const StyledFlexContainer = styled(Flex)`
   height: 210px;

   @media (max-width: 1000px) {
      width: 970px;
   }

   @media (max-width: 880px) {
      gap: 5px !important;
      width: 900px;
   }

   @media (max-width: 680px) {
      width: 800px;
   }

   @media (max-width: 480px) {
      height: 150px;
      width: 600px;
   }
`

const SkeletonMatchCard = styled(Skeleton)`
   width: 270px; /* Match the width of MatchCard */
   height: 120px; /* Match the height of MatchCard */
   border-radius: 10px; /* Optional: Add border radius to match design */
   margin: 0 10px; /* Spacing between skeletons */
`
