import { Flex, Image } from 'antd'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import { GALLERY_THUNK } from '../../../store/slice/gallery/galleryThunk'
import { Helmet } from 'react-helmet-async'

const Gallery = () => {
   window.scrollTo(0, 0)
   const { gallery } = useAppSelector((state) => state.gallery)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(GALLERY_THUNK.getPhotos())
   }, [dispatch])

   return (
      <StyledContainer>
         <Helmet>
            <title>Галерея FC Абдыш ата</title>
            <meta
               name="description"
               content="Посмотрите галерею FC Абдыш ата, где собраны лучшие моменты команды."
            />
            <meta
               name="keywords"
               content="галерея, FC Абдыш ата, фотографии, футбол"
            />
            <meta name="author" content="Абдыш ата" />
            <link rel="canonical" href="https://abdysh-front.tw1.ru/gallery" />
         </Helmet>

         <Flex gap={20} wrap>
            {gallery?.map((item) => (
               <NavLink key={item.id} to={`/gallery/${item.slug}`}>
                  <StyledImage
                     style={{
                        objectFit: 'cover',
                        borderRadius: '10px',
                        maxWidth: '400px',
                     }}
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
   max-width: 1600px;
   margin: 0 auto;

   @media (max-width: 1209px) {
      padding: 40px 20px;
   }
`

const StyledImage = styled(Image)`
   .ant-image-mask {
      object-fit: cover;
      border-radius: 8px !important;
      cursor: pointer;
   }

   @media (max-width: 500px) {
      max-width: 100%;
   }
`
