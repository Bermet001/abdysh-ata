import styled from 'styled-components'
import { Button, Modal } from 'antd'
import { NavLink, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../store/store'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import { useState } from 'react'
import Cards from '../../../components/academy/Cards'
import Academy from '../../../components/academy/Academy'

interface Schedule {
   id: number
   coach: number
   coach_name: string
   group: string
   day: string
   start_time: string
   end_time: string
   location: string
}

interface Coach {
   name: string
   position: string
   id: number
   image: string
   slug: string
   schedules: Schedule[]
}

const Coaches = () => {
   const { slug } = useParams<{ slug: string }>()
   const { coaches } = useAppSelector((state) => state.team) as unknown as {
      coaches: Coach[]
   }
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const [selectedCoachSchedules, setSelectedCoachSchedules] = useState<
      Schedule[]
   >([])
   const linkSlug = slug
   const showScheduleModal = (schedules: Schedule[]) => {
      setSelectedCoachSchedules(schedules)
      setIsModalOpen(true)
   }
   const handleCancel = () => setIsModalOpen(false)
   return (
      <>
         {slug === 'futbolnaya-akademiya' ? (
            <>
               <Academy />
               <Cards />
            </>
         ) : null}
         <StyledContainer>
            <h1 className="main-title">Тренерский штаб</h1>
            <Swiper
               navigation
               slidesPerView={3}
               spaceBetween={30}
               breakpoints={{
                  350: { slidesPerView: 1 },
                  500: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
               }}
               pagination={{
                  clickable: true,
               }}
               modules={[FreeMode, Navigation]}
            >
               {coaches.map(
                  ({ name, position, id, image, slug, schedules }) => (
                     <SwiperSlide key={id}>
                        <StyledCard>
                           <div className="card-coach">
                              <img
                                 className="coach-photo"
                                 src={image}
                                 alt={name}
                              />
                              <h2 className="coach-name">{name}</h2>
                              <p className="coach-position">{position}</p>
                              <Button type="primary" className="more-info-btn">
                                 <NavLink to={`/coaches/${slug}`}>
                                    Смотреть профиль
                                 </NavLink>
                              </Button>
                              {linkSlug === 'futbolnaya-akademiya' &&
                                 schedules?.length > 0 && (
                                    <Button
                                       type="default"
                                       className="schedule-btn"
                                       onClick={() =>
                                          showScheduleModal(schedules)
                                       }
                                    >
                                       Расписание
                                    </Button>
                                 )}
                           </div>
                        </StyledCard>
                     </SwiperSlide>
                  )
               )}
            </Swiper>
            <Modal
               title="Расписание тренировок"
               open={isModalOpen}
               onCancel={handleCancel}
               footer={null}
               width={600}
               className="modal"
            >
               <ScheduleContainer>
                  {selectedCoachSchedules.map((schedule) => (
                     <ScheduleCard key={schedule.id}>
                        <ScheduleItem>
                           <span className="label">День:</span>
                           <span className="value">
                              {schedule.day === 'tuesday'
                                 ? 'Вторник'
                                 : 'Пятница'}
                           </span>
                        </ScheduleItem>
                        <ScheduleItem>
                           <span className="label">Группа:</span>
                           <span className="value">{schedule.group}</span>
                        </ScheduleItem>
                        <ScheduleItem>
                           <span className="label">Время:</span>
                           <span className="value">
                              {schedule.start_time.slice(0, 5)} -{' '}
                              {schedule.end_time.slice(0, 5)}
                           </span>
                        </ScheduleItem>
                        <ScheduleItem>
                           <span className="label">Место:</span>
                           <span className="value">{schedule.location}</span>
                        </ScheduleItem>
                     </ScheduleCard>
                  ))}
               </ScheduleContainer>
            </Modal>
            <br />
            <br />
         </StyledContainer>
      </>
   )
}

export default Coaches

const StyledContainer = styled.section`
   max-width: 1600px;
   margin: 0 auto;
   padding: 0 75px;
   margin-top: 30px;

   @media (max-width: 1024px) {
      padding: 0 30px;
   }

   .swiper-button-prev {
      left: -10px;
   }
   .swiper-button-next {
      right: -10px;
   }
   .swiper-button-prev,
   .swiper-button-next {
      color: #ed5a0c;
      width: 50px;
      height: 50px;
   }
   .swiper-pagination-bullet {
      background: #ed5a0c !important;
      @media (max-width: 600px) {
         display: none;
      }
   }
`
const StyledCard = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   overflow: hidden;
   .card-coach {
      padding: 40px;
      transition: filter 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
      @media (max-width: 1400px) {
         padding: 0;
      }
   }
   &:hover .card-coach {
      .coach-photo,
      .coach-position {
         filter: blur(2px);
      }
   }
   .coach-photo {
      width: 300px;
      object-fit: cover;
      height: 420px;
      margin-bottom: 20px;
      -webkit-box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
      -moz-box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
      box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
      @media (max-width: 800px) {
         height: 400px;
      }
   }
   .coach-name {
      font-size: 24px;
      font-weight: 400;
      margin: 0;
      text-align: center;
      width: 300px;
   }
   .coach-position {
      font-weight: 400;
      margin: 0;
      color: #d1d1d1;
   }
   .more-info-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-10%);
      padding: 20px 30px;
      border: none;
      color: white;
      cursor: pointer;
      opacity: 0;
      transition: top 0.5s ease, opacity 0.3s ease;
   }
   .schedule-btn {
      margin-top: 10px;
      background: #fff;
      border: 1px solid #ed5a0c;
      color: #ed5a0c;
      &:hover {
         background: #ed5a0c;
         color: #fff;
      }
   }
   &:hover .more-info-btn {
      top: 65%;
      opacity: 1;
      transform: translate(-50%, -50%);
   }
`
const ScheduleContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   padding: 20px 0;
`
const ScheduleCard = styled.div`
   background: #f9f9f9;
   padding: 15px;
   border-radius: 8px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`
const ScheduleItem = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 8px 0;
   .label {
      font-weight: 600;
      color: #333;
   }
   .value {
      color: #666;
   }
`
