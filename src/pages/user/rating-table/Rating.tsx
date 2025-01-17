import { Flex, Table } from 'antd'
import { ColumnType } from 'antd/es/table'
import { Key } from 'react'
import styled from 'styled-components'

interface TeamData {
   key: string
   team: string
   logo: string
   won: number
   drawn: number
   lost: number
   for: number
   against: number
   goalDifference: number
   points: number
   form: string[]
   played: number
}

const Rating = () => {
   const dataSource: TeamData[] = [
      {
         key: '1',
         team: 'Liverpool',
         logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
         played: 6,
         won: 6,
         drawn: 0,
         lost: 0,
         for: 13,
         against: 1,
         goalDifference: 12,
         points: 18,
         form: ['red', 'grey', 'red', 'green'],
      },
      {
         key: '2',
         team: 'Barcelona',
         logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona.svg',
         played: 6,
         won: 5,
         drawn: 1,
         lost: 0,
         for: 21,
         against: 7,
         goalDifference: 14,
         points: 15,
         form: ['green', 'grey', 'red', 'green'],
      },
   ]

   const columns: ColumnType<TeamData>[] = [
      {
         title: 'Team',
         dataIndex: 'team',
         key: 'team',
         width: '250px',
         render: (text: string, record: TeamData) => (
            <Flex align="center">
               <img
                  src={record.logo}
                  alt={`${record.team} logo`}
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
               />
               {text}
            </Flex>
         ),
      },
      {
         title: 'Played',
         dataIndex: 'played',
         key: 'played',
         align: 'center',
      },
      {
         title: 'Won',
         dataIndex: 'won',
         key: 'won',
         align: 'center',
      },
      {
         title: 'Drawn',
         dataIndex: 'drawn',
         key: 'drawn',
         align: 'center',
      },
      {
         title: 'Lost',
         dataIndex: 'lost',
         key: 'lost',
         align: 'center',
      },
      {
         title: 'For',
         dataIndex: 'for',
         key: 'for',
         align: 'center',
      },
      {
         title: 'Against',
         dataIndex: 'against',
         key: 'against',
         align: 'center',
      },
      {
         title: 'Goal Difference',
         dataIndex: 'goalDifference',
         key: 'goalDifference',
         align: 'center',
      },
      {
         title: 'Points',
         dataIndex: 'points',
         key: 'points',
         align: 'center',
      },
      {
         title: 'Form',
         dataIndex: 'form',
         key: 'form',
         align: 'start',
         render: (form: string[]) => (
            <Flex>
               {form.map((color: string, index: Key) => (
                  <span
                     key={index}
                     style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        backgroundColor: color,
                        borderRadius: '50%',
                        marginRight: '5px',
                     }}
                  />
               ))}
            </Flex>
         ),
      },
   ]

   return (
      <StyledContainer>
         <Flex vertical className="table">
            <div className="table-container">
               <h2>Таблица рейтинга</h2>

               <br />
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

   .table-container {
      background-color: #fff;
      padding: 40px 20px;
      border-radius: 10px;

      .table {
         width: 95%;
         margin: 0 auto;
      }

      .ant-table-thead > tr > th {
         background: #fff;
         border-bottom: 1.1px solid #dadde9;
      }

      .ant-table-tbody > tr > td {
         border: none;
         border-top: 1px solid #dadde9;
      }
   }
`
