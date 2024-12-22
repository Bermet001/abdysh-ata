import { CSSProperties, FC } from 'react'
import { Carousel } from 'antd'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'
import stadion from '../assets/images/stadion.jpg'

const contentStyle: CSSProperties = {
   margin: 0,
   height: '600px',
   objectFit: 'cover',
}

const images = [stadion, banner2, banner3]

const Slider: FC = () => (
   <Carousel dots={false} arrows autoplay autoplaySpeed={7000} infinite>
      {images.map((image, index) => (
         <div key={index}>
            <div style={contentStyle}>
               <img width="100%" src={image} alt={`Slide ${index + 1}`} />
            </div>
         </div>
      ))}
   </Carousel>
)

export default Slider
