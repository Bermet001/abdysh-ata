import { Flex, Image } from 'antd'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import { GALLERY_THUNK } from '../../../store/slice/gallery/galleryThunk'

const Gallery = () => {
   window.scrollTo(0, 0)
   const { gallery } = useAppSelector((state) => state.gallery)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(GALLERY_THUNK.getPhotos())
   })

   return (
      <StyledContainer>
         <Flex gap={20} wrap>
            {gallery.map((item) => (
               <NavLink key={item.id} to={`/gallery/${item.slug}`}>
                  <StyledImage
                     width={400}
                     height={300}
                     style={{ objectFit: 'cover', borderRadius: '10px' }}
                     key={item.id}
                     src={item.image_main}
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
