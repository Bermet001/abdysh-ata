import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from 'antd'

interface Team {
   id: number
   title: string
   slug: string
   is_our_team: boolean
   logo: string
}

interface Match {
   id: number
   title: string
   slug: string
   home_team: Team
   away_team: Team
   home_score: number
   away_score: number
   date: string
   location: string
   status: string
   status_display: string
   stream_link: string | null
}

const MatchCard: FC<Match> = ({
   home_team,
   away_team,
   date,
   home_score,
   away_score,
   slug,
}) => {
   return (
      <NavLink to={`match/${slug}`}>
         <MatchCardContainer vertical align="center">
            <Time>
               {new Date(date).toLocaleDateString('ky-KG')}{' '}
               {new Date(date).toLocaleTimeString('ky-KG', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
               })}
            </Time>

            <Flex className="main-info" align="center" justify="space-between">
               <Team vertical align="center" justify="center">
                  <TeamLogo
                     width="50px"
                     height="50px"
                     src={home_team.logo}
                     alt={home_team.title}
                  />
               </Team>

               <Countdown vertical align="center" justify="center">
                  <p>
                     {home_score} : {away_score}
                  </p>
               </Countdown>

               <Team vertical align="center" justify="center">
                  <TeamLogo
                     height="50px"
                     width="50px"
                     src={away_team.logo}
                     alt={away_team.title}
                  />
               </Team>
            </Flex>
         </MatchCardContainer>
      </NavLink>
   )
}

export default MatchCard

const MatchCardContainer = styled(Flex)`
   background-color: #fff;
   color: #000;
   padding: 20px;
   text-align: center;
   min-width: 270px;
   max-width: 310px;
   width: 100%;
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
      padding: 15px;
      width: 100%;

      @media (max-width: 1000px) {
         padding: 0px 15px;
         min-height: 110px;
      }

      @media (max-width: 470px) {
         padding: 5px;
         min-height: 60px;
      }
   }

   @media (max-width: 1325px) {
      padding: 10px 0px;
      min-width: 230px;
   }

   @media (max-width: 880px) {
      padding: 10px;
      max-width: 210px;
      min-width: 200px;
   }

   @media (max-width: 470px) {
      max-width: 160px;
      min-width: 150px;
   }
`

const Team = styled(Flex)`
   margin: 10px 0;
   flex-direction: column;
   height: 50px;

   @media (max-width: 600px) {
      margin: 5px 0;
   }
`

const TeamLogo = styled.img`
   height: auto;
   min-width: 30px;

   @media (max-width: 1050px) {
      width: 40px;
   }

   @media (max-width: 768px) {
      width: 35px;
   }

   @media (max-width: 480px) {
      width: 30px;
   }

   @media (max-width: 380px) {
      width: 17px;
   }
`

const Time = styled.h3`
   margin: 10px 0;

   @media (max-width: 768px) {
      font-size: 17px;
   }

   @media (max-width: 600px) {
      font-size: 13px;
   }
`

const Countdown = styled(Flex)`
   margin: 10px 0;

   > p {
      font-size: 28px;
      font-weight: bold;

      @media (max-width: 1200px) {
         font-size: 26px;
      }

      @media (max-width: 600px) {
         font-size: 20px;
      }

      @media (max-width: 480px) {
         font-size: 18px;
      }
   }
`
