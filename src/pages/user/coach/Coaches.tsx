import styled from 'styled-components'
import { Button, Flex, Table } from 'antd'
import { NavLink, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Navigation } from 'swiper/modules'
import { Schedule } from '../../../store/slice/coach/coachSlice'
import { ColumnType } from 'antd/es/table'
import { useEffect } from 'react'
import { getSchedules } from '../../../store/slice/coach/coachThunk'

const Coaches = () => {
   window.scrollTo(0, 0)
   const { slug } = useParams<{ slug: string }>()
   const { coaches } = useAppSelector((state) => state.team)
   const { schedules } = useAppSelector((state) => state.coach)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getSchedules())
   }, [dispatch])

   const columns: ColumnType<Schedule>[] = [
      { title: '№', dataIndex: 'id', key: 'id' },
      { title: 'Ф.И.О. тренера', dataIndex: 'coach_name', key: 'coach_name' },
      { title: 'Группа', dataIndex: 'group', key: 'group' },
      {
         title: 'Понедельник',
         key: 'monday',
         render: (_, record: Schedule) =>
            `${record.monday_start || '—'} - ${record.monday_end || '—'}`,
      },
      {
         title: 'Вторник',
         key: 'tuesday',
         render: (_, record: Schedule) =>
            `${record.tuesday_start || '—'} - ${record.tuesday_end || '—'}`,
      },
      {
         title: 'Среда',
         key: 'wednesday',
         render: (_, record: Schedule) =>
            `${record.wednesday_start || '—'} - ${record.wednesday_end || '—'}`,
      },
      {
         title: 'Четверг',
         key: 'thursday',
         render: (_, record: Schedule) =>
            `${record.thursday_start || '—'} - ${record.thursday_end || '—'}`,
      },
      {
         title: 'Пятница',
         key: 'friday',
         render: (_, record: Schedule) =>
            `${record.friday_start || '—'} - ${record.friday_end || '—'}`,
      },
      {
         title: 'Суббота',
         key: 'saturday',
         render: (_, record: Schedule) =>
            `${record.saturday_start || '—'} - ${record.saturday_end || '—'}`,
      },
      {
         title: 'Воскресенье',
         key: 'sunday',
         render: (_, record: Schedule) =>
            `${record.sunday_start || '—'} - ${record.sunday_end || '—'}`,
      },
      { title: 'Место проведения', dataIndex: 'location', key: 'location' },
   ]

   return (
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
            modules={[FreeMode, Pagination, Navigation]}
         >
            {coaches.map(({ name, position, id, image, slug }) => (
               <SwiperSlide key={id}>
                  <StyledCard>
                     <div className="card-coach">
                        <img className="coach-photo" src={image} alt={name} />
                        <h2 className="coach-name">{name}</h2>
                        <p className="coach-position">{position}</p>
                        <Button type="primary" className="more-info-btn">
                           <NavLink to={`/coaches/${slug}`}>
                              Смотреть профиль
                           </NavLink>
                        </Button>
                     </div>
                  </StyledCard>
               </SwiperSlide>
            ))}
         </Swiper>

         <br />
         <br />
         {slug === 'futbolnaya-akademiya' && (
            <Flex vertical>
               <h2 className="main-title">Расписание тренеров</h2>
               <Table
                  dataSource={schedules}
                  columns={columns}
                  pagination={false}
                  rowKey="id"
                  scroll={{ x: 1150 }}
               />
            </Flex>
         )}
      </StyledContainer>
   )
}

export default Coaches

const StyledContainer = styled.section`
   max-width: 1600px;
   margin: 0 auto;

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
         height: 300px;
      }
   }

   .coach-name {
      font-size: 24px;
      font-weight: 400;
      margin: 0;
      text-align: center;
      width: 300px;
   }

   .coach-surname {
      font-size: 36px;
      font-weight: 700;
      margin: 0;
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

   &:hover .more-info-btn {
      top: 65%;
      opacity: 1;
      transform: translate(-50%, -50%);
   }
`
