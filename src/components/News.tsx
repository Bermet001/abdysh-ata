import styled from 'styled-components'
import { Flex } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import NewsCard from './UI/NewsCard'
import Button from './UI/Button'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { NEWS_THUNK } from '../store/slice/news/newsThunk'

const News = () => {
   const { news } = useAppSelector((state) => state.news)
   const [visibleCount, setVisibleCount] = useState<number>(news?.length)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(NEWS_THUNK.getNews())
   }, [dispatch])

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth <= 600) {
            setVisibleCount(6)
         } else if (window.innerWidth <= 900) {
            setVisibleCount(6)
         } else {
            setVisibleCount(10)
         }
      }

      handleResize()
      window.addEventListener('resize', handleResize, { passive: true })

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   return (
      <NewsContainer>
         <Flex justify="space-between">
            <h2 className="main-title">ПОСЛЕДНИЕ НОВОСТИ</h2>

            <Button type="primary">
               <NavLink to="/news">
                  Посмотреть все новости <RightOutlined />
               </NavLink>
            </Button>
         </Flex>

         <CardsContainer>
            {news?.slice(0, visibleCount).map((item) => (
               <NewsCard key={item.id} {...item} />
            ))}
         </CardsContainer>
      </NewsContainer>
   )
}

export default News

const NewsContainer = styled.section`
   padding: 120px 75px 0;
   max-width: 1600px;
   margin: 0 auto;

   @media (max-width: 1024px) {
      padding: 60px 20px;
   }

   @media (max-width: 768px) {
      padding: 60px 30px;
   }

   @media (max-width: 480px) {
      padding: 50px 20px;
   }

   h2 {
      /* font-size: 40px;
      margin-bottom: 40px; */

      /* @media (max-width: 768px) {
         font-size: 28px;
         text-align: center;
      }

      @media (max-width: 480px) {
         font-size: 24px;
      } */
   }
`

const CardsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
   gap: 16px;

   @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
   }

   @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
   }
`
