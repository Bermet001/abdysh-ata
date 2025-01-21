import { Flex, Image } from 'antd'
import image from '../../../assets/images/image.jpeg'
import image1 from '../../../assets/images/image12.webp'
import image2 from '../../../assets/images/image2.jpeg'
import image3 from '../../../assets/images/image6.avif'
import image4 from '../../../assets/images/image7.jpg'
import image53 from '../../../assets/images/image8.jpg'
import image5 from '../../../assets/images/images3.jpeg'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const array = [
   { image, id: 1 },
   { image: image1, id: 2 },
   { image: image2, id: 3 },
   { image: image3, id: 4 },
   { image: image4, id: 5 },
   { image: image53, id: 6 },
   { image: image5, id: 7 },
]

const Gallery = () => {
   return (
      <StyledContainer>
         <Flex gap={20} wrap>
            {array.map((item) => (
               <NavLink to={`/gallery/${item.id}`}>
                  <StyledImage
                     width={400}
                     height={300}
                     style={{ objectFit: 'cover', borderRadius: '10px' }}
                     key={item.id}
                     src={item.image}
                  />
               </NavLink>
            ))}
         </Flex>
      </StyledContainer>
   )
}

export default Gallery

const StyledContainer = styled.main`
   padding: 100px 75px;
`

const StyledImage = styled(Image)`
   .ant-image .ant-image-mask {
      object-fit: cover;
      width: 500px !important;
      height: auto !important;
      border-radius: 8px !important;
      cursor: pointer;
   }
`
