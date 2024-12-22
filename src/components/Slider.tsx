import { CSSProperties, FC } from 'react'
import { Carousel } from 'antd'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'
import stadion from '../assets/images/stadion.jpg'
import styled from 'styled-components'

const contentStyle: CSSProperties = {
   margin: 0,
   height: '600px',
   objectFit: 'cover',
}

const images = [stadion, banner2, banner3]

const Slider: FC = () => (
   <SliderContainer dots={false} arrows autoplay autoplaySpeed={7000} infinite>
      {images.map((image, index) => (
         <div key={index}>
            <div style={contentStyle}>
               <img width="100%" src={image} alt={`Slide ${index + 1}`} />
            </div>
         </div>
      ))}
   </SliderContainer>
)

export default Slider

const SliderContainer = styled(Carousel)`
   box-shadow: inset 0 4px 20px rgba(222, 27, 27, 0.94),
      inset 0 -4px 20px rgba(245, 8, 8, 0.957),
      inset -4px 0 20px rgba(234, 5, 5, 0.916),
      inset 4px 0 20px rgba(246, 10, 10, 0.954);
`
