import { Flex } from 'antd'
import styled from 'styled-components'
import image2 from '../assets/images/image12.webp'
import image6 from '../assets/images/image8.jpg'
import image7 from '../assets/images/image9.jpg'
import { EyeOutlined, RightOutlined } from '@ant-design/icons'
import Button from './UI/Button'
import { NavLink } from 'react-router-dom'

const Gallery = () => {
   return (
      <StyledContainer>
         <Flex vertical gap={40}>
            <Flex align="center" gap={10} justify="space-between">
               <h1 className="main-title" style={{ margin: 0 }}>
                  КАДРЫ И ВИДЕО С СОБЫТИЙ
               </h1>

               <Button type="primary">
                  <NavLink to="/gallery">
                     Посмотреть все <RightOutlined />
                  </NavLink>
               </Button>
            </Flex>

            <Flex gap={20} className="image-gallery">
               <Flex className="gallery-image" vertical gap={20}>
                  <ImageWrapper>
                     <img height="100%" width="100%" src={image7} alt="" />

                     <DarkOverlay />
                     <Overlay>
                        <Flex gap={15} align="center">
                           <Flex vertical gap={10} align="center">
                              <StyledEyeOutlined />
                              <p
                                 className="explanation"
                                 style={{ color: 'white' }}
                              >
                                 Посмотреть
                              </p>
                           </Flex>

                           <Flex vertical gap={10} align="center">
                              <StyledRightSquareOutlined />
                              <p
                                 className="explanation"
                                 style={{ color: 'white' }}
                              >
                                 Подробнее
                              </p>
                           </Flex>
                        </Flex>
                     </Overlay>
                  </ImageWrapper>

                  <ImageWrapper>
                     <img height="100%" width="100%" src={image2} alt="" />
                     <DarkOverlay />

                     <Overlay>
                        <Flex gap={15} align="center">
                           <Flex vertical gap={10} align="center">
                              <StyledEyeOutlined />
                              <p
                                 className="explanation"
                                 style={{ color: 'white' }}
                              >
                                 Посмотреть
                              </p>
                           </Flex>

                           <Flex vertical gap={10} align="center">
                              <StyledRightSquareOutlined />
                              <p
                                 className="explanation"
                                 style={{ color: 'white' }}
                              >
                                 Подробнее
                              </p>
                           </Flex>
                        </Flex>
                     </Overlay>
                  </ImageWrapper>
               </Flex>

               <Flex gap={20}>
                  <ImageWrapper>
                     <img height="100%" width="100%" src={image6} alt="" />
                     <DarkOverlay />

                     <Overlay>
                        <Flex gap={15} align="center">
                           <Flex vertical gap={10} align="center">
                              <StyledEyeOutlined />
                              <p
                                 className="explanation"
                                 style={{ color: 'white' }}
                              >
                                 Посмотреть
                              </p>
                           </Flex>

                           <Flex vertical gap={10} align="center">
                              <StyledRightSquareOutlined />
                              <p
                                 className="explanation"
                                 style={{ color: 'white' }}
                              >
                                 Подробнее
                              </p>
                           </Flex>
                        </Flex>
                     </Overlay>
                  </ImageWrapper>
               </Flex>
            </Flex>
         </Flex>
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

   .description {
      color: grey;
   }

   @media (max-width: 1024px) {
      padding: 40px 20px 0 20px;
   }

   @media (max-width: 768px) {
      padding: 60px 30px;

      .image-gallery {
         gap: 10px !important;

         .gallery-image {
            gap: 10px !important;
         }
      }
   }

   @media (max-width: 480px) {
      padding: 30px 15px;
   }
`

const ImageWrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: center;

   img {
      transition: transform 0.3s ease;
      width: 100%;
   }

   &:hover img {
      transform: scale(1.03);
   }

   @media (max-width: 768px) {
      img {
         height: auto;
         border-radius: 6px;
      }
   }
`
const Overlay = styled.div`
   position: absolute;
   top: 50%;
   left: 0%;
   right: 0%;
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
      transform: translateX(-50%);
      transform: translateY(-50%);
   }

   @media (max-width: 768px) {
      padding: 3px;

      .explanation {
         font-size: 12px;
      }

      .image-gallery {
         gap: 10px !important;

         .gallery-image {
            gap: 10px !important;
         }
      }
   }

   @media (max-width: 480px) {
      .explanation {
         font-size: 10px;
      }
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
   transition: transform 0.3s ease;

   ${ImageWrapper}:hover & {
      opacity: 1;
      transform: scale(1.03);
   }

   @media (max-width: 768px) {
      border-radius: 6px;
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
