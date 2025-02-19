import { FC, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Image } from 'antd'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { GALLERY_THUNK } from '../../../store/slice/gallery/galleryThunk'

const Photo: FC = () => {
   const { slug } = useParams<{ slug: string }>()
   window.scrollTo(0, 0)

   const { photo } = useAppSelector((state) => state.gallery)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(GALLERY_THUNK.getPhoto(slug))
   }, [dispatch, slug])

   return (
      <StyledContainer>
         <img className="main-image" src={photo.image_main} alt="Background" />
         <br />
         <h3>{photo.title}</h3>
         <Flex vertical gap={20}>
            <h1 className="main-title">Картинки с этого события</h1>
            <Flex wrap>
               {photo.images?.map((item) => (
                  <ImageWrapper key={item.id}>
                     <Image
                        height="100%"
                        width="100%"
                        src={item.images}
                        alt="картинка с этого события"
                     />
                  </ImageWrapper>
               ))}
            </Flex>
         </Flex>
      </StyledContainer>
   )
}

export default Photo

const StyledContainer = styled.main`
   padding: 80px 5%;
   max-width: 1600px;

   .main-image {
      object-fit: cover;
      height: auto;
      max-height: 400px;
      width: 100%;
      border-radius: 8px;
      object-position: center;
   }

   .main-title {
      margin: 60px 0 10px;
      font-size: 2.5rem;
   }

   @media (max-width: 768px) {
      .main-title {
         font-size: 2rem;
      }
   }
`

const ImageWrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   width: calc(25% - 20px);
   height: 230px;
   margin: 10px;
   overflow: hidden;

   img {
      object-fit: cover;
      border-radius: 8px;
      transition: transform 0.3s ease;
      width: 100%;
   }

   @media (max-width: 1024px) {
      width: calc(34% - 20px);
      height: 170px;
   }

   @media (max-width: 768px) {
      width: calc(50% - 20px);
      height: 150px;
   }

   @media (max-width: 480px) {
      width: calc(52% - 13px);
      height: 120px;
      margin: 3px;
   }
`
