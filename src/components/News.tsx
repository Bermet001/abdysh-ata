import styled from 'styled-components'
import { newsItems } from '../configs'
import { Flex } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import NewsCard from './UI/NewsCard'
import Button from './UI/Button'
import { useEffect, useState } from 'react'

const News = () => {
   const [visibleCount, setVisibleCount] = useState<number>(newsItems.length)

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth <= 1120) {
            setVisibleCount(6)
         } else {
            setVisibleCount(10)
         }
      }

      handleResize()
      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])
   return (
      <NewsContainer>
         <Flex justify="space-between" align="center">
            <h2 className="main-title">ПОСЛЕДНИЕ НОВОСТИ</h2>

            <Button type="primary">
               <NavLink to="/news">
                  Посмотреть все новости <RightOutlined />
               </NavLink>
            </Button>
         </Flex>

         <CardsContainer>
            {newsItems.slice(0, visibleCount).map((item) => (
               <NewsCard key={item.id} {...item} />
            ))}
         </CardsContainer>
      </NewsContainer>
   )
}

export default News

const NewsContainer = styled.div`
   padding: 120px 75px 0;
   max-width: 1600px;
   margin: 0 auto;

   @media (max-width: 1024px) {
      padding: 80px 50px;
   }

   @media (max-width: 768px) {
      padding: 60px 30px;
   }

   h2 {
      font-size: 40px;

      @media (max-width: 768px) {
         font-size: 28px;
      }

      @media (max-width: 480px) {
         font-size: 24px;
      }
   }
`

const CardsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(
      auto-fill,
      minmax(230px, 1fr)
   ); // Default grid layout
   gap: 16px;

   @media (max-width: 880px) {
      grid-template-columns: repeat(3, 1fr);
   }

   @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media (max-width: 480px) {
      grid-template-columns: 1fr;
   }
`
