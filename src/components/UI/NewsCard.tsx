import { Popover } from 'antd'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface IProps {
   id: number | null
   image: string
   title: string
   category: {
      id: number | null
      title: string
      slug: string
   }
   date: string
   slug: string
}

const NewsCard: FC<IProps> = ({ slug, id, image, title, category, date }) => (
   <StyledNewsCard key={id}>
      <NavLink to={`/news/${slug}`}>
         <NewsImage
            loading="lazy"
            width="100%"
            height="150px"
            src={image}
            alt={title}
         />
         <NewsContent>
            <Category>{category.title}</Category>
            <Popover
               placement="bottom"
               content={<PopoverContent>{title}</PopoverContent>}
               trigger="hover"
            >
               <Title>{title}</Title>
            </Popover>
            <Date>{date}</Date>
         </NewsContent>
      </NavLink>
   </StyledNewsCard>
)

export default NewsCard

const StyledNewsCard = styled.div`
   background: #fff;
   border-radius: 8px;
   overflow: hidden;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s;
   cursor: pointer;
   display: flex;
   flex-direction: column;

   &:hover {
      transform: translateY(-5px);
   }

   @media (max-width: 480px) {
      border-radius: 5px;
   }
`

const NewsImage = styled.img`
   height: 150px;
   object-fit: cover;
   transition: transform 0.3s;

   ${StyledNewsCard}:hover & {
      transform: scale(1.05);
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
      font-size: 9px;
   }
`

const Title = styled.h3`
   font-size: 16px;
   margin: 8px 0;
   color: #333;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   max-height: 20px;

   @media (max-width: 768px) {
      font-size: 14px;
   }

   @media (max-width: 480px) {
      font-size: 10px;
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

const PopoverContent = styled.div`
   max-width: 200px;
   text-transform: lowercase;
`
