import { useEffect } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Flex, Button as AntdButton } from 'antd'
// import { products } from '../configs'
import { RightOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import Button from './UI/Button'
import { useAppDispatch, useAppSelector } from '../store/store'
import { PRODUCT_THUNK } from '../store/slice/shop/shopThunk'

const ProductSlider = () => {
   const { products } = useAppSelector((state) => state.shop)
   console.log(products, '')

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(PRODUCT_THUNK.getProducts())
   }, [])

   return (
      <Container>
         <Flex gap={10} justify="space-between" align="start">
            <h2 className="main-title">НАШ ОНЛАЙН МАГАЗИН</h2>

            <Button type="primary">
               <NavLink to="/shop">
                  Посмотреть все товары <RightOutlined />
               </NavLink>
            </Button>
         </Flex>

         <Swiper
            spaceBetween={10}
            breakpoints={{
               200: {
                  slidesPerView: 2,
               },
               640: {
                  slidesPerView: 2,
               },
               768: {
                  slidesPerView: 3,
               },
               1024: {
                  slidesPerView: 4,
               },
               1440: {
                  slidesPerView: 5,
               },
            }}
         >
            {products?.map((product) => (
               <SwiperSlide key={product.id}>
                  <StyledCard
                     cover={<img alt={product.name} src={product.img} />}
                  >
                     <NavLink to={`/shop/${product.id}`}>
                        <Card.Meta
                           title={product.name}
                           description={product.price}
                        />
                        <StyledButton type="primary">
                           Оформить заказ
                        </StyledButton>
                     </NavLink>
                  </StyledCard>
               </SwiperSlide>
            ))}
         </Swiper>
      </Container>
   )
}

export default ProductSlider

const Container = styled.section`
   margin: auto;
   padding: 120px 75px 0 75px;
   max-width: 1600px;

   @media (max-width: 1024px) {
      padding: 60px 20px 0;
   }
   @media (max-width: 600px) {
      padding: 30px 20px 0;
   }
`

const StyledCard = styled(Card)`
   border-radius: 10px;
   transition: transform 0.3s;
   width: 100%;
   cursor: pointer;

   img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      object-fit: cover;
      height: 250px;

      @media (max-width: 768px) {
         height: 200px;
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
`
