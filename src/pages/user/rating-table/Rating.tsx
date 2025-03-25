import { Flex, Table } from 'antd'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import type { ColumnsType } from 'antd/es/table'
import { getTeamsRating } from '../../../store/slice/rating/ratingThunk'
import { useParams } from 'react-router-dom'

interface TeamData {
   key: string | number
   team_title: string
   team_logo: string
   won: number
   drawn: number
   lost: number
   goals_for: number
   goals_against: number
   goal_difference: number
   points: number
   form_list: string[]
   played: number
}

const Rating = () => {
   const columns: ColumnsType<TeamData> = [
      {
         title: '',
         dataIndex: 'index',
         key: 'index',
         align: 'center',
         render: (text: string, record: TeamData, index: number) => index + 1,
      },

      {
         title: '',
         dataIndex: 'team_title',
         key: 'team_title',
         render: (text: string, record: TeamData) => (
            <Flex
               className="first-block-box"
               style={{ width: '260px', borderRadius: '10px' }}
               align="center"
            >
               <div
                  style={{
                     background: '#217c3d',
                     padding: '10px',
                     borderRadius: '10px',
                  }}
               >
                  <img
                     src={record.team_logo}
                     alt={`${record.team_title} logo`}
                     style={{
                        width: '30px',
                        height: '35px',
                        borderRadius: '10px',
                     }}
                  />
               </div>
               <p style={{ borderRadius: '10px', background: '#217c3d' }}>
                  {text}
               </p>
            </Flex>
         ),
      },
      {
         title: 'И',
         dataIndex: 'played',
         key: 'played',
         align: 'center',
      },
      {
         title: 'В',
         dataIndex: 'won',
         key: 'won',
         align: 'center',
      },
      {
         title: 'Н',
         dataIndex: 'drawn',
         key: 'drawn',
         align: 'center',
      },
      {
         title: 'П',
         dataIndex: 'lost',
         key: 'lost',
         align: 'center',
      },
      {
         title: 'З-П',
         dataIndex: 'goals_for',
         key: 'goals_for',
         align: 'center',
      },
      {
         title: 'ПП',
         dataIndex: 'goals_against',
         key: 'goals_against',
         align: 'center',
      },
      {
         title: '+/-',
         dataIndex: 'goal_difference',
         key: 'goal_difference',
         align: 'center',
      },
      {
         title: '0',
         dataIndex: 'points',
         key: 'points',
         align: 'center',
      },
   ]

   const { slug } = useParams<{ slug: string }>()

   window.scrollTo(0, 0)

   const { currentTeam } = useAppSelector((state) => state.rating)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getTeamsRating(slug))
   }, [dispatch, slug])

   const dataSource: TeamData[] =
      currentTeam?.tour_stats?.map((team) => ({
         ...team,
         key: Math.random(),
      })) || []

   return (
      <StyledContainer>
         <Flex vertical className="table">
            <div className="table-container">
               <h1>Таблица рейтинга</h1>

               <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                  scroll={{ x: 'max-content' }}
                  style={{
                     width: '100%',
                  }}
               />
            </div>
         </Flex>
      </StyledContainer>
   )
}

export default Rating

const StyledContainer = styled.main`
   padding: 100px 75px;
   background: #217c3d;
   font-family: 'Roboto Condensed', sans-serif !important;

   /* background-color: #f0f3f7; */

   @media (max-width: 1024px) {
      padding: 100px 20px;
   }

   @media (max-width: 480px) {
      padding: 100px 5px;
   }

   .table-container {
      /* background-color: #fff; */
      background: #217c3d;
      padding: 40px 20px;
      max-width: 1600px;
      margin: 0 auto;
      border-radius: 10px;

      @media (max-width: 900px) {
         h1 {
            margin-left: 10px;
         }
      }

      .table {
         width: 95%;
         margin: 0 auto;
      }

      .ant-table-thead > tr > th {
         background: #fff;
         border-bottom: 1.1px solid #dadde9;
         font-size: 16px;

         @media (max-width: 768px) {
            font-size: 12px;
         }
      }

      .ant-table-tbody,
      .ant-table {
         background-color: #217c3d !important;
      }
      .ant-table-tbody > tr {
         padding: 10px;
      }
      .ant-table-tbody > tr > td {
         border: none;
         background-color: white;
         border-top: 1px solid #dadde9;
         font-size: 14px;
         margin: 10px;
         padding: 0;
         border-radius: 10px;

         @media (max-width: 768px) {
            font-size: 12px;
            max-width: 100%;
            padding: 10px;
         }
      }
   }
`
