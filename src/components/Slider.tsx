import { CSSProperties, FC } from 'react'
import { Carousel } from 'antd'
import banner2 from '../assets/images/banner2.jpg'
import stadion2 from '../assets/images/background.jpg'
import stadion3 from '../assets/images/background2.jpg'
import styled from 'styled-components'

const contentStyle: CSSProperties = {
   margin: 0,
   height: '600px',
   objectFit: 'cover',
}

const images = [stadion2, stadion3, banner2]

const StyledCarousel = styled(Carousel)`
   .ant-carousel .slick-prev {
      opacity: 1;
   }
   .ant-carousel .slick-next {
      opacity: 1 !important;
   }

   .slick-prev,
   .slick-next {
      color: white;
      opacity: 1;
   }

   .slick-prev:before,
   .slick-next:before {
      opacity: 1;
      color: white;
      &:hover,
      &:active,
      &:focus {
         opacity: 1 !important;
      }
   }
`

const Slider: FC = () => (
   <StyledCarousel dots={false} arrows autoplay autoplaySpeed={6000} infinite>
      {images.map((image, index) => (
         <div key={index}>
            <div style={contentStyle}>
               <img width="100%" src={image} alt={`Slide ${index + 1}`} />
            </div>
         </div>
      ))}
   </StyledCarousel>
)

export default Slider
