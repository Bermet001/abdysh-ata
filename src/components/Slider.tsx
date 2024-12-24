import { FC } from 'react'
import { Carousel, Button } from 'antd'
import styled from 'styled-components'
import { banners } from '../configs'
import { NavLink } from 'react-router-dom'

const Slider: FC = () => (
   <StyledCarousel dots={false} arrows autoplay autoplaySpeed={6000} infinite>
      {banners.map((item, index) => (
         <div className="main-container" key={index}>
            <Overlay />
            <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
            <div className="content">
               <h1>{item.title}</h1>
               <StyledButtonView type="primary">
                  <NavLink to={`/banner/${item.id}`}>Читать дальше</NavLink>
               </StyledButtonView>
            </div>
         </div>
      ))}
   </StyledCarousel>
)

export default Slider

const StyledCarousel = styled(Carousel)`
   color: white;

   .slick-slide {
      display: flex;
      justify-content: center;
      align-items: center;
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
      /* width: 1600px; */
      margin: 0 auto;
   }

   .content h1 {
      font-size: 60px;
      margin-bottom: 50px;
      color: white;
      width: 550px;
      line-height: 1;
   }

   .main-container {
      padding: 120px 75px;
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
   border-radius: 3px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 500;
   font-family: 'Roboto Condensed', serif;

   svg {
      margin-left: 5px;
   }
`
