import styled from 'styled-components'
import { newsItems } from '../configs'
import { Button, Flex } from 'antd'
import { RightOutlined } from '@ant-design/icons'

const News = () => {
   return (
      <NewsContainer>
         <Flex justify="space-between">
            <h1 className="main-title">ПОСЛЕДНИЕ НОВОСТИ</h1>
            <StyledButton type="primary">
               Посмотреть все новости <RightOutlined />
            </StyledButton>
         </Flex>

         <CardsContainer>
            {newsItems.map((item) => (
               <NewsCard key={item.id}>
                  <NewsImage src={item.imageUrl} alt={item.title} />
                  <NewsContent>
                     <Category>{item.category}</Category>
                     <Title>{item.title}</Title>
                     <Date>{item.date}</Date>
                  </NewsContent>
               </NewsCard>
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

const NewsCard = styled.div`
   background: #fff;
   border-radius: 8px;
   overflow: hidden;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s;
   cursor: pointer;
   .ant-ribbon-wrapper {
      width: calc(25% - 20px);
   }
`

const NewsImage = styled.img`
   width: 100%;
   height: 150px;
   object-fit: cover;
   transition: transform 0.3s;
`

const NewsContent = styled.div`
   padding: 16px;
   transition: transform 0.3s;

   ${NewsCard}:hover & {
      transform: translateY(-6px);
   }
`

const Category = styled.p`
   font-size: 14px;
   color: #888;
`

const Title = styled.h3`
   font-size: 16px;
   margin: 8px 0;
   color: #333;
`

const Date = styled.p`
   font-size: 12px;
   color: #aaa;
`

const StyledButton = styled(Button)`
   padding: 23px 25px;
   border: none;
   color: white;
   border-radius: 8px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 500;

   svg {
      margin-left: 5px;
   }
`
