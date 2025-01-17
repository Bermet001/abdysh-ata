import styled from 'styled-components'
import { Card, Button } from 'antd'
import { products } from '../../../configs'

const Shop = () => {
   return (
      <Container>
         <ProductsContainer>
            {products.map((product) => (
               <StyledCard
                  key={product.id}
                  cover={<img alt={product.name} src={product.img} />}
               >
                  <Card.Meta title={product.name} description={product.price} />
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
   padding: 120px 75px 0 75px;
   max-width: 1600px;
   margin-bottom: 80px;
`

const ProductsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   gap: 20px;
`

const StyledCard = styled(Card)`
   border-radius: 10px;
   transition: transform 0.3s;
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
