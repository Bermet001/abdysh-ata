import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface IProps {
   id: number
   imageUrl: string
   title: string
   category: string
   date: string
}

const NewsCard: FC<IProps> = ({ id, imageUrl, title, category, date }) => {
   return (
      <StyledNewsCard key={id}>
         <NavLink to={`news/${id}`}>
            <NewsImage src={imageUrl} alt={title} />
            <NewsContent>
               <Category>{category}</Category>
               <Title>{title}</Title>
               <Date>{date}</Date>
            </NewsContent>
         </NavLink>
      </StyledNewsCard>
   )
}

export default NewsCard

const StyledNewsCard = styled.div`
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

   ${StyledNewsCard}:hover & {
      transform: translateY(-20px);
   }
`

const NewsContent = styled.div`
   padding: 16px;
   transition: transform 0.3s;

   ${StyledNewsCard}:hover & {
      transform: translateY(-15px);
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
