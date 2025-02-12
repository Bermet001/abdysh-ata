import { FC, useEffect } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import Team from './Team'
import Сoaches from '../coach/Coaches'
import styled from 'styled-components'
import { getTeam } from '../../../store/slice/team/teamThunk'
import { useAppDispatch } from '../../../store/store'
import { useParams } from 'react-router-dom'

const onChange = (key: string) => console.log(key)

const items: TabsProps['items'] = [
   {
      key: '1',
      label: 'Команда',
      children: <Team />,
   },
   {
      key: '2',
      label: 'Тренерский штаб',
      children: <Сoaches />,
   },
]

const TeamWrapper: FC = () => {
   window.scrollTo(0, 0)
   const { slug } = useParams<{ slug: string }>()

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getTeam(slug))
   }, [dispatch, slug])

   return (
      <StyledContainer>
         <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </StyledContainer>
   )
}

export default TeamWrapper

const StyledContainer = styled.main`
   margin: 0 auto;
   margin-top: 80px;
   margin-bottom: 80px;
   padding: 0 75px;
   max-width: 1600px;

   @media (max-width: 1024px) {
      padding: 0 30px;
   }

   @media (max-width: 768px) {
      margin-top: 50px;
   }

   .ant-tabs-tab {
      width: 100%;
      border-radius: 3px 3px 0 0 !important;
   }
`
