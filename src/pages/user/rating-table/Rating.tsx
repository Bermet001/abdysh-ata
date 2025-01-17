import { Flex, Table } from 'antd'
import { Key } from 'react'
import styled from 'styled-components'

interface TeamData {
   key: string
   team: string
   played: number
   won: number
   drawn: number
   lost: number
   for: number
   against: number
   goalDifference: number
   points: number
   form: string[]
}

const Rating = () => {
   const dataSource: TeamData[] = [
      {
         key: '1',
         team: 'Liverpool',
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

   const columns = [
      {
         title: 'Team',
         dataIndex: 'team',
         key: 'team',
         width: '200px',
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
         align: 'center',
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
            <h2>lkasjdf;laksjdflaskjdflak</h2>

            <Table
               dataSource={dataSource}
               columns={columns}
               pagination={false}
               scroll={{ x: 'max-content' }}
               style={{ width: '100%' }}
            />
         </Flex>
      </StyledContainer>
   )
}

export default Rating

const StyledContainer = styled.main`
   padding: 100px 75px;

   .table {
      border-radius: 6px;
      width: 90%;
      margin: 0 auto;
   }
`
