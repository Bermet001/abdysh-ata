import { FC, useState } from 'react'
import styled from 'styled-components'
import { newsItems } from '../../configs'
import { NavLink } from 'react-router-dom'
import { Pagination as AntPagination, Flex, Select } from 'antd'
import { Input } from 'antd'
import { SearchProps } from 'antd/es/input'

interface NewsItem {
   id: number
   imageUrl: string
   title: string
   category: string
   date: string
}

const { Search } = Input

const NewsPage: FC = () => {
   window.scrollTo(0, 0)

   const [currentPage, setCurrentPage] = useState(1)
   const itemsPerPage = 10

   const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
      console.log(info?.source, value)

   const startIndex = (currentPage - 1) * itemsPerPage
   const endIndex = startIndex + itemsPerPage
   const currentItems = newsItems.slice(startIndex, endIndex) as NewsItem[]

   const onPageChange = (page: number) => setCurrentPage(page)

   const handleChange = (value: string) => console.log(`selected ${value}`)

   return (
      <NewsContainer>
         <Flex gap={20} vertical align="stretch">
            <Flex className="sort-box" gap={16}>
               <StyledInput
                  placeholder="Поиск новостей"
                  allowClear
                  onSearch={onSearch}
                  style={{ flex: 1 }}
                  size="large"
               />

               <Select
                  defaultValue="lucy"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  className="select"
                  options={[
                     { value: 'jack', label: 'Jack' },
                     { value: 'lucy', label: 'Lucy' },
                     { value: 'Yiminghe', label: 'yiminghe' },
                     { value: 'disabled' },
                  ]}
               />
            </Flex>

            <CardsContainer>
               {currentItems.map((item) => (
                  <NewsCard key={item.id}>
                     <NavLink to={`/news/${item.id}`}>
                        <NewsImage src={item.imageUrl} alt={item.title} />
                        <NewsContent>
                           <Category>{item.category}</Category>
                           <Title>{item.title}</Title>
                           <Date>{item.date}</Date>
                        </NewsContent>
                     </NavLink>
                  </NewsCard>
               ))}
            </CardsContainer>

            <StyledPagination
               current={currentPage}
               total={newsItems.length}
               pageSize={itemsPerPage}
               onChange={onPageChange}
               showSizeChanger={false}
            />
         </Flex>
      </NewsContainer>
   )
}

export default NewsPage

const NewsContainer = styled.main`
   padding: 120px 5%;
   max-width: 1600px;
   margin: 0 auto;
   margin-bottom: 40px;
   min-height: 700px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   .ant-select {
      width: 250px !important;
      height: 40px !important;
   }
   .select {
      > .ant-select-selector {
         .ant-select-selection-item {
            font-size: 17px;
            color: white;
         }
      }

      .ant-select-arrow .anticon > svg {
         fill: white;
      }
   }

   @media (max-width: 1024px) {
      padding: 80px 20px 50px;
   }

   @media (max-width: 800px) {
      .sort-box {
         flex-direction: column-reverse !important;
      }

      .ant-picker-outlined {
         max-width: 400px;
      }
   }
   @media (max-width: 400px) {
      .ant-picker-outlined {
         max-width: 100%;
      }
   }
`

const CardsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
   gap: 16px;
   margin-top: 30px;

   @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   }
`

const NewsCard = styled.div`
   background: #fff;
   border-radius: 8px;
   overflow: hidden;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s;
   cursor: pointer;

   &:hover {
      transform: translateY(-5px);
   }
`

const NewsImage = styled.img`
   width: 100%;
   height: 150px;
   object-fit: cover;
   transition: transform 0.3s;

   ${NewsCard}:hover & {
      transform: translateY(-20px);
   }
`

const NewsContent = styled.div`
   padding: 16px;
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

const StyledPagination = styled(AntPagination)`
   display: flex;
   justify-content: center;
   margin-top: 20px;

   .ant-pagination-item {
      border-color: #04a54f;
      border-radius: 6px;

      &:hover {
         border-color: #04a54f;
      }
   }

   .ant-pagination-item-active {
      background-color: #04a54f;
      border-color: #04a54f;

      a {
         color: white;

         &:hover {
            color: white !important;
         }
      }
   }
`

const StyledInput = styled(Search)`
   flex: 1;

   .ant-input-affix-wrapper {
      border-radius: 6px;
   }

   & button:hover {
      transform: translateY(0);
   }
`
