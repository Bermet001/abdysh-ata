import styled from 'styled-components'
import photo from '../../../assets/images/products/clothe1.png'
import { CheckboxGroupProps } from 'antd/es/checkbox'
import { Radio } from 'antd'

const ProductPage = () => {
   const options: CheckboxGroupProps<string>['options'] = [
      { label: 'XL', value: 'Apple' },
      { label: 'S', value: 'Pear' },
      { label: 'M', value: 'Orange' },
      { label: 'XS', value: 'Orange' },
   ]

   const options2: CheckboxGroupProps<string>['options'] = [
      { label: 'красный', value: 'Apple' },
      { label: 'белый', value: 'Pear' },
      { label: 'черный', value: 'Orange' },
   ]

   return (
      <Container>
         <ImageContainer>
            <PlaceholderImage src={photo} />
         </ImageContainer>

         <Details>
            <Title>Классическая футболка</Title>
            <Price>
               99,99 сом <OldPrice>109,00 сом</OldPrice>
            </Price>
            <SelectContainer>
               <Radio.Group
                  className="detail-info"
                  block
                  options={options2}
                  defaultValue="Pear"
                  optionType="button"
               />
               <Radio.Group
                  block
                  className="detail-info"
                  options={options}
                  defaultValue="Pear"
                  optionType="button"
               />
            </SelectContainer>
            <Section>
               <SectionTitle>Характеристики</SectionTitle>
               <FeatureList>
                  <li>100% Хлопок</li>
                  <li>
                     Стирка в холодной воде, сушить в барабане при низкой
                     температуре
                  </li>
                  <li>Вырез: Круглый вырез</li>
                  <li>Узор: Принт</li>
                  <li>Фасон: Прямой</li>
               </FeatureList>
            </Section>

            <Button>Оформить заказ</Button>

            <Section>
               <SectionTitle>Описание</SectionTitle>
               <Description>
                  Эта классическая белая футболка изготовлена из 100% хлопка,
                  что обеспечивает комфортную и дышащую посадку. Свободный фасон
                  позволяет легко сочетать с другими предметами одежды или
                  носить отдельно. Эта футболка — необходимый элемент в любом
                  гардеробе. Доступна в различных размерах, чтобы обеспечить
                  идеальную посадку.
               </Description>
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
      background-color: #e64a19;
   }
`

const Price = styled.h2`
   font-size: 22px; /* Уменьшен для меньших экранов */
   color: #00a64f;
   margin: 10px 0;

   @media (min-width: 768px) {
      font-size: 24px; /* Увеличен для больших экранов */
   }
`

const OldPrice = styled.span`
   text-decoration: line-through;
   color: #777;
   margin-left: 10px;
`

const SelectContainer = styled.div`
   display: flex;
   flex-direction: column; /* Изменено для лучшего отображения на маленьких экранах */
   gap: 10px;
   margin: 20px 0;

   @media (min-width: 768px) {
      flex-direction: row; /* Вернуться к строке на больших экранах */
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
