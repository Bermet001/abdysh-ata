import styled from 'styled-components'
import { Button, Flex, Table } from 'antd'
import { NavLink, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../store/store'

const Coaches = () => {
   window.scrollTo(0, 0)
   const { slug } = useParams<{ slug: string }>()
   const { coaches } = useAppSelector((state) => state.team)

   const schedule = [
      {
         key: '1',
         trainer: 'name',
         group: 1,
         students: 15,
         hours: 8,
         monday: '17:00 - 18:30',
         tuesday: '',
         wednesday: '17:00 - 18:30',
         thursday: '',
         friday: '17:00 - 18:30',
         saturday: '17:00 - 18:30',
         sunday: '',
         location: 'Зал 1',
      },
      {
         key: '2',
         trainer: name,
         group: 1,
         students: 14,
         hours: 12,
         monday: '18:00 - 19:30',
         tuesday: '18:00 - 19:30',
         wednesday: '17:10 - 18:40',
         thursday: '17:10 - 18:40',
         friday: '',
         saturday: '13:50 - 15:20 (бассейн)',
         sunday: '',
         location: 'Стадион',
      },
      {
         key: '3',
         trainer: name,
         group: 1,
         students: 30,
         hours: 3,
         monday: '15:00 - 15:45',
         tuesday: '',
         wednesday: '15:00 - 15:45',
         thursday: '',
         friday: '15:00 - 15:45',
         saturday: '',
         sunday: '',
         location: 'Зал 2',
      },
   ]

   const columns = [
      { title: '№', dataIndex: 'key', key: 'key' },
      { title: 'Ф.И.О. тренера', dataIndex: 'trainer', key: 'trainer' },
      { title: 'Группа', dataIndex: 'group', key: 'group' },
      { title: 'Ученики', dataIndex: 'students', key: 'students' },
      { title: 'Часы', dataIndex: 'hours', key: 'hours' },
      { title: 'Понедельник', dataIndex: 'monday', key: 'monday' },
      { title: 'Вторник', dataIndex: 'tuesday', key: 'tuesday' },
      { title: 'Среда', dataIndex: 'wednesday', key: 'wednesday' },
      { title: 'Четверг', dataIndex: 'thursday', key: 'thursday' },
      { title: 'Пятница', dataIndex: 'friday', key: 'friday' },
      { title: 'Суббота', dataIndex: 'saturday', key: 'saturday' },
      { title: 'Воскресенье', dataIndex: 'sunday', key: 'sunday' },
      { title: 'Место проведения', dataIndex: 'location', key: 'location' },
   ]

   return (
      <StyledContainer>
         <h1 className="main-title">Тренерский штаб</h1>

         <Flex justify="space-around" wrap>
            {coaches.map(({ name, position, id, image, slug }) => (
               <StyledCard key={id}>
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
            ))}
         </Flex>
         <br />
         <br />
         <br />
         <Flex vertical>
            <h2 className="main-title">Расписание тренеров</h2>

            {slug == 'futbolnaya-akademiya' ? (
               <Table
                  dataSource={schedule}
                  columns={columns}
                  pagination={false}
               />
            ) : null}
         </Flex>
      </StyledContainer>
   )
}

export default Coaches

const StyledContainer = styled.section`
   max-width: 1600px;
   margin: 0 auto;
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
