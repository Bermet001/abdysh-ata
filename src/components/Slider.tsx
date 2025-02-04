import { FC } from 'react'
import { Carousel, Button, Flex } from 'antd'
import styled from 'styled-components'
import { banners } from '../configs'
import { NavLink } from 'react-router-dom'

const Slider: FC = () => (
   <StyledCarousel dots={false} arrows autoplay autoplaySpeed={6000} infinite>
      {banners.map((item, index) => (
         <div className="main-container" key={index}>
            <Overlay />
            <img src={item.imageUrl} alt={`Slide ${index + 1}`} />

            <Flex align="start" vertical className="content">
               <h2>{item.title}</h2>

               <StyledButtonView type="primary">
                  <NavLink to={`/banner/${item.id}`}>Читать дальше</NavLink>
               </StyledButtonView>
            </Flex>
         </div>
      ))}
   </StyledCarousel>
)

export default Slider

const StyledCarousel = styled(Carousel)`
   color: white;

   .slick-slide {
      height: 600px;
      position: relative;
   }

   .slick-slide img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
   }

   .content {
      position: relative;
      z-index: 2;
      top: 50px;
      color: white;
      max-width: 1600px;
      margin: 0 auto;
   }

   .content h2 {
      font-size: 60px;
      margin-bottom: 50px;
      color: white;
      width: 550px;
      line-height: 1;
   }

   .main-container {
      padding: 120px 75px;
   }

   @media (max-width: 1000px) {
      .slick-slide {
         height: 500px;
      }

      .content h2 {
         font-size: 50px;
         width: 60%;
      }

      .main-container {
         padding: 80px 20px;
      }
   }

   @media (max-width: 800px) {
      .slick-slide {
         height: 400px;
      }

      .content {
         top: 40px;
      }

      .content h2 {
         font-size: 40px;
         margin-bottom: 30px;
         width: 70%;
      }

      .main-container {
         padding: 60px 20px;
      }
   }

   @media (max-width: 600px) {
      .slick-slide {
         height: 300px;
      }

      .content h2 {
         font-size: 30px;
         margin-bottom: 20px;
      }

      .main-container {
         padding: 40px 20px;
      }
   }

   @media (max-width: 500px) {
      .content h2 {
         font-size: 28px;
         margin-bottom: 10px;
         width: 70%;
      }
   }
`

const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.237);
   z-index: 1;
`

const StyledButtonView = styled(Button)`
   padding: 23px 45px;
   border: none;
   color: white;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 500;
   font-family: 'Roboto Condensed', serif;

   svg {
      margin-left: 5px;
   }

   @media (max-width: 900px) {
      padding: 20px 35px;
      font-size: 14px;
   }
   @media (max-width: 600px) {
      padding: 10px 20px;
      font-size: 10px;
   }
`
