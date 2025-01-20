import styled from 'styled-components'
import { Table, Button } from 'antd'
import ldsjd from '../../../assets/images/banner.avif'
import { data } from '../../../configs'

const SchedulMatches = () => {
   const columns = [
      {
         title: 'Дата',
         dataIndex: 'date',
         key: 'date',
         render: (_text: string, record: { time: string; date: string }) => (
            <DateTimeWrapper>
               <Date>{record.date}</Date>
               <Time>{record.time}</Time>
            </DateTimeWrapper>
         ),
      },
      {
         title: 'Лига',
         dataIndex: 'league',
         key: 'league',
         render: (text: string) => <League>{text}</League>,
      },
      {
         title: 'Команды',
         key: 'teams',
         render: (record: {
            team: string
            opponent: string
            logo: string
            opponentLogo: string
         }) => (
            <TeamsWrapper>
               <TeamWrapper className="team-box">
                  <span>{record.team}</span>
                  <img src={record.logo} alt={record.team} />
               </TeamWrapper>

               <Vs>vs</Vs>

               <TeamWrapper className="team-box">
                  <img src={record.opponentLogo} alt={record.opponent} />
                  <span>{record.opponent}</span>
               </TeamWrapper>
            </TeamsWrapper>
         ),
      },
      {
         title: 'Действие',
         key: 'action',
         render: () => <Button type="primary">Смотреть</Button>,
      },
   ]

   return (
      <StyledMainContainer>
         <div className="main-container">
            <Overlay />
            <img
               style={{ objectFit: 'cover' }}
               width="100%"
               className="image-background"
               height={400}
               src={ldsjd}
            />
         </div>

         <StyledContainer>
            <h1 className="main-title">Расписание матчей</h1>

            <Table
               columns={columns}
               dataSource={data}
               pagination={false}
               scroll={{ x: 'max-content' }}
               rowClassName="table-row"
            />
         </StyledContainer>
      </StyledMainContainer>
   )
}

export default SchedulMatches

const StyledMainContainer = styled.main`
   margin-bottom: 50px;

   .main-container {
      position: relative;
   }

   .image-background {
      object-fit: cover;
   }

   .team-box {
      display: flex;
      width: 200px;
   }

   .team-box:first-child {
      display: flex;
      justify-content: end;
   }
`

const StyledContainer = styled.div`
   margin: auto;
   background: white;
   border-radius: 8px;
   padding: 20px 75px;

   h1 {
      margin-top: 20px;
      color: green;
   }

   .ant-table {
      width: 100%;
      background-color: #fefefe;
   }

   .ant-table th {
      background-color: #e8f5e9;
      text-align: center;
   }

   .ant-table-tbody > tr > td {
      padding: 10px;
   }

   .table-row {
      border-bottom: 1px solid #e0e0e0;
   }

   .ant-table-thead > tr > th:first-child,
   .ant-table-thead > tr > th:last-child {
      text-align: start;
   }

   .ant-table-thead > tr > th {
      text-align: center;
   }
`

const TeamsWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`

const TeamWrapper = styled.div`
   display: flex;
   align-items: center;
   margin: 0 10px;
   font-weight: 700;

   img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
   }
`

const Vs = styled.span`
   font-weight: bold;
   margin: 0 10px;
   color: green;
`

const DateTimeWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

const Date = styled.span`
   font-weight: bold;
   font-size: 16px;
   color: #333;
`

const Time = styled.span`
   color: #888;
`

const League = styled.span`
   font-weight: bold;
   color: green;
`

const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 99%;
   background-color: rgba(0, 0, 0, 0.4);
   z-index: 1;
`
