import { Card, Flex, Image, Typography } from 'antd'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { getCoach } from '../../../store/slice/coach/coachThunk'

const { Title } = Typography
interface ScheduleCardProps {
   index?: number
}
const Coach: FC = () => {
   const { slug } = useParams<{ slug: string | undefined }>()
   window.scrollTo(0, 0)
   const { coach } = useAppSelector((state) => state.coach)
   const dispatch = useAppDispatch()
   useEffect(() => {
      if (slug) {
         dispatch(getCoach(slug))
      }
   }, [dispatch, slug])
   const { image, name, position, birth_date, bio, schedules, team_image, achievement } =
      coach
   const formatDay = (day: string): string => {
      const days: { [key: string]: string } = {
         monday: 'Понедельник',
         tuesday: 'Вторник',
         wednesday: 'Среда',
         thursday: 'Четверг',
         friday: 'Пятница',
         saturday: 'Суббота',
         sunday: 'Воскресенье',
      }
      return days[day.toLowerCase()] || day
   }
   const formatTime = (start: string | null, end: string | null): string => {
      const startTime = start ? start.slice(0, 5) : 'Не указано'
      const endTime = end ? end.slice(0, 5) : 'Не указано'
      return `${startTime} - ${endTime}`
   }
   return (
      <main>
         <StyledComponent>
            <Flex vertical>
               <Flex
                  className="first-part-coach"
                  justify="space-between"
                  align="center"
               >
                  <Flex
                     gap={80}
                     className="main-info"
                     vertical
                     justify="center"
                  >
                     <h1 className="coach-full-name">
                        <AnimatedSurname>
                           {name || 'Имя не указано'}
                        </AnimatedSurname>
                     </h1>
                     <AnimatedCard>
                        <Flex vertical gap={15}>
                           <Flex vertical>
                              <StyledTitle level={5}>Должность</StyledTitle>
                              <StyledText>
                                 {position || 'Не указано'}
                              </StyledText>
                           </Flex>
                           <Flex vertical>
                              <StyledTitle level={5}>Дата рождения</StyledTitle>
                              <StyledText>
                                 {birth_date || 'Не указано'}
                              </StyledText>
                           </Flex>
                        </Flex>
                     </AnimatedCard>
                  </Flex>
                  <AnimatedImage loading="lazy" src={image || ''} alt={name || 'Тренер'} />
               </Flex>
               <Flex vertical className="biography-box">
                  <h2 className="main-title">Команда</h2>
                  {team_image ? (
                     <Image
                        className="teama-image"
                        src={team_image}
                        alt="команда"
                        width="100%"
                        fallback="https://via.placeholder.com/550"
                     />
                  ) : null}
                  <br />
                  <br />
                  <br />
                  <h2 className="main-title">Расписание</h2>
                  {schedules && schedules.length > 0 ? (
                     <ScheduleContainer>
                        {schedules.map((schedule, index) => (
                           <AnimatedScheduleCard
                              key={schedule.id}
                              index={index}
                           >
                              <ScheduleItem>
                                 <ScheduleLabel>День:</ScheduleLabel>
                                 <ScheduleValue>
                                    {formatDay(schedule.day)}
                                 </ScheduleValue>
                              </ScheduleItem>
                              <ScheduleItem>
                                 <ScheduleLabel>Группа:</ScheduleLabel>
                                 <ScheduleValue>
                                    {schedule.group || 'Не указано'}
                                 </ScheduleValue>
                              </ScheduleItem>
                              <ScheduleItem>
                                 <ScheduleLabel>Время:</ScheduleLabel>
                                 <ScheduleValue>
                                    {formatTime(
                                       schedule?.start_time,
                                       schedule?.end_time
                                    )}
                                 </ScheduleValue>
                              </ScheduleItem>
                              <ScheduleItem>
                                 <ScheduleLabel>Место:</ScheduleLabel>
                                 <ScheduleValue>
                                    {schedule.location || 'Не указано'}
                                 </ScheduleValue>
                              </ScheduleItem>
                           </AnimatedScheduleCard>
                        ))}
                     </ScheduleContainer>
                  ) : (
                     <StyledText>Расписание отсутствует</StyledText>
                  )}
                  <br />
                  <br />
                  <h2 className="main-title">Биография</h2>
                  <p
                     dangerouslySetInnerHTML={{ __html: bio || '' }}
                     className="bio"
                  />

{achievement && achievement.length > 0 && (
   <>
      <br />
      <h2 className="main-title">Достижения</h2>
      <AchievementsSection>
         {achievement.map((item:any) => (
            <AchievementCard key={item.id} index={item.id}>
               <AchievementTitle>{item.title}</AchievementTitle>
               <AchievementDate>
                  {new Date(item.date).toLocaleDateString('ru-RU', {
                     year: 'numeric',
                     month: 'long',
                  })}
               </AchievementDate>
            </AchievementCard>
         ))}
      </AchievementsSection>
   </>
)}


               </Flex>
            </Flex>
         </StyledComponent>
      </main>
   )
}

export default Coach

const fadeIn = keyframes`
   from { opacity: 0; transform: translateY(-20px); }
   to { opacity: 1; transform: translateY(0); }
`
const slideInLeft = keyframes`
   from { opacity: 0; transform: translateX(-30px); }
   to { opacity: 1; transform: translateX(0); }
`
const StyledComponent = styled(Flex)`
   margin: 0 auto;
   max-width: 1600px;
   padding: 100px 0;
   padding-bottom: 0;
   .ant-flex-align-stretch {
      width: 100%;
   }
   .main-title{
      margin-bottom: 15px;
   }
   .first-part-coach {
      padding: 0 75px;
      max-width: 1600px;
      width: 100%;
      @media (max-width: 1100px) {
         flex-direction: column-reverse;
         gap: 40px;
         align-items: start;
      }
      @media (max-width: 600px) {
         padding: 0 20px;
      }
   }
   .coach-full-name {
      line-height: 0.6;
      font-size: 55px;
      font-family: 'Inter', serif;
      width: 100%;
   }
   .biography-box {
      padding: 35px 75px 55px;
      max-width: 1600px;
      background-color: #f1f4f6;
      margin-top: 30px;
      .ant-image {
         .teama-image,
         .ant-image-mask {
            width: 550px;
            @media (max-width: 700px) {
               width: 100% !important;
            }
         }
         @media (max-width: 700px) {
            width: 100% !important;
         }
      }
      @media (max-width: 1100px) {
         padding: 20px;
      }
   }
`

const AnimatedCard = styled(Card)`
   opacity: 0;
    width: 220px;
   background-color: #fff;
   border-radius: 6px;
   max-width: 520px;
   width: 520px;
   min-width: 325px;
   animation: ${slideInLeft} 0.9s ease-in-out forwards;
   animation-delay: 0.4s;
   @media (max-width: 600px) {
      width: 100%;
   }
`
const StyledTitle = styled(Title)`
   color: #333;
   font-size: 17px;
`
const StyledText = styled.h2`
   font-size: 30px;
   color: #00a64f;
`
const AnimatedImage = styled.img`
   width: 360px;
   height: auto;
   opacity: 0;
   animation: ${fadeIn} 0.4s ease-in-out forwards;
   animation-delay: 0.3s;
   -webkit-box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
   -moz-box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
   box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
   @media (max-width: 1100px) {
      width: 300px;
   }
`
const AnimatedSurname = styled.p`
   opacity: 0;
   animation: ${fadeIn} 0.6s ease-in-out forwards;
   animation-delay: 0.5s;
   line-height: 1;
   width: 100%;
`
const ScheduleContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 20px;
   margin-top: 20px;
   @media (max-width: 600px) {
      grid-template-columns: 1fr;
   }
`
const AnimatedScheduleCard = styled.div<ScheduleCardProps>`
   background: linear-gradient(145deg, #ffffff, #f8f8f8);
   border-radius: 12px;
   padding: 20px;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   opacity: 0;
   animation: ${fadeIn} 0.6s ease-in-out forwards;
   animation-delay: ${(props) => 0.2 + (props.index || 0) * 0.2}s;
   transition: transform 0.3s ease, box-shadow 0.3s ease;
   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 16px rgba(0, 166, 79, 0.2);
   }
`
const ScheduleItem = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 8px 0;
   border-bottom: 1px solid rgba(0, 0, 0, 0.05);
   &:last-child {
      border-bottom: none;
   }
`
const ScheduleLabel = styled.span`
   font-size: 16px;
   font-weight: 600;
   color: #333;
   text-transform: uppercase;
   letter-spacing: 0.5px;
`
const ScheduleValue = styled.span`
   font-size: 16px;
   font-weight: 500;
   color: #00a64f;
   background: rgba(0, 166, 79, 0.1);
   padding: 4px 10px;
   border-radius: 6px;
   transition: background 0.3s ease;
   ${AnimatedScheduleCard}:hover & {
      background: rgba(0, 166, 79, 0.2);
   }
`
const AchievementsSection = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
   gap: 20px;
   margin-top: 20px;
`

const AchievementCard = styled.div<{ index: number }>`
   background: #ffffff;
   border-radius: 12px;
   padding: 20px;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   opacity: 0;
   animation: ${fadeIn} 0.6s ease-in-out forwards;
   animation-delay: ${(props) => 0.3 + props.index * 0.2}s;
   border-left: 5px solid #00a64f;
   transition: transform 0.3s ease, box-shadow 0.3s ease;
   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 166, 79, 0.15);
   }
`

const AchievementTitle = styled.h3`
   font-size: 18px;
   font-weight: 600;
   color: #333;
   margin-bottom: 10px;
`

const AchievementDate = styled.span`
   font-size: 14px;
   color: #00a64f;
   font-weight: 500;
   background-color: rgba(0, 166, 79, 0.1);
   padding: 5px 10px;
   border-radius: 6px;
   align-self: flex-start;
`
