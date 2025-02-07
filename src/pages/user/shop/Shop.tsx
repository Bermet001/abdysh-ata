import styled from 'styled-components'
import { Card, Button, Flex, Input, Select } from 'antd'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { PRODUCT_THUNK } from '../../../store/slice/shop/shopThunk'
import { useEffect } from 'react'
// import { products } from '../../../configs'

const { Search } = Input

const Shop = () => {
   window.scrollTo(0, 0)

   const { products } = useAppSelector((state) => state.shop)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(PRODUCT_THUNK.getProducts())
   }, [])

   return (
      <Container>
         <Flex align="center" justify="space-between" gap={50}>
            <StyledSelect
               defaultValue="lucy"
               style={{ width: 120 }}
               options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
               ]}
            />

            <StyledSearch placeholder="Поиск..." />
         </Flex>

         <ProductsContainer>
            {products.map((product) => (
               <StyledCard
                  key={product.id}
                  cover={<img alt={product.title} src={product.image} />}
               >
                  <NavLink to={`/shop/${product.slug}`}>
                     <Card.Meta
                        className="product-info"
                        title={product.title}
                        description={product.price}
                     />
                  </NavLink>
                  <StyledButton type="primary">Оформить заказ</StyledButton>
               </StyledCard>
            ))}
         </ProductsContainer>
      </Container>
   )
}

export default Shop

const Container = styled.main`
   margin: auto;
   padding: 80px 75px 0 75px;
   max-width: 1600px;
   margin-bottom: 80px;
   display: flex;
   flex-direction: column;
   gap: 30px;

   @media (max-width: 1024px) {
      padding: 90px 20px 30px;
   }
   @media (max-width: 480px) {
      margin-bottom: 0px;
   }

   .product-info {
      cursor: pointer;
   }
`

const ProductsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   gap: 20px;

   @media (max-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
   }

   @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media (max-width: 480px) {
      gap: 10px;
      grid-template-columns: repeat(2, 1fr);
   }
`

const StyledCard = styled(Card)`
   border-radius: 10px;
   transition: transform 0.3s;

   img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      object-fit: contain;
      height: 250px;
      width: 100% !important;

      @media (max-width: 480px) {
         height: 130px;
      }
   }

   .ant-card-body {
      padding: 15px;

      @media (max-width: 480px) {
         padding: 10px;
      }
   }
`

const StyledButton = styled(Button)`
   margin-top: 10px;
   border: none;
   width: 100%;
`

const StyledSelect = styled(Select)`
   padding: 7px;
   height: 44px;
   border-radius: 8px;
   max-width: 170px;
   min-width: 150px;
   border: 1px solid #d9d9d9;
   background-color: #f8f8f8;

   &:hover,
   :active,
   :focus {
      border-color: #00a64f;
   }

   .ant-select-selector {
      width: 100%;
      background-color: #f8f8f8 !important;
      border: none !important;
      box-shadow: none !important;
   }

   .ant-select-selection-item {
      border: none;
      font-size: 17px;
      color: #7e7e7e;
   }

   .ant-select-single {
      height: auto;
      border: none !important;
   }
`

const StyledSearch = styled(Search)`
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   transition: border-color 0.3s;
   border-radius: 8px;
   background-color: #f8f8f8;

   .ant-input-group-addon {
      border: 1px solid #d9d9d9 !important;
      padding: 30px;
      background-color: #f8f8f8;
   }

   .ant-input-search-button {
      border: none;
      background-color: #f8f8f8;
   }

   .ant-input {
      box-shadow: none;
      background-color: #f8f8f8;
      padding: 10px;
      border-radius: 6px;
   }

   .ant-input-group-addon:last-child {
      width: 40px;
   }

   .ant-input-affix-wrapper {
      border-start-start-radius: 6px;
      border-end-start-radius: 6px;
   }

   & button:hover {
      transform: translateY(0);
   }

   .ant-input::placeholder {
      font-size: 17px;
   }
`
