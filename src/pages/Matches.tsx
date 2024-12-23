import styled from 'styled-components'
import { Table, Button } from 'antd'
import barcelonaLogo from '../assets/images/main-logo.png'
import benficaLogo from '../assets/images/barselona.png'
import sportingLogo from '../assets/images/match.jpg'

const data = [
   {
      key: '1',
      date: '05 Января 2025',
      time: '20:00',
      team: 'Aбдыш-ата',
      opponent: 'команда',
      league: 'La Liga',
      logo: barcelonaLogo,
      opponentLogo: sportingLogo,
   },
   {
      key: '2',
      date: '06 Января 2025',
      time: '21:00',
      team: 'Спортивный клуб',
      opponent: 'ФК Барселона',
      league: 'La Liga',
      logo: sportingLogo,
      opponentLogo: benficaLogo,
   },
   {
      key: '3',
      date: '07 Января 2025',
      time: '19:00',
      team: 'Жетафе',
      opponent: 'Aбдыш-ата',
      league: 'La Liga',
      logo: barcelonaLogo,
      opponentLogo: sportingLogo,
   },
   {
      key: '4',
      date: '08 Января 2025',
      time: '18:00',
      team: 'Бенфика',
      opponent: 'ФК Барселона',
      league: 'La Liga',
      opponentLogo: sportingLogo,
      logo: sportingLogo,
   },
]

const SchedulMatches = () => {
   const columns = [
      {
         title: 'Дата',
         dataIndex: 'date',
         key: 'date',
      },
      {
         title: 'Время',
         dataIndex: 'time',
         key: 'time',
      },
      {
         title: 'Команда',
         dataIndex: 'logo',
         key: 'team',
         render: (logo: string | undefined, record: { team: string }) => (
            <TeamWrapper>
               <img src={logo} alt={record.team} />
               <span>{record.team}</span>
            </TeamWrapper>
         ),
      },
      {
         title: 'Противник',
         dataIndex: 'opponentLogo',
         key: 'opponent',
         render: (
            opponentLogo: string | undefined,
            record: { opponent: string }
         ) => (
            <TeamWrapper>
               <img src={opponentLogo} alt={record.opponent} />
               <span>{record.opponent}</span>
            </TeamWrapper>
         ),
      },
      {
         title: 'Лига',
         dataIndex: 'league',
         key: 'league',
      },
      {
         title: 'Действие',
         key: 'action',
         render: () => <Button type="primary">Билеты</Button>,
      },
   ]

   return (
      <StyledContainer>
         <h1 className="main-title">Расписание матчей</h1>
         <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: 'max-content' }}
         />
      </StyledContainer>
   )
}

export default SchedulMatches

const StyledContainer = styled.div`
   padding: 120px 75px;
   margin: auto;
   background: white;
   border-radius: 8px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
   padding: 20px;

   h1 {
      margin-top: 100px;
   }

   .ant-table {
      width: 100%;
      background-color: #fefefe;
   }

   .ant-table th {
      background-color: #f2f2f2;
   }
`

const TeamWrapper = styled.div`
   display: flex;
   align-items: center;

   img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
   }
`
