import styled from 'styled-components'
import { Card, Typography, Col, Flex } from 'antd'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import { getMatch } from '../../../store/slice/matches/matchesThunk'
import Button from '../../../components/UI/Button'
import bg from '../../../assets/images/backround-tournaments.webp'

// Иконки из Ant Design
import {
   CheckCircleOutlined,
   SwapOutlined,
   WarningOutlined,
   AimOutlined,
   FlagOutlined
} from '@ant-design/icons'
import { MatchEvent } from '../../../store/slice/matches/mathesSlice'
const { Title, Text } = Typography

const MatchInfo = () => {
   const { slug } = useParams()
   const { match } = useAppSelector((state) => state.matches)
   window.scrollTo(0, 0)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getMatch(slug))
   }, [dispatch, slug])

   const formatDateWithLeadingZeros = (date: Date): string => {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      return `${day}.${month}.${year}`
   }

   // Функция для определения цвета фона и границы в зависимости от типа события
   const getEventStyles = (eventType: string) => {
      switch (eventType.toLowerCase()) {
         case 'goal':
         case 'гол':
            return {
               background: 'rgba(5, 165, 80, 0.1)',
               borderColor: '#05a550',
               textColor: '#05a550'
            }
         case 'yellow_card':
            return {
               background: 'rgba(255, 193, 7, 0.1)',
               borderColor: '#FFC107',
               textColor: '#d19100'
            }
         case 'red_card':
            return {
               background: 'rgba(255, 0, 0, 0.1)',
               borderColor: '#FF0000',
               textColor: '#cc0000'
            }
         case 'corner':
         case 'угловой':
            return {
               background: 'rgba(255, 204, 0, 0.1)',
               borderColor: '#ffcc00',
               textColor: '#d19100'
            }
         case 'substitution':
            return {
               background: 'rgba(0, 102, 204, 0.1)',
               borderColor: '#0066cc',
               textColor: '#0066cc'
            }
         case 'offside':
         case 'офсайд':
            return {
               background: 'rgba(128, 128, 128, 0.1)',
               borderColor: '#808080',
               textColor: '#606060'
            }
         default:
            return {
               background: 'rgba(255, 255, 255, 0.05)',
               borderColor: '#ffcc00',
               textColor: '#333333'
            }
      }
   }

   // Функция для выбора иконки в зависимости от типа события
   const getEventIcon = (eventType: string) => {
      switch (eventType.toLowerCase()) {
         case 'goal':
         case 'гол':
            return (
               <CheckCircleOutlined
                  style={{ fontSize: '20px', color: '#05a550' }}
               />
            )
         case 'yellow_card':
            return (
               <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <rect
                     x="4"
                     y="2"
                     width="12"
                     height="16"
                     rx="2"
                     fill="#FFC107"
                  />
               </svg>
            )
         case 'red_card':
            return (
               <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <rect
                     x="4"
                     y="2"
                     width="12"
                     height="16"
                     rx="2"
                     fill="#FF0000"
                  />
               </svg>
            )
         case 'substitution':
            return <SwapOutlined style={{ fontSize: '20px', color: '#0066cc' }} />
         case 'foul':
            return (
               <WarningOutlined style={{ fontSize: '20px', color: '#ff6600' }} />
            )
         case 'corner':
         case 'угловой':
            return (
               <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M10 2L10 8L15 4L10 2Z" fill="#ffcc00" />
                  <rect x="9" y="2" width="2" height="12" fill="#ffcc00" />
               </svg>
            )
         case 'offside':
         case 'офсайд':
            return (
               <FlagOutlined style={{ fontSize: '20px', color: '#808080' }} />
            )
         case 'penalty':
            return <AimOutlined style={{ fontSize: '20px', color: '#ff3300' }} />
         default:
            return null
      }
   }

   // Функция для формирования описания события
   const getEventDescription = (event: MatchEvent): string => {
      if (event.description) return event.description;
    
      const eventTypeDisplay: { [key: string]: string } = {
        goal: 'Гол! Забил',
        гол: 'Гол! Забил',
        yellow_card: 'Жёлтую карточку получил',
        red_card: 'Красную карточку получил',
        substitution: 'Замена.',
        foul: 'Фол.',
        corner: 'Угловой.',
        угловой: 'Угловой.',
        offside: 'Офсайд.',
        офсайд: 'Офсайд.',
        penalty: 'Пенальти.',
      };
    
      const eventType = event.event_type.toLowerCase();
      const baseDescription = eventTypeDisplay[eventType] || 'Событие.';
      return `${baseDescription} ${event.player || ''} в команде ${event.team.title}.`;
    };

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
                  <p className="text-state">{match?.status_display}</p>
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
                           loading="lazy"
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
                           loading="lazy"
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

            {/* Раздел для событий матча */}
            {match?.events && match.events.length > 0 && (
               <EventsSection>
                  <EventsTitle>События матча</EventsTitle>
                  <EventsList>
                     {match.events.map((event:any) => {
                        const eventStyles = getEventStyles(event.event_type);
                        return (
                           <EventItem
                              key={event.id}
                              style={{ 
                                 background: eventStyles.background,
                                 borderLeftColor: eventStyles.borderColor
                              }}
                           >
                              <EventTime color={eventStyles.textColor}>
                                 {event.minute}'
                              </EventTime>
                              <EventIcon>
                                 {getEventIcon(event.event_type)}
                              </EventIcon>
                              <EventContent>
                                 <EventDescription color={eventStyles.textColor}>
                                    {event.description || getEventDescription(event)}
                                 </EventDescription>
                                 <EventTimestamp>
                                    {new Date(event.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                 </EventTimestamp>
                              </EventContent>
                           </EventItem>
                        );
                     })}
                  </EventsList>
               </EventsSection>
            )}
         </Content>
      </MatchCard>
   )
}

export default MatchInfo

// Стили для компонента
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
   width: 150px;
   height: auto;
   margin: 0 auto;
   @media (max-width: 768px) {
      width: 80px;
   }
`

// Стили для раздела событий
const EventsSection = styled.div`
   margin-top: 40px;
   padding: 24px;
   background: rgba(255, 255, 255, 0.873); 
   border-radius: 16px; 
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
   transition: transform 0.3s ease, box-shadow 0.3s ease;
   max-width: 800px;
   margin-left: auto;
   margin-right: auto;
   
   &:hover {
      transform: translateY(-4px); 
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
   }
   
   @media (max-width: 768px) {
      padding: 16px; 
      margin-top: 30px;
      border-radius: 12px;
   }
`;

const EventsTitle = styled(Title)`
   font-size: 22px !important; 
   margin-bottom: 24px !important;
   font-weight: 600 !important;
   text-transform: uppercase; 
   letter-spacing: 1px; 
   text-align: center;
   
   @media (max-width: 768px) {
      font-size: 18px !important;
      margin-bottom: 16px !important;
   }
`;

const EventsList = styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px; 
   max-height: 500px; 
   overflow-y: auto;
   padding-right: 8px; 
   
   /* Стилизация скроллбара */
   &::-webkit-scrollbar {
      width: 6px;
   }
   &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
   }
   &::-webkit-scrollbar-thumb {
      background: #05a550;
      border-radius: 8px;
   }
   
   @media (max-width: 768px) {
      max-height: 400px;
      gap: 8px;
   }
`;

const EventItem = styled.div`
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   display: flex;
   align-items: flex-start; 
   padding: 12px 16px;
   border-radius: 12px; 
   border-left: 4px solid #ffcc00; 
   transition: transform 0.2s ease, box-shadow 0.2s ease;

   &:hover {
      transform: translateX(4px); 
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
   }
   
   @media (max-width: 768px) {
      padding: 10px 12px;
      border-radius: 8px;
      border-left-width: 3px;
   }
`;

const EventTime = styled.div<{ color?: string }>`
   color: ${props => props.color || '#05a550'}; 
   font-size: 16px;
   font-weight: 700;
   width: 50px; 
   text-align: right;
   margin-right: 12px;
   
   @media (max-width: 768px) {
      font-size: 14px;
      width: 40px;
      margin-right: 8px;
   }
`;

const EventIcon = styled.div`
   margin: 0 12px;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 24px; 
   height: 24px;
   
   @media (max-width: 768px) {
      margin: 0 8px;
      width: 20px;
      height: 20px;
   }
`;

const EventContent = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 4px;
`;

const EventDescription = styled.div<{ color?: string }>`
   font-size: 15px; 
   line-height: 1.5; 
   font-weight: 500;
   color: ${props => props.color || '#333333'};
   
   @media (max-width: 768px) {
      font-size: 14px;
      line-height: 1.4;
   }
`;

const EventTimestamp = styled.div`
   font-size: 12px;
   color: #888;
   font-style: italic;
   
   @media (max-width: 768px) {
      font-size: 11px;
   }
`;