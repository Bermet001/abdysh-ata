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

         <Flex className="main-info" align="center" justify=" space-between">
            <Team gap={10} vertical align="center" justify="center">
               <TeamLogo src={team1Logo} alt={team1Name} />
               {/* <span>{team1Name}</span> */}
            </Team>
            <Countdown vertical align="center" justify="center">
               <p style={{ marginLeft: '5px' }}>0 : 4</p>
            </Countdown>
            <Team gap={10} vertical align="center" justify="center">
               <TeamLogo src={team2Logo} alt={team2Name} />
               {/* <span>{team2Name}</span>/ */}
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
   width: 310px;
   border: 1px solid #e5e5e5;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   min-width: 300px;
   border-radius: 3px;
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
   width: 50px;
   height: auto;
   min-width: 30px;
   margin-right: 10px;
`

const Time = styled.h3`
   margin: 10px 0;
`

const Countdown = styled(Flex)`
   margin: 10px 0;

   > p {
      font-size: 28px;
      font-weight: bold;
   }
`
