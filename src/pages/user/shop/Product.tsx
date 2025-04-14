import styled from 'styled-components'
import { Radio, RadioChangeEvent } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect, useState } from 'react'
import { PRODUCT_THUNK } from '../../../store/slice/shop/shopThunk'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
   window.scrollTo(0, 0)
   const { slug } = useParams<{ slug: string }>()
   const { product } = useAppSelector((state) => state.shop)
   const { contacts } = useAppSelector((state) => state.contacts)
   const contact = contacts.length > 0 ? contacts[0] : null
   const message = `Хотела бы узнать подробнее о ${product?.title}.`
   const encodedMessage = encodeURIComponent(message)
   const dispatch = useAppDispatch()
   const [selectedColor, setSelectedColor] = useState(
      product?.product_color[0]?.image
   )
   useEffect(() => {
      dispatch(PRODUCT_THUNK.getProduct(slug))
   }, [dispatch, slug])
   useEffect(() => {
      if (product?.product_color.length)
         setSelectedColor(product.product_color[0].image)
   }, [product])
   const handleColorChange = (e: RadioChangeEvent) =>
      setSelectedColor(e.target.value)
   return (
      <Container>
         <ImageContainer>
            <PlaceholderImage src={selectedColor} />
         </ImageContainer>
         <Details>
            <Title>{product?.title}</Title>
            <Price>
               {product?.price} сом
               <OldPrice>{product?.old_price} сом</OldPrice>
            </Price>
            <SelectContainer>
               <Radio.Group
                  className="detail-info"
                  block
                  options={product?.product_color?.map(({ color, image }) => ({
                     label: color,
                     value: image,
                  }))}
                  defaultValue={product?.product_color[0]?.image}
                  onChange={handleColorChange}
                  optionType="button"
               />
               <Radio.Group
                  block
                  className="detail-info"
                  options={product?.product_size?.map(({ size }) => ({
                     label: size,
                     value: size,
                  }))}
                  defaultValue={product?.product_size[0]?.size}
                  optionType="button"
               />
            </SelectContainer>
            <Section>
               <SectionTitle>Характеристики</SectionTitle>
               <FeatureList>
                  {product?.product_attribute?.map((item) => (
                     <li key={item?.id}>
                        {item?.key} - {item?.value}
                     </li>
                  ))}
               </FeatureList>
            </Section>
            <a
               href={`https://wa.me/${contact?.whatsapp}?text=${encodedMessage}`}
               aria-label="перейти в чат"
               target="_blank"
               rel="noopener noreferrer"
            >
               <Button>Оформить заказ</Button>
            </a>
            <Section>
               <SectionTitle>Описание</SectionTitle>
               <Description>{product?.description}</Description>
            </Section>
         </Details>
      </Container>
   )
}

export default ProductPage

const Container = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 1600px;
   margin: auto;
   padding: 100px 75px;
   gap: 20px;
   @media (max-width: 1024px) {
      padding: 80px 20px;
   }
   @media (min-width: 768px) {
      flex-direction: row;
   }
`
const ImageContainer = styled.div`
   flex: 1;
   display: flex;
   align-items: start;
   border-radius: 8px;
   height: auto;
   width: 100%;
   @media (min-width: 768px) {
      height: 450px;
   }
   @media (minwidth: 400px) {
      max-height: 350px;
      min-height: 350px;
   }
`
const PlaceholderImage = styled.img`
   width: 330px;
   height: auto;
   object-fit: cover;
   background: #ccc;
   border-radius: 8px;
   @media (min-width: 768px) {
      width: 100%;
   }
`
const Details = styled.div`
   flex: 2;
   display: flex;
   flex-direction: column;
`
const Title = styled.h1`
   font-size: 24px;
   margin: 0;
   @media (min-width: 768px) {
      font-size: 28px;
   }
`
const Button = styled.button`
   padding: 10px;
   background-color: #04a54f;
   color: white;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   font-size: 16px;
   &:hover {
      background-color: #018541;
   }
`
const Price = styled.h2`
   font-size: 22px;
   color: #00a64f;
   margin: 10px 0;
   @media (min-width: 768px) {
      font-size: 24px;
   }
`
const OldPrice = styled.span`
   text-decoration: line-through;
   color: #777;
   margin-left: 10px;
`
const SelectContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   margin: 20px 0;
   @media (min-width: 768px) {
      flex-direction: row;
   }
`
const Section = styled.div`
   margin: 20px 0;
`
const SectionTitle = styled.h3`
   font-size: 20px;
   margin: 10px 0;
`
const FeatureList = styled.ul`
   list-style-type: disc;
   padding-left: 20px;
`
const Description = styled.p`
   margin: 10px 0;
   line-height: 1.5;
`
