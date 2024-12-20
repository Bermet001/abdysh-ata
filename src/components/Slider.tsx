import { CSSProperties, FC } from 'react'
import { Carousel } from 'antd'
import banner1 from '../assets/images/baner1.jpg'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'

const contentStyle: CSSProperties = {
   margin: 0,
   height: '550px',
   color: '#fff',
   lineHeight: '160px',
   background: '#364d79',
   objectFit: 'cover',
}

const images = [banner1, banner2, banner3]

const Slider: FC = () => (
   <>
      <Carousel dots={false} arrows autoplay autoplaySpeed={4000} infinite>
         {images.map((image, index) => (
            <div key={index}>
               <div style={contentStyle}>
                  <img width="100%" src={image} alt={`Slide ${index + 1}`} />
               </div>
            </div>
         ))}
      </Carousel>
   </>
)

export default Slider
