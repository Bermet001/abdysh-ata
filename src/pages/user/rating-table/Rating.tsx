import { Flex, Table } from 'antd'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import type { ColumnsType } from 'antd/es/table'
import { getTeamsRating } from '../../../store/slice/rating/ratingThunk'

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
         title: 'Команда',
         dataIndex: 'team_title',
         key: 'team_title',
         render: (text: string, record: TeamData) => (
            <Flex
               className="first-block-box"
               style={{ width: '250px' }}
               align="center"
            >
               <img
                  src={record.team_logo}
                  alt={`${record.team_title} logo`}
                  style={{
                     width: '30px',
                     height: '30px',
                     marginRight: '10px',
                  }}
               />
               {text}
            </Flex>
         ),
      },
      {
         title: 'Игры',
         dataIndex: 'played',
         key: 'played',
         align: 'center',
      },
      {
         title: 'Победы',
         dataIndex: 'won',
         key: 'won',
         align: 'center',
      },
      {
         title: 'Ничьи',
         dataIndex: 'drawn',
         key: 'drawn',
         align: 'center',
      },
      {
         title: 'Поражения',
         dataIndex: 'lost',
         key: 'lost',
         align: 'center',
      },
      {
         title: 'Забито',
         dataIndex: 'goals_for',
         key: 'goals_for',
         align: 'center',
      },
      {
         title: 'Пропущено',
         dataIndex: 'goals_against',
         key: 'goals_against',
         align: 'center',
      },
      {
         title: 'Разница',
         dataIndex: 'goal_difference',
         key: 'goal_difference',
         align: 'center',
      },
      {
         title: 'Очки',
         dataIndex: 'points',
         key: 'points',
         align: 'center',
      },
      {
         title: 'Форма',
         dataIndex: 'form_list',
         key: 'form_list',
         align: 'center',
         render: (form: string[]) => (
            <Flex>
               {form.map((result: string, index: number) => {
                  let color = ''
                  switch (result) {
                     case 'W':
                        color = '#00a54a'
                        break
                     case 'L':
                        color = '#cd122c'
                        break
                     case 'D':
                        color = '#727272'
                        break
                     default:
                        color = '#727272'
                  }
                  return (
                     <span
                        key={index}
                        style={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           width: '18px',
                           height: '20px',
                           backgroundColor: color,
                           borderRadius: '5px',
                           marginRight: '5px',
                           textAlign: 'center',
                           color: 'white',
                           fontWeight: 'bold',
                           fontSize: '8px',
                        }}
                     >
                        {result}
                     </span>
                  )
               })}
            </Flex>
         ),
      },
   ]

   window.scrollTo(0, 0)

   const { teams } = useAppSelector((state) => state.rating)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getTeamsRating())
   }, [dispatch])

   const dataSource = teams.map((team) => ({
      ...team,
      key: team.id || team.team_title,
   }))

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

   background-color: #f0f3f7;

   @media (max-width: 1024px) {
      padding: 100px 20px;
   }

   @media (max-width: 480px) {
      padding: 100px 5px;
   }

   .table-container {
      background-color: #fff;
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

      .ant-table-tbody > tr > td {
         border: none;
         border-top: 1px solid #dadde9;
         font-size: 14px;

         @media (max-width: 768px) {
            font-size: 12px;
            max-width: 100%;
            padding: 10px;
         }
      }
   }
`
