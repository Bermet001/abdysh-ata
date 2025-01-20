import styled from 'styled-components'
import { newsItems } from '../configs'
import { Flex } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import NewsCard from './UI/NewsCard'
import Button from './UI/Button'

const News = () => {
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
            {newsItems.slice(0, 10).map((item) => (
               <NewsCard {...item} />
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
`

const CardsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
   gap: 16px;
`
