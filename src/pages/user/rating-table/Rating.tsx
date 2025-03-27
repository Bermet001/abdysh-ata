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
         render: (_text: string, _record: TeamData, index: number) => (
            <h3
               className="text-content"
               style={{
                  borderRadius: '6px',
                  padding: '10px 20px',
                  marginRight: '10px',
               }}
            >
               {index + 1}
            </h3>
         ),
      },

      {
         title: '',
         dataIndex: 'team_title',
         key: 'team_title',
         render: (record: TeamData) => (
            <Flex align="center">
               <div style={{ background: 'transtapern', marginRight: '15px' }}>
                  <img
                     src={record.team_logo}
                     alt={`${record.team_title} logo`}
                     style={{
                        padding: '5px',
                        width: '45px',
                        height: '50px',
                     }}
                  />
               </div>
            </Flex>
         ),
      },
      {
         title: '',
         dataIndex: 'team_title',
         key: 'team_title',
         render: (text: string) => (
            <h3
               style={{
                  width: '260px',
                  borderRadius: '6px 0 0 6px',
               }}
               className="text-content"
            >
               {text}
            </h3>
         ),
      },
      {
         title: 'И',
         dataIndex: 'played',
         key: 'played',
         align: 'center',
         render: (text: string) => <h3 className="text-content">{text}</h3>,
      },
      {
         title: 'В',
         dataIndex: 'won',
         key: 'won',
         align: 'center',
         render: (text: string) => <h3 className="text-content">{text}</h3>,
      },
      {
         title: 'Н',
         dataIndex: 'drawn',
         key: 'drawn',
         align: 'center',
         render: (text: string) => <h3 className="text-content">{text}</h3>,
      },
      {
         title: 'П',
         dataIndex: 'lost',
         key: 'lost',
         align: 'center',
         render: (text: string) => <h3 className="text-content">{text}</h3>,
      },
      {
         title: 'З-П',
         dataIndex: 'goals_for',
         key: 'goals_for',
         align: 'center',
         render: (text: string) => <h3 className="text-content">{text}</h3>,
      },
      {
         title: 'ПП',
         dataIndex: 'goals_against',
         key: 'goals_against',
         align: 'center',
         render: (text: string) => <h3 className="text-content">{text}</h3>,
      },
      {
         title: '+/-',
         dataIndex: 'goal_difference',
         key: 'goal_difference',
         align: 'center',
         render: (text: string) => <h3 className="text-content">{text}</h3>,
      },
      {
         title: '0',
         dataIndex: 'points',
         key: 'points',
         align: 'center',
         render: (text: string) => (
            <h3
               className="text-content"
               style={{
                  borderRadius: '0 6px 6px 0',
               }}
            >
               {text}
            </h3>
         ),
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
   background: linear-gradient(to bottom, #23a356, #18191b);
   font-family: 'Roboto Condensed', serif;

   @media (max-width: 1024px) {
      padding: 100px 20px;
   }

   @media (max-width: 480px) {
      padding: 100px 5px;
   }

   .table-container {
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
         background: transparent;
         font-size: 16px;
         margin: 10px 15px;
         color: white;
         border: none;

         &::before {
            width: 0 !important;
         }
         @media (max-width: 768px) {
            font-size: 12px;
         }
      }

      .ant-table-tbody,
      .ant-table {
         background-color: transparent !important;
      }

      .ant-table-tbody > tr {
         padding: 10px;
      }

      .ant-table-tbody > tr > td {
         border: none;
         font-size: 14px;
         margin: 10px;
         padding: 0;
         transition: background-color 0.3s ease;

         @media (max-width: 768px) {
            font-size: 12px;
            max-width: 100%;
            padding: 10px;
         }
      }

      .ant-table-tbody > tr .text-content {
         background: white;
         padding: 10px 25px;
         font-weight: 500;
         transition: background-color 0.3s ease;
      }

      .table-container .ant-table-tbody > tr:hover {
         background-color: transparent !important;
         border-radius: 6px !important;
      }

      .ant-table-cell-row-hover {
         background-color: transparent !important;
         border-radius: 6px !important;
      }
      .ant-table-tbody > tr:hover .text-content {
         background: #00a851;
         color: white !important;
         background-color: #e0e0e0 !important;
      }
   }
`
