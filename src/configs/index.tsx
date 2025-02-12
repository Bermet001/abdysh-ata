import { Key } from 'react'
import { Flex } from 'antd'
import barcelonaLogo from '../assets/images/barselona.png'
import benficaLogo from '../assets/images/barselona.png'
import sportingLogo from '../assets/images/match.jpg'

interface TeamData {
   key: string
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

const columns = [
   {
      title: 'Команда',
      dataIndex: 'team_logo',
      key: 'team_logo',

      render: (text: string, record: TeamData) => {
         console.log(record, 'fjsadhfjak')

         return (
            <Flex
               className="first-block-box"
               style={{ width: '250px' }}
               align="center"
            >
               <img
                  src={record.team_logo}
                  alt={`${record.team_title} logo`}
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
               />
               {text}
            </Flex>
         )
      },
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

export { columns, data }
