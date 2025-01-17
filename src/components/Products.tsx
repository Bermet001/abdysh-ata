import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Button, Flex } from 'antd'
import { products } from '../configs'
import { RightOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const ProductSlider = () => {
   return (
      <Container>
         <Flex justify="space-between" align="start">
            <h1>НАШ ОНЛАЙН МАГАЗИН </h1>

            <StyledButtonView type="primary">
               <NavLink to="/shop">
                  Посмотреть все товары <RightOutlined />
               </NavLink>
            </StyledButtonView>
         </Flex>

         <Swiper
            spaceBetween={10}
            breakpoints={{
               640: {
                  slidesPerView: 3,
               },
               1024: {
                  slidesPerView: 5,
               },
            }}
         >
            {products.map((product) => (
               <SwiperSlide key={product.id}>
                  <StyledCard
                     cover={<img alt={product.name} src={product.img} />}
                  >
                     <Card.Meta
                        title={product.name}
                        description={product.price}
                     />
                     <StyledButton type="primary">Оформить заказ</StyledButton>
                  </StyledCard>
               </SwiperSlide>
            ))}
         </Swiper>
      </Container>
   )
}

export default ProductSlider

const Container = styled.div`
   margin: auto;
   padding: 120px 75px 0 75px;
   max-width: 1600px;

   h1 {
      margin-bottom: 50px;
      font-size: 40px;
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
   }

   .ant-card-body {
      padding: 15px;
   }
`

const StyledButton = styled(Button)`
   margin-top: 10px;
   border: none;
   width: 100%;
`

const StyledButtonView = styled(Button)`
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
