import { Flex, Table } from 'antd'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import type { ColumnsType } from 'antd/es/table'
import { getTeamsRating } from '../../../store/slice/rating/ratingThunk'
import { useParams } from 'react-router-dom'
import background1 from '../../../assets/images/banner-rating.png'
import { getPartners } from '../../../store/slice/partners/partnersThunk'

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
         dataIndex: 'team_logo',
         key: 'team_logo',
         render: (record: string) => (
            <Flex align="center">
               <div style={{ background: 'transtapern', marginLeft: '10px' }}>
                  <img
                     src={record}
                     alt={`${record} logo`}
                     style={{
                        width: '40px',
                        maxHeight: '50px',
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
   const { partners } = useAppSelector((state) => state.partner)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getTeamsRating(slug))
      dispatch(getPartners())
   }, [dispatch, slug])

   const dataSource: TeamData[] =
      currentTeam?.tour_stats?.map((team) => ({
         ...team,
         key: Math.random(),
      })) || []

   return (
      <StyledContainer>
         <Flex className="partners" align="center">
            {partners?.slice(0, 3).map((item) => (
               <div className="partner" key={item.id}>
                  <img src={item.image} alt={item.title} width={70} />
               </div>
            ))}
         </Flex>
         <br />
         <Flex vertical className="table">
            <Flex align="center" vertical>
               <h1 className="main-title">Турнирная таблица</h1>
               <p className="sub-title">{slug}</p>
            </Flex>

            <div className="table-container">
               <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                  rowKey="id"
                  scroll={{ x: 1150 }}
               />
            </div>
         </Flex>
      </StyledContainer>
   )
}

export default Rating
const StyledContainer = styled.main`
   max-width: 1600px;
   padding: 100px 75px;
   background-image: url(${background1});
   background-size: cover;
   background-position: center;
   margin: 0 auto;
   background-repeat: no-repeat;

   @media (max-width: 1024px) {
      padding: 100px 20px;
   }

   @media (max-width: 480px) {
      padding: 100px 5px;
   }

   h1 {
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      margin-bottom: 20px;
   }

   .sub-title {
      color: white;
      font-size: 20px;
      font-weight: 300;
      background-color: #00a851;
      border-radius: 6px;
      padding: 10px;
   }

   .partner {
      background-color: rgba(255, 255, 255, 0.603);
      border-radius: 8px;
      padding: 10px;
      margin-right: 10px;
      display: inline-block;
      transition: filter 0.3s;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      height: 70px;
      display: flex;
      align-items: center;
   }

   .table-container {
      padding: 40px 20px;
      border-radius: 10px;

      @media (max-width: 900px) {
         h1 {
            margin-left: 10px;
         }
      }

      .ant-table-cell {
         color: white !important;
      }

      .table {
         width: 95%;
         margin: 0 auto;
      }

      .ant-table-thead > tr > th {
         background: transparent;
         font-size: 16px;
         margin: 10px 15px;
         color: black;
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

      td:nth-child(3) {
         /* background-color: white; */
         border-radius: 6px;

         & :hover {
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
      }
   }
`
