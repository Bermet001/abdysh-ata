import styled from 'styled-components'
import { Card, Typography, Col, Flex } from 'antd'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect, useState } from 'react'
import { getMatch } from '../../../store/slice/matches/matchesThunk'
import Button from '../../../components/UI/Button'
import bg from '../../../assets/images/banner.avif'

const { Title, Text } = Typography

const MatchInfo = () => {
   const [countdown, setCountdown] = useState('')
   const { slug } = useParams<{ slug: string }>()
   const { match } = useAppSelector((state) => state.matches)
   window.scrollTo(0, 0)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getMatch(slug))
   }, [dispatch, slug])

   useEffect(() => {
      if (match?.date) {
         const matchDate = new Date(match.date)

         const updateCountdown = () => {
            const now = new Date()
            const diff = matchDate.getTime() - now.getTime()

            if (diff <= 0) {
               if (match.status_display === 'Завершен') {
                  setCountdown('Матч завершен')
               } else {
                  setCountdown('Матч начался')
               }
            } else {
               const days = Math.floor(diff / (1000 * 60 * 60 * 24))
               const hours = Math.floor(
                  (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
               )
               const minutes = Math.floor(
                  (diff % (1000 * 60 * 60)) / (1000 * 60)
               )
               const seconds = Math.floor((diff % (1000 * 60)) / 1000)

               let countdownString = ''
               if (days > 0) {
                  countdownString += `${days} дн `
               }
               if (days > 0 || hours > 0) {
                  countdownString += `${hours.toString().padStart(2, '0')}: `
               }
               countdownString += `${minutes.toString().padStart(2, '0')} : `
               countdownString += `${seconds.toString().padStart(2, '0')} сек`

               setCountdown(countdownString)
            }
         }

         updateCountdown()
         const interval = setInterval(updateCountdown, 1000)

         return () => clearInterval(interval)
      } else {
         setCountdown('Дата не доступна')
      }
   }, [match])

   const formatDateWithLeadingZeros = (date: Date): string => {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()

      return `${day}.${month}.${year}`
   }
   return (
      <MatchCard>
         <DarkOverlay />
         <BackgroundImage />

         <Content>
            <Flex
               vertical
               align="center"
               justify="center"
               className="block-container-match-first"
            >
               <LeagueLogo src={match?.liga?.image} alt={match?.liga?.title} />
               <h4 className="time">
                  <Countdown>
                     {match?.date
                        ? formatDateWithLeadingZeros(new Date(match?.date))
                        : 'Дата не доступна'}
                  </Countdown>
               </h4>

               <Countdown>
                  <p className="text-state">{countdown} </p>
               </Countdown>
            </Flex>
            <Flex
               gap={50}
               justify="center"
               align="center"
               style={{ margin: '20px 0' }}
            >
               <Col>
                  <TeamCard>
                     <Team>
                        <img
                           src={match?.home_team?.logo}
                           alt={match?.home_team?.title}
                           height="80px"
                           style={{ width: '80px', objectFit: 'contain' }}
                        />
                        <Title className="team-name" level={4}>
                           {match?.home_team?.title}
                        </Title>
                     </Team>
                  </TeamCard>
               </Col>

               <Flex gap={10} align="center">
                  <Score>{match?.home_score}</Score>
                  <Score>:</Score>
                  <Score>{match?.away_score}</Score>
               </Flex>

               <Col>
                  <TeamCard>
                     <Team>
                        <img
                           src={match?.away_team?.logo}
                           alt={match?.away_team?.title}
                           height="80px"
                           style={{ width: '80px', objectFit: 'contain' }}
                        />
                        <Title className="team-name" level={4}>
                           {match?.away_team?.title}
                        </Title>
                     </Team>
                  </TeamCard>
               </Col>
            </Flex>

            <Flex vertical align="center" gap={10}>
               {match?.stream_link ? (
                  <Button>
                     <a href={match?.stream_link}>Смотреть</a>
                  </Button>
               ) : null}

               <Text style={{ color: 'white' }}>{match?.location}</Text>

               <Text style={{ color: 'white' }}>
                  Статус матча: {match?.status_display}
               </Text>
            </Flex>
         </Content>
      </MatchCard>
   )
}

export default MatchInfo

const MatchCard = styled(Card)`
   position: relative;
   padding: 0 !important;
   padding-top: 40px !important;
   overflow: hidden;
   border: none !important;
   text-align: center;
   border-radius: 0 !important;
   margin-top: 50px;

   @media (max-width: 768px) {
      padding: 50px 20px;
   }
`

const BackgroundImage = styled.div`
   background-image: url(${bg});
   background-size: cover;
   background-position: center;
   position: absolute;
   width: 100%;
   height: 100%;

   top: 0;
   left: 0;
   z-index: 0;
`

const DarkOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.5);
   z-index: 1;
   height: 100%;
`

const Content = styled.div`
   position: relative;
   z-index: 2;
   padding: 20px;

   .block-container-match-first {
      margin: 0 auto;
      width: 200px;
   }

   > .time {
      color: white;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
   }

   .team-name {
      font-size: 20px;
      color: white;
   }

   .text-state {
      font-size: 11px;
      color: #ffcc00;
   }
`

const Countdown = styled.div`
   font-size: 24px;
   color: #ffff;
   font-weight: bold;
   display: flex;
   align-items: start;
   justify-content: center;
   gap: 5px;
`

const TeamCard = styled.div`
   text-align: center;
   width: 120px;
   transition: transform 0.3s;

   &:hover {
      transform: scale(1.05);
   }
`

const Team = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   flex-direction: column;
`

const Score = styled.div`
   font-size: 36px;
   font-weight: bold;
   color: white;
`

const LeagueLogo = styled.img`
   width: 100px;
   height: auto;
   margin: 0 auto;

   @media (max-width: 768px) {
      width: 80px;
   }
`
