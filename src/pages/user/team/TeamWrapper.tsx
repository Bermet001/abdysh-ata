import React from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import Team from './Team'
import Сoaches from '../coach/Сoaches'
import styled from 'styled-components'

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

const TeamWrapper: React.FC = () => (
   <StyledContainer>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
   </StyledContainer>
)

export default TeamWrapper

const StyledContainer = styled.section`
   margin-top: 100px;
   margin-bottom: 80px;
   padding: 0 75px;

   .ant-tabs-nav-list {
      /* width: 100%; */
   }

   .ant-tabs-nav-wrap {
      /* height: 100%; */
      /* width: 100%; */

      .ant-tabs-tab {
         width: 100%;
         border-radius: 3px 3px 0 0 !important;
         /* border: 1px solid #d2d1d1 !important; */
      }
   }

   .ant-tabs-tab-active {
      /* background-color: #eaeaea !important; */
      /* border-bottom-color: #d2d1d1 !important; */
   }
`
