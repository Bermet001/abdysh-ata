import { useEffect } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Flex, Button as AntdButton, Skeleton } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import Button from './UI/Button'
import { useAppDispatch, useAppSelector } from '../store/store'
import { PRODUCT_THUNK } from '../store/slice/shop/shopThunk'

const ProductSlider = () => {
   const { products, isLoading } = useAppSelector((state) => state.shop)
   const { contacts } = useAppSelector((state) => state.contacts)
   const contact = contacts?.length > 0 ? contacts[0] : null
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(PRODUCT_THUNK.getProducts())
   }, [dispatch])
   return (
      <div
         style={{
            background: 'linear-gradient(to top, #e2e2e2, transparent 98%)',
         }}
      >
         <Container>
            <Flex gap={10} justify="space-between" align="start">
               <h2 className="main-title">НАШ ОНЛАЙН МАГАЗИН</h2>
               <NavLink to="/shop">
                  <Button type="primary">
                     Посмотреть все товары <RightOutlined />
                  </Button>
               </NavLink>
            </Flex>
            <Swiper
               spaceBetween={10}
               breakpoints={{
                  200: { slidesPerView: 2 },
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1440: { slidesPerView: 5 },
               }}
            >
               {isLoading
                  ? [...Array(5)].map((_, index) => (
                       <SwiperSlide key={index}>
                          <Skeleton active />
                       </SwiperSlide>
                    ))
                  : products?.map((product) => {
                       const message = `Хотела бы узнать подробнее о ${product.title}.`
                       const encodedMessage = encodeURIComponent(message)
                       return (
                          <SwiperSlide key={product?.id}>
                             <StyledCard
                                cover={
                                   <img
                                      loading="lazy"
                                      alt={product?.title}
                                      src={product?.image}
                                   />
                                }
                             >
                                <NavLink to={`/shop/${product?.slug}`}>
                                   <Card.Meta
                                      title={product?.title}
                                      description={`${product?.price} сом`}
                                   />
                                </NavLink>
                                <a
                                   href={`https://wa.me/${contact?.whatsapp}?text=${encodedMessage}`}
                                   aria-label="перейти в чат"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >
                                   <StyledButton type="primary">
                                      Оформить заказ
                                   </StyledButton>
                                </a>
                             </StyledCard>
                          </SwiperSlide>
                       )
                    })}
            </Swiper>
         </Container>
      </div>
   )
}

export default ProductSlider

const Container = styled.section`
   margin: auto;
   padding: 120px 75px 0 75px;
   max-width: 1600px;
   min-height: 600px;
   @media (max-width: 1024px) {
      padding: 60px 20px 0;
      min-height: 500px;
   }
   @media (max-width: 600px) {
      min-height: 400px;
      padding: 30px 20px 0;
   }
`
const StyledCard = styled(Card)`
   border-radius: 10px;
   transition: transform 0.3s;
   width: 100%;
   cursor: pointer;
   .ant-card-cover {
      max-width: 200px;
      width: 100%;
      margin: 0 auto;
      img {
         width: 99.9% !important;
         border-top-left-radius: 8px;
         border-top-right-radius: 8px;
         object-fit: scale-down;
         height: 250px;
         @media (max-width: 768px) {
            height: 200px;
         }
      }
   }
   .ant-card-body {
      padding: 15px;
      @media (max-width: 768px) {
         padding: 10px;
      }
   }
`
const StyledButton = styled(AntdButton)`
   margin-top: 10px;
   border: none;
   width: 100%;
   background-color: #00a64f;
   &:hover {
      background-color: #03c661 !important;
   }
`
