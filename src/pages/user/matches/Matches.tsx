import styled from 'styled-components'
import { Table, Button } from 'antd'
import ldsjd from '../../../assets/images/banner.avif'
import { data } from '../../../configs'

const SchedulMatches = () => {
   window.scrollTo(0, 0)

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
                  <span className="team-name">{record.team}</span>
                  <img src={record.logo} alt={record.team} />
               </TeamWrapper>

               <Vs>vs</Vs>

               <TeamWrapper className="team-box">
                  <img src={record.opponentLogo} alt={record.opponent} />
                  <span className="team-name">{record.opponent}</span>
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
            <h2 className="main-title">Расписание матчей</h2>

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

   @media (max-width: 900px) {
      .team-box {
         width: 100%;
      }
   }
`

const StyledContainer = styled.div`
   margin: auto;
   background: white;
   border-radius: 8px;
   padding: 20px 75px;

   @media (max-width: 1024px) {
      padding: 95px 20px;

      .main-title {
         margin-bottom: 20px;
      }
   }

   @media (max-width: 900px) {
      .team-name {
         display: none;
      }
   }

   h2 {
      margin-top: 20px;
      color: green;
      font-size: 24px;
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

   @media (max-width: 768px) {
      padding: 10px;

      h2 {
         font-size: 20px;
      }

      .ant-table th,
      .ant-table td {
         font-size: 14px;
      }
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

   @media (max-width: 768px) {
      margin: 0;
   }

   @media (max-width: 768px) {
      img {
         width: 30px;
         height: 30px;
      }
   }
`

const Vs = styled.span`
   font-weight: bold;
   margin: 0 10px;
   color: green;

   @media (max-width: 768px) {
      font-size: 12px;
   }
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

   @media (max-width: 768px) {
      font-size: 14px;
   }
`

const Time = styled.span`
   color: #888;

   @media (max-width: 768px) {
      font-size: 12px;
   }
`

const League = styled.span`
   font-weight: bold;
   color: green;

   @media (max-width: 768px) {
      font-size: 14px;
   }
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
