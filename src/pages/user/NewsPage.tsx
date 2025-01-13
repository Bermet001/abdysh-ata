import { FC, useState } from 'react'
import styled from 'styled-components'
import { newsItems } from '../../configs/index'
import { NavLink } from 'react-router-dom'
import { Pagination as AntPagination, Flex } from 'antd'
import { DatePicker } from 'antd'
import type { DatePickerProps, GetProps } from 'antd'
import { Input } from 'antd'
import { SearchProps } from 'antd/es/input'

interface NewsItem {
   id: number
   imageUrl: string
   title: string
   category: string
   date: string
}

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>

const { RangePicker } = DatePicker

const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
   console.log('onOk: ', value)
}

const { Search } = Input

const NewsPage: FC = () => {
   const [currentPage, setCurrentPage] = useState(1)
   const itemsPerPage = 10

   window.scrollTo({
      top: 100,
   })
   const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
      console.log(info?.source, value)

   const startIndex = (currentPage - 1) * itemsPerPage
   const endIndex = startIndex + itemsPerPage
   const currentItems = newsItems.slice(startIndex, endIndex) as NewsItem[]

   const onPageChange = (page: number) => setCurrentPage(page)

   return (
      <NewsContainer>
         <Flex gap={250}>
            <StyledInput
               placeholder="Поиск новостей"
               allowClear
               onSearch={onSearch}
               style={{ width: '100%', borderRadius: '6px' }}
               size="large"
            />

            <RangePicker
               showTime={{ format: 'HH:mm' }}
               format="YYYY-MM-DD HH:mm"
               onChange={(value, dateString) => {
                  console.log('Selected Time: ', value)
                  console.log('Formatted Selected Time: ', dateString)
               }}
               onOk={onOk}
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
      </NewsContainer>
   )
}

export default NewsPage

const NewsContainer = styled.div`
   padding: 120px 75px 0;
   max-width: 1600px;
   margin: 0 auto;
   margin-bottom: 40px;
   min-height: 700px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const CardsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
   gap: 16px;
   margin-top: 30px;
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

   ${NewsCard}:hover & {
      transform: translateY(-20px);
   }
`

const NewsContent = styled.div`
   padding: 16px;
   transition: transform 0.3s;

   ${NewsCard}:hover & {
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

const StyledPagination = styled(AntPagination)`
   display: flex;
   justify-content: center;
   align-items: end;
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
   .ant-input-affix-wrapper {
      border-start-start-radius: 6px;
      border-end-start-radius: 6px;
   }

   & button:hover {
      transform: translateY(0);
   }
`
