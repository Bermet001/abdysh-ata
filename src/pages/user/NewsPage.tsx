import { ChangeEvent, FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Pagination as AntPagination, Flex, Select } from 'antd'
import { Input } from 'antd'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { NEWS_THUNK } from '../../store/slice/news/newsThunk'
import NewsCard from '../../components/UI/NewsCard'
import { Helmet } from 'react-helmet-async'

const { Search } = Input

const NewsPage: FC = () => {
   window.scrollTo(0, 0)
   const { allNews, categories, total_page } = useAppSelector(
      (state) => state.news
   )
   const [currentPage, setCurrentPage] = useState<number>(1)
   const [search, setSearch] = useState<string>('')
   const dispatch = useAppDispatch()
   const itemsPerPage = 10

   useEffect(() => {
      dispatch(NEWS_THUNK.getNewsPageItem({ itemsPerPage, page: currentPage }))
      dispatch(NEWS_THUNK.allCategories())
   }, [currentPage, itemsPerPage, dispatch])

   const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(NEWS_THUNK.searchNew(e.target.value))
      setSearch(e.target.value)
   }

   const onPageChange = (page: number) => setCurrentPage(page)

   const handleChange = (value: string | unknown) =>
      dispatch(NEWS_THUNK.getCategorizedNew(value))

   return (
      <>
         <Helmet>
            <title>Новости</title>
            <meta
               name="description"
               content="Последние новости и события. Узнайте больше о текущих событиях и обновлениях в мире."
            />
            <meta
               name="keywords"
               content="новости, события, актуальные новости"
            />
            <meta name="author" content="Абдыш ата" />
         </Helmet>

         <NewsContainer>
            <Flex gap={20} vertical align="stretch">
               <Flex className="sort-box" gap={16}>
                  <StyledInput
                     placeholder="Поиск новостей"
                     allowClear
                     value={search}
                     onChange={onSearch}
                     style={{ flex: 1 }}
                     size="large"
                  />

                  <Select
                     defaultValue="Категории"
                     style={{ width: 120 }}
                     onChange={handleChange}
                     className="select"
                     options={categories.map((category) => ({
                        value: category.title,
                        label: category.title,
                     }))}
                  />
               </Flex>

               <CardsContainer>
                  {allNews?.map((item) => (
                     <NewsCard key={item.id} {...item} />
                  ))}
               </CardsContainer>

               <StyledPagination
                  current={currentPage}
                  total={total_page}
                  pageSize={itemsPerPage}
                  onChange={onPageChange}
                  showSizeChanger={false}
               />
            </Flex>
         </NewsContainer>
      </>
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
