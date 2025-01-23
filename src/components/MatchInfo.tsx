import { Flex } from 'antd'
import { matches } from '../configs'
import MatchCard from './MatchCard'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

interface Match {
   team1Logo: string
   team1Name: string
   team2Logo: string
   team2Name: string
   dateTime: string
   countdown: string
   arena: string
}

const MatchInfo = () => {
   const [visibleCount, setVisibleCount] = useState<number>(matches.length)

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth <= 690) {
            setVisibleCount(2)
         } else if (window.innerWidth <= 880) {
            setVisibleCount(3)
         } else {
            setVisibleCount(matches.length)
         }
      }

      handleResize()
      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   return (
      <StyledContainer>
         <StyledFlexContainer>
            {matches
               .slice(0, visibleCount)
               .map((match: Match, index: number) => (
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

   @media (max-width: 1450px) {
      padding: 0 20px;
   }

   @media (max-width: 600px) {
      padding: 0 20px;
      margin-top: -60px;
   }
`

const StyledFlexContainer = styled(Flex)`
   gap: 15px;
   justify-content: center;
   flex-wrap: nowrap;

   @media (max-width: 880px) {
      flex-wrap: wrap;
      gap: 10px;
   }

   @media (max-width: 680px) {
      flex-wrap: nowrap;
   }
`
