import { FC, useEffect } from 'react'
import { Tabs } from 'antd'
import Team from './Team'
import Сoaches from '../coach/Coaches'
import styled from 'styled-components'
import { getTeam } from '../../../store/slice/team/teamThunk'
import { useAppDispatch } from '../../../store/store'
import { useParams } from 'react-router-dom'
import type { TabsProps } from 'antd'
import { Helmet } from 'react-helmet-async'
// import Academy from '../../../components/academy/Academy'
import Guideline from '../guideline/Guideline'
import TournamentAcademy from '../TournamentAcademy'

const TeamWrapper: FC = () => {
   window.scrollTo(0, 0)
   const { slug } = useParams<{ slug: string }>()

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getTeam(slug))
   }, [dispatch, slug])

   const baseItems: TabsProps['items'] = [
      ...(slug !== 'futbolnaya-akademiya'
         ? [
              {
                 key: '1',
                 label: 'Команда',
                 children: <Team />,
              },
           ]
         : []),
      {
         key: '2',
         label: 'Тренерский штаб',
         children: <Сoaches />,
      },
   ]

   if (slug === 'futbolnaya-akademiya') {
      baseItems.push(
         {
            key: '3',
            label: 'Руководство',
            children: <Guideline />,
         },
         {
            key: '4',
            label: 'Турниры',
            children: <TournamentAcademy />,
         }
      )
   }

   return (
      <>
         <Helmet>
            <title>Команда Абдыш ата</title>
            <meta
               name="description"
               content="Узнайте о команде Абдыш ата, их достижениях и тренерском штабе."
            />
            <meta
               name="keywords"
               content="команда, тренерский штаб, Абдыш ата"
            />
            <meta property="og:title" content="Команда Абдыш ата" />
            <meta
               property="og:description"
               content="Все о команде Абдыш ата."
            />
            <meta property="og:type" content="website" />
            <meta
               property="og:url"
               content={`http://mysite.com/team/${slug}`}
            />
         </Helmet>
         <StyledContainer slug={slug}>
            <Tabs defaultActiveKey="1" items={baseItems} />
         </StyledContainer>
      </>
   )
}

export default TeamWrapper

const StyledContainer = styled.main<{ slug?: string }>`
   margin: 0 auto;
   margin-top: ${({ slug }) =>
      slug === 'futbolnaya-akademiya' ? '60px' : '50px'};
   margin-bottom: 80px;

   .ant-tabs-nav {
      padding: 0 35px;

      @media (max-width: 1024px) {
         padding: 0 30px;
      }
   }
   max-width: 1600px;

   @media (max-width: 768px) {
      margin-top: 50px;
   }

   .ant-tabs-tab {
      width: 100%;
      border-radius: 3px 3px 0 0 !important;
   }
`
