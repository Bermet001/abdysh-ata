import { useEffect, useState } from 'react'
import { Flex } from 'antd'
import styled from 'styled-components'
import { EyeOutlined, RightOutlined } from '@ant-design/icons'
import Button from './UI/Button'
import { NavLink } from 'react-router-dom'
import { Modal } from 'antd'
import { useAppDispatch, useAppSelector } from '../store/store'
import { GALLERY_THUNK } from '../store/slice/gallery/galleryThunk'

const Gallery = () => {
   const [isModalVisible, setIsModalVisible] = useState(false)
   const [selectedImage, setSelectedImage] = useState('')

   const { gallery } = useAppSelector((state) => state.gallery)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(GALLERY_THUNK.getPhotos())
   }, [dispatch])

   const handleImageClick = (src: string) => {
      setSelectedImage(src)
      setIsModalVisible(true)
   }

   const handleCloseModal = () => {
      setIsModalVisible(false)
      setSelectedImage('')
   }

   const image1 = gallery[0] || ''
   const image2 = gallery[1] || ''
   const image3 = gallery[2] || ''

   return (
      <StyledContainer>
         <Flex vertical gap={40}>
            <Flex align="center" gap={10} justify="space-between">
               <h2 className="main-title" style={{ margin: 0 }}>
                  КАДРЫ И ВИДЕО С СОБЫТИЙ
               </h2>

               <Button type="primary">
                  <NavLink to="/gallery">
                     Посмотреть все <RightOutlined />
                  </NavLink>
               </Button>
            </Flex>

            <Flex gap={20} className="image-gallery">
               <Flex className="gallery-image" vertical gap={20}>
                  <ImageWrapper>
                     <img
                        height="100%"
                        width="100%"
                        src={image1.image_main}
                        alt="Event 1"
                     />
                     <DarkOverlay />
                     <Overlay>
                        <Flex gap={15} align="center">
                           <Flex
                              onClick={() =>
                                 handleImageClick(image1.image_main)
                              }
                              vertical
                              gap={10}
                              align="center"
                           >
                              <StyledEyeOutlined />
                              <p
                                 className="explanation"
                                 style={{ color: 'white' }}
                              >
                                 Посмотреть
                              </p>
                           </Flex>
                           <Flex vertical gap={10} align="center">
                              <NavLink to={`/gallery/${image1.slug}`}>
                                 <StyledRightSquareOutlined />
                                 <p
                                    className="explanation"
                                    style={{ color: 'white' }}
                                 >
                                    Подробнее
                                 </p>
                              </NavLink>
                           </Flex>
                        </Flex>
                     </Overlay>
                  </ImageWrapper>

                  <ImageWrapper>
                     <img
                        height="100%"
                        width="100%"
                        src={image2.image_main}
                        alt="Event 2"
                     />
                     <DarkOverlay />

                     <Overlay>
                        <Flex gap={15} align="center">
                           <Flex
                              onClick={() =>
                                 handleImageClick(image2.image_main)
                              }
                              vertical
                              gap={10}
                              align="center"
                           >
                              <StyledEyeOutlined />
                              <p
                                 className="explanation"
                                 style={{ color: 'white' }}
                              >
                                 Посмотреть
                              </p>
                           </Flex>
                           <Flex vertical gap={10} align="center">
                              <NavLink to={`/gallery/${image2.slug}`}>
                                 <StyledRightSquareOutlined />
                                 <p
                                    className="explanation"
                                    style={{ color: 'white' }}
                                 >
                                    Подробнее
                                 </p>
                              </NavLink>
                           </Flex>
                        </Flex>
                     </Overlay>
                  </ImageWrapper>
               </Flex>
               <Flex>
                  <ImageWrapper>
                     <img
                        height="100%"
                        width="100%"
                        src={image3.image_main}
                        alt="Event 3"
                     />
                     <DarkOverlay />
                     <Overlay>
                        <Flex gap={15} align="center">
                           <Flex
                              onClick={() =>
                                 handleImageClick(image3.image_main)
                              }
                              vertical
                              gap={10}
                              align="center"
                           >
                              <StyledEyeOutlined />
                              <p
                                 className="explanation"
                                 style={{ color: 'white' }}
                              >
                                 Посмотреть
                              </p>
                           </Flex>
                           <Flex vertical gap={10} align="center">
                              <NavLink to={`/gallery/${image3.slug}`}>
                                 <StyledRightSquareOutlined />
                                 <p
                                    className="explanation"
                                    style={{ color: 'white' }}
                                 >
                                    Подробнее
                                 </p>
                              </NavLink>
                           </Flex>
                        </Flex>
                     </Overlay>
                  </ImageWrapper>
               </Flex>
            </Flex>
         </Flex>

         <Modal
            open={isModalVisible}
            footer={null}
            onCancel={handleCloseModal}
            width={700}
            className="modal-gallery"
         >
            <img
               src={selectedImage}
               alt="Detailed view"
               style={{ width: '100%' }}
            />
         </Modal>
      </StyledContainer>
   )
}

export default Gallery

const StyledContainer = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 120px 75px 0 75px;
   overflow: hidden;

   img {
      object-fit: cover;
      border-radius: 10px;
   }

   > .ant-flex {
      margin: 0 auto;
      max-width: 1600px;
   }

   .ant-modal .ant-modal-content {
      padding: 0;
   }

   @media (max-width: 1024px) {
      padding: 40px 20px 0 20px;
   }

   @media (max-width: 768px) {
      padding: 10px 30px;

      .image-gallery {
         gap: 10px !important;
      }
   }

   @media (max-width: 480px) {
      padding: 0 20px;
   }
`

const ImageWrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   cursor: pointer;

   img {
      transition: transform 0.3s ease;
      width: 100%;
   }

   &:hover img {
      transform: scale(1.03);
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
   width: 100%;
   height: auto;
   transition: opacity 0.8s ease, transform 0.5s ease;
   border-radius: 5px;
   padding: 5px;

   ${ImageWrapper}:hover & {
      opacity: 1;
      bottom: 0;
      transform: scale(1.03);
      transform: translateX(-50%);
      transform: translateY(-50%);
   }
`

const DarkOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.365);
   opacity: 0;
   transition: opacity 0.3s ease;
   border-radius: 10px;

   ${ImageWrapper}:hover & {
      opacity: 1;
      transform: scale(1.03);
   }
`

const StyledEyeOutlined = styled(EyeOutlined)`
   font-size: 24px;
   color: white;
   border: 3px solid white;
   border-radius: 6px;
   padding: 5px;
   cursor: pointer;

   @media (max-width: 768px) {
      padding: 5px;
      border: 2px solid white;
      font-size: 16px;
   }

   @media (max-width: 480px) {
      border: 1.5px solid white;
      padding: 5px;
      font-size: 11px;
   }
`

const StyledRightSquareOutlined = styled(RightOutlined)`
   font-size: 24px;
   color: white;
   border: 3px solid white;
   border-radius: 6px;
   padding: 5px;
   cursor: pointer;

   @media (max-width: 768px) {
      padding: 5px;
      border: 2px solid white;
      font-size: 16px;
   }

   @media (max-width: 480px) {
      border: 1.5px solid white;
      padding: 5px;
      font-size: 11px;
   }
`
