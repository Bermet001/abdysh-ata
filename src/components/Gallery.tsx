import { Button, Flex } from 'antd'
import styled from 'styled-components'
import image1 from '../assets/images/image2.jpeg'
import image2 from '../assets/images/image12.webp'
import image3 from '../assets/images/image6.avif'
import image6 from '../assets/images/image8.jpg'
import image7 from '../assets/images/image9.jpg'
import { RightOutlined } from '@ant-design/icons'

const Gallery = () => {
   return (
      <StyledContainer>
         <Flex vertical gap={10}>
            <Flex align="enter" gap={10} justify="space-between">
               <h1 className="main-title">КАДРЫ И ВИДЕО С СОБЫТИЙ </h1>
               <StyledButton type="primary">
                  Посмотреть все <RightOutlined />
               </StyledButton>
            </Flex>

            <Flex gap={10}>
               <Flex vertical gap={10}>
                  <ImageWrapper>
                     <img width="100%" height="263.5" src={image7} alt="" />
                     <Overlay>
                        <h3>Solutions</h3>
                        <Flex gap={10} align="center">
                           <p>TechVision Solutions</p>
                           <button>
                              <RightOutlined />
                           </button>
                        </Flex>
                     </Overlay>
                  </ImageWrapper>

                  <ImageWrapper>
                     <img width="500" height="500" src={image2} alt="" />
                     <Overlay>
                        <h3>Solutions</h3>
                        <Flex gap={10} align="center">
                           <p>TechVision Solutions</p>
                           <button>
                              <RightOutlined />
                           </button>
                        </Flex>
                     </Overlay>
                  </ImageWrapper>
               </Flex>

               <Flex vertical gap={10}>
                  <ImageWrapper>
                     <img width="470" height={500} src={image3} alt="" />
                     <Overlay>
                        <h3>Solutions</h3>
                        <Flex gap={10} align="center">
                           <p>TechVision Solutions</p>
                           <button>
                              <RightOutlined />
                           </button>
                        </Flex>
                     </Overlay>
                  </ImageWrapper>
                  <ImageWrapper>
                     <img width="100%" height="auto" src={image1} alt="" />
                     <Overlay>
                        <h3>Solutions</h3>
                        <Flex gap={10} align="center">
                           <p>TechVision Solutions</p>
                           <button>
                              <RightOutlined />
                           </button>
                        </Flex>
                     </Overlay>
                  </ImageWrapper>
               </Flex>

               <Flex gap={10}>
                  <ImageWrapper>
                     <img width="300" height="773.5" src={image6} alt="" />
                     <Overlay>
                        <h3>Solutions</h3>
                        <Flex gap={10} align="center">
                           <p>TechVision Solutions</p>
                           <button>
                              <RightOutlined />
                           </button>
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

   img {
      object-fit: cover;
      border-radius: 5px;
   }

   > .ant-flex {
      margin: 0 auto;
      max-width: 1600px;
   }

   .description {
      color: grey;
   }
`

const ImageWrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: center;

   img {
      transition: transform 0.3s ease;
   }

   &:hover img {
      transform: scale(1.03);
   }
`

const Overlay = styled.div`
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   background: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: 0;
   flex-direction: column;
   width: 99%;
   height: auto;
   transition: opacity 0.3s ease, transform 0.3s ease;
   border-radius: 5px;
   padding: 5px;
   transform: translateY(100%);

   h3,
   p {
      margin: 0;
      padding: 0;
   }

   button {
      padding: 10px 11px;
      border: none;
      background-color: #007bff;
      color: white;
      border-radius: 50%;
      cursor: pointer;
   }

   ${ImageWrapper}:hover & {
      opacity: 1;
      transform: translateY(0);
   }
`

const StyledButton = styled(Button)`
   padding: 23px 25px;
   border: none;
   color: white;
   border-radius: 5px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;

   svg {
      margin-left: 5px;
   }
`
