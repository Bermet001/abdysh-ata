import { FC, useEffect } from 'react'
import styled from 'styled-components'
import { Flex } from 'antd'
import { EyeOutlined, RightOutlined } from '@ant-design/icons'
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
               {photo.images.map((item) => (
                  <ImageWrapper key={item.id}>
                     <img
                        height="100%"
                        width="100%"
                        src={item.images}
                        alt="картинка с этого события"
                     />
                     <DarkOverlay />

                     <Overlay>
                        <Flex gap={10} align="center">
                           <Flex vertical gap={10} align="center">
                              <StyledEyeOutlined />
                              <p className="info-text">Посмотреть</p>
                           </Flex>

                           <Flex vertical gap={10} align="center">
                              <StyledRightSquareOutlined />
                              <p className="info-text">Подробнее</p>
                           </Flex>
                        </Flex>
                     </Overlay>
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

   .info-text {
      font-size: 13px;
      color: white;
   }

   img {
      object-fit: cover;
      border-radius: 8px;
      transition: transform 0.3s ease;
      width: 100%;
   }

   &:hover img {
      transform: scale(1.03);
   }

   @media (max-width: 1024px) {
      width: calc(33.33% - 20px);
      height: 170px;
   }

   @media (max-width: 768px) {
      width: calc(50% - 20px);
      height: 150px;
   }

   @media (max-width: 480px) {
      width: calc(50% - 20px);
      height: 120px;
   }
`

const Overlay = styled.div`
   position: absolute;
   top: 50%;
   left: 0;
   right: 0;
   bottom: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: 0;
   flex-direction: column;
   transition: opacity 0.8s ease, transform 0.5s ease;
   border-radius: 8px;
   padding: 5px;

   ${ImageWrapper}:hover & {
      opacity: 1;
      transform: translate(-0%, -50%);
   }
`

const DarkOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.277);
   opacity: 0;
   transition: opacity 0.3s ease;
   border-radius: 8px;

   ${ImageWrapper}:hover & {
      opacity: 1;
   }
`

const StyledEyeOutlined = styled(EyeOutlined)`
   font-size: 16px;
   color: white;
   border: 1.5px solid white;
   border-radius: 4px;
   padding: 5px;
   cursor: pointer;
`

const StyledRightSquareOutlined = styled(RightOutlined)`
   font-size: 16px;
   color: white;
   border: 1.5px solid white;
   cursor: pointer;
   border-radius: 4px;
   padding: 5px;
`
