import styled from 'styled-components'
import { Table, Button } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import {
   getAllMatches,
   getMatchBanner,
} from '../../../store/slice/matches/matchesThunk'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

interface Team {
   id: number
   title: string
   slug: string
   is_our_team: boolean
   logo: string
}

interface League {
   id: number
   title: string
   image: string
}

interface Match {
   id: number
   title: string
   slug: string
   home_team: Team
   away_team: Team
   home_score: number
   away_score: number
   date: string
   location: string
   status: string
   status_display: string
   stream_link: string | null
   liga: League
}

const SchedulMatches = () => {
   window.scrollTo(0, 0)
   const { allMatches, banner } = useAppSelector((state) => state.matches)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getAllMatches())
      dispatch(getMatchBanner())
   }, [dispatch])

   const columns = [
      {
         title: 'Дата',
         dataIndex: 'date',
         key: 'date',
         render: (_text: string, record: Match) => (
            <DateTimeWrapper>
               <StyledDate>
                  {new Date(record?.date).toLocaleDateString('ky-KG')}
               </StyledDate>
               <StyledTime>
                  {new Date(record?.date).toLocaleTimeString([], {
                     hour: '2-digit',
                     minute: '2-digit',
                  })}
               </StyledTime>
            </DateTimeWrapper>
         ),
      },
      {
         title: 'Лига',
         dataIndex: 'liga',
         key: 'liga',
         render: (liga: League) => <League>{liga?.title}</League>,
      },
      {
         title: 'Команды',
         key: 'teams',
         render: (record: Match) => (
            <TeamsWrapper>
               <TeamWrapper className="team-box">
                  <span className="team-name">{record?.home_team?.title}</span>
                  <img
                     src={record.home_team?.logo}
                     alt={record.home_team?.title}
                  />
               </TeamWrapper>

               <Vs>vs</Vs>

               <TeamWrapper className="team-box">
                  <img
                     src={record.away_team?.logo}
                     alt={record.away_team?.title}
                  />
                  <span className="team-name">{record?.away_team?.title}</span>
               </TeamWrapper>
            </TeamsWrapper>
         ),
      },
      {
         title: 'Действие',
         key: 'action',
         render: (record: Match) => (
            <Button type="primary">
               <NavLink to={`${record?.slug}`}>Смотреть</NavLink>
            </Button>
         ),
      },
   ]

   const bannerImage = banner[0]?.image || ''

   return (
      <StyledMainContainer>
         <Helmet>
            <title>Расписание матчей FC Абдыш ата</title>
            <meta
               name="description"
               content="Просмотрите расписание матчей FC Абдыш ата. Узнайте, когда и против кого играет команда."
            />
            <meta
               name="keywords"
               content="расписание матчей, FC Абдыш ата, футбол"
            />
            <meta name="author" content="Абдыш ата" />
            <link rel="canonical" href="http://mysite.com/schedule" />
         </Helmet>

         <div className="main-container">
            <Overlay />
            <img
               style={{ objectFit: 'cover' }}
               width="100%"
               className="image-background"
               height={400}
               src={bannerImage}
            />
         </div>

         <StyledContainer>
            <h1 className="main-title">Расписание матчей</h1>

            <Table
               columns={columns}
               dataSource={allMatches?.map((match) => ({
                  ...match,
                  key: match.id,
               }))}
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
   max-width: 1600px;
   margin: 0 auto;

   .main-container {
      position: relative;
      margin-top: 55px;
   }

   .image-background {
      object-fit: cover;
   }

   .team-box {
      display: flex;
      width: 190px;
   }

   .team-box:first-child {
      display: flex;
      justify-content: end;
      gap: 5px;
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

   h1 {
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

      h1 {
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
      object-fit: contain;
      margin-right: 10px;
   }

   @media (max-width: 768px) {
      margin: 0;
   }

   @media (max-width: 768px) {
      img {
         width: 27px;
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

const DateTimeWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

const StyledDate = styled.span`
   font-weight: bold;
   font-size: 16px;
   color: #333;

   @media (max-width: 768px) {
      font-size: 14px;
   }
`

const StyledTime = styled.span`
   color: #888;

   @media (max-width: 768px) {
      font-size: 12px;
   }
`
