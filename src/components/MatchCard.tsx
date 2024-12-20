import styled from 'styled-components'
import { Button, Flex } from 'antd'
// import { ClockCircleOutlined } from '@ant-design/icons'
import { FC, useEffect, useState } from 'react'

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
   countdown,
   arena,
}) => {
   const [isMatchOver, setIsMatchOver] = useState(false)

   useEffect(() => {
      const matchTime = new Date(dateTime).getTime()
      const currentTime = Date.now()

      if (currentTime > matchTime) {
         setIsMatchOver(true)
      }
   }, [dateTime])

   return (
      <MatchCardContainer vertical align="center">
         <Time>{dateTime}</Time>

         <Flex gap={20} className="main-info" align="center" justify="center">
            <Team vertical align="center" justify="center">
               <TeamLogo src={team1Logo} alt={team1Name} />
               <span>{team1Name}</span>
            </Team>
            <Countdown vertical align="center" justify="center">
               <p style={{ marginLeft: '5px' }}>{countdown}</p>
               <span>дней часов минут</span>
            </Countdown>
            <Team vertical align="center" justify="center">
               <TeamLogo src={team2Logo} alt={team2Name} />
               <span>{team2Name}</span>
            </Team>
         </Flex>

         <Arena>{arena}</Arena>
         <BuyTicketsButton type="primary">
            {isMatchOver ? 'Смотреть эфир' : 'Купить билет'}
         </BuyTicketsButton>
      </MatchCardContainer>
   )
}

export default MatchCard

const MatchCardContainer = styled(Flex)`
   background-color: #fff;
   color: #000;
   padding: 20px;
   text-align: center;
   width: 420px;
   border: 1px solid #e5e5e5;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   min-width: 400px;
   border-radius: 3px;

   > .main-info {
      min-height: 170px;
   }
`

const Team = styled(Flex)`
   margin: 10px 0;
`

const TeamLogo = styled.img`
   width: 80px;
   height: auto;
   min-width: 80px;
   margin-right: 10px;
`

const Time = styled.h3`
   margin: 10px 0;
`

const Countdown = styled(Flex)`
   margin: 10px 0;

   > p {
      font-size: 20px;
   }
`

const Arena = styled.div`
   margin: 10px 0;
`

const BuyTicketsButton = styled(Button)`
   width: 60%;
   /* background-color: #ff4d4f; */
   border: none;

   &:hover {
      /* background-color: #ff7875; */
   }
`
