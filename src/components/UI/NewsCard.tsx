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
   display: flex;
   flex-direction: column; // Ensure vertical layout

   &:hover {
      transform: translateY(-5px); // Subtle hover effect
   }
`

const NewsImage = styled.img`
   width: 100%;
   height: 150px;
   object-fit: cover;
   transition: transform 0.3s;

   ${StyledNewsCard}:hover & {
      transform: scale(1.05); // Slight zoom effect on hover
   }

   @media (max-width: 768px) {
      height: 120px;
   }

   @media (max-width: 480px) {
      height: 100px;
   }
`

const NewsContent = styled.div`
   padding: 16px;

   @media (max-width: 768px) {
      padding: 12px;
   }

   @media (max-width: 480px) {
      padding: 8px;
   }
`

const Category = styled.p`
   font-size: 14px;
   color: #888;

   @media (max-width: 768px) {
      font-size: 12px;
   }

   @media (max-width: 480px) {
      font-size: 11px;
   }
`

const Title = styled.h3`
   font-size: 16px;
   margin: 8px 0;
   color: #333;

   @media (max-width: 768px) {
      font-size: 14px;
   }

   @media (max-width: 480px) {
      font-size: 12px;
   }
`

const Date = styled.p`
   font-size: 12px;
   color: #aaa;

   @media (max-width: 768px) {
      font-size: 10px;
   }

   @media (max-width: 480px) {
      font-size: 9px;
   }
`
