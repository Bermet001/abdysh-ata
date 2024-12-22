import styled from 'styled-components'
import { Flex } from 'antd'
import { FC } from 'react'

interface IProps {
   team1Logo: string
   team1Name: string
   team2Logo: string
   team2Name: string
   dateTime: string
   countdown: string
   arena: string
}

const MatchCard: FC<IProps> = ({
   team1Logo,
   team1Name,
   team2Logo,
   team2Name,
   dateTime,
}) => {
   return (
      <MatchCardContainer vertical align="center">
         <Time>{dateTime}</Time>

         <Flex className="main-info" align="center" justify="space-between">
            <Team vertical align="center" justify="center">
               <TeamLogo src={team1Logo} alt={team1Name} />
            </Team>
            <Countdown vertical align="center" justify="center">
               <p>0 : 4</p>
            </Countdown>
            <Team gap={10} vertical align="center" justify="center">
               <TeamLogo src={team2Logo} alt={team2Name} />
            </Team>
         </Flex>
      </MatchCardContainer>
   )
}

export default MatchCard

const MatchCardContainer = styled(Flex)`
   background-color: #fff;
   color: #000;
   padding: 20px;
   text-align: center;
   width: 100%;
   max-width: 310px;
   border: 1px solid #e5e5e5;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   border-radius: 10px;
   transition: transform 0.3s ease;
   cursor: pointer;

   &:hover {
      transform: translateY(-6px);
   }

   > .main-info {
      min-height: 120px;
      padding: 20px;
      width: 100%;
      justify-content: space-between;
   }
`

const Team = styled(Flex)`
   margin: 10px 0;
`

const TeamLogo = styled.img`
   width: 55px;
   height: auto;
   min-width: 30px;

   @media (max-width: 768px) {
      width: 45px;
   }

   @media (max-width: 600px) {
      width: 70px;
   }

   @media (max-width: 480px) {
      width: 40px;
   }
`

const Time = styled.h3`
   margin: 10px 0;

   @media (max-width: 768px) {
      font-size: 18px;
   }

   @media (max-width: 600px) {
      font-size: 16px;
   }
`

const Countdown = styled(Flex)`
   margin: 10px 0;

   > p {
      font-size: 28px;
      font-weight: bold;

      @media (max-width: 768px) {
         font-size: 24px;
      }

      @media (max-width: 600px) {
         font-size: 20px;
      }
   }
`
