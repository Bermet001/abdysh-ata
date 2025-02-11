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
      <section>
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
      </section>
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
      padding: 20px;
      width: 100%;
      justify-content: space-between;

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
   width: 55px;
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
      font-size: 14px;
   }

   @media (max-width: 480px) {
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

      @media (max-width: 1000px) {
         font-size: 23px;
      }

      @media (max-width: 600px) {
         font-size: 20px;
      }

      @media (max-width: 480px) {
         font-size: 18px;
      }
   }
`
