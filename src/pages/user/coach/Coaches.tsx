import styled from 'styled-components'
import { Button, Flex, Table } from 'antd'
import { NavLink, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../store/store'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Navigation } from 'swiper/modules'

const Coaches = () => {
   window.scrollTo(0, 0)
   const { slug } = useParams<{ slug: string }>()
   const { coaches } = useAppSelector((state) => state.team)

   const columns = [
      { title: '№', dataIndex: 'key', key: 'key' },
      { title: 'Ф.И.О. тренера', dataIndex: 'trainer', key: 'trainer' },
      { title: 'Группа', dataIndex: 'group', key: 'group' },
      { title: 'Понедельник', dataIndex: 'monday', key: 'monday' },
      { title: 'Вторник', dataIndex: 'tuesday', key: 'tuesday' },
      { title: 'Среда', dataIndex: 'wednesday', key: 'wednesday' },
      { title: 'Четверг', dataIndex: 'thursday', key: 'thursday' },
      { title: 'Пятница', dataIndex: 'friday', key: 'friday' },
      { title: 'Суббота', dataIndex: 'saturday', key: 'saturday' },
      { title: 'Воскресенье', dataIndex: 'sunday', key: 'sunday' },
      { title: 'Место проведения', dataIndex: 'location', key: 'location' },
   ]

   const dataSource = [
      {
         key: '1',
         trainer: 'Иван Иванов',
         group: 'U-10',
         monday: '10:00 - 12:00',
         tuesday: '16:00 - 18:00',
         wednesday: '—',
         thursday: '14:00 - 16:00',
         friday: '—',
         saturday: '09:00 - 11:00',
         sunday: '—',
         location: 'Стадион Центральный',
      },
      {
         key: '2',
         trainer: 'Петр Петров',
         group: 'U-12',
         monday: '14:00 - 16:00',
         tuesday: '—',
         wednesday: '15:00 - 17:00',
         thursday: '—',
         friday: '16:00 - 18:00',
         saturday: '—',
         sunday: '10:00 - 12:00',
         location: 'Манеж Олимпийский',
      },
      {
         key: '3',
         trainer: 'Алексей Смирнов',
         group: 'U-14',
         monday: '09:00 - 11:00',
         tuesday: '10:00 - 12:00',
         wednesday: '—',
         thursday: '13:00 - 15:00',
         friday: '—',
         saturday: '11:00 - 13:00',
         sunday: '—',
         location: 'Стадион Лужники',
      },
   ]

   return (
      <StyledContainer>
         <h1 className="main-title">Тренерский штаб</h1>

         <Swiper
            navigation
            slidesPerView={3}
            spaceBetween={30}
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
         <Flex vertical>
            <h2 className="main-title">Расписание тренеров</h2>
            {slug === 'futbolnaya-akademiya' && (
               <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
               />
            )}
         </Flex>
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
      width: 350px;
      height: auto;
      margin-bottom: 20px;
      -webkit-box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
      -moz-box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
      box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
   }

   .coach-name {
      font-size: 24px;
      font-weight: 400;
      margin: 0;
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
