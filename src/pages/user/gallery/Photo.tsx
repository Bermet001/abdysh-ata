import { FC } from 'react'
import image from '../../../assets/images/background2.jpg'
import styled from 'styled-components'
import { Flex } from 'antd'
import { EyeOutlined, RightOutlined } from '@ant-design/icons'

interface PhotoItem {
   image: string
   id: number
}

const array = {
   image,
   id: 0,
   other: [
      { image: image, id: 1 },
      { image: image, id: 2 },
      { image: image, id: 3 },
      { image, id: 4 },
      { image, id: 5 },
      { image, id: 6 },
      { image, id: 7 },
      { image, id: 8 },
      { image, id: 9 },
      { image, id: 10 },
   ] as PhotoItem[],
}

const Photo: FC = () => {
   return (
      <StyledContainer>
         <img className="main-image" src={array.image} alt="Background" />

         <Flex vertical gap={20}>
            <h2 className="main-title">Картинки с этого события</h2>

            <Flex wrap>
               {array.other.map((item) => (
                  <ImageWrapper key={item.id}>
                     <img height="100%" width="100%" src={item.image} alt="" />
                     <DarkOverlay />

                     <Overlay>
                        <Flex gap={10} align="center">
                           <Flex vertical gap={10} align="center">
                              <StyledEyeOutlined />
                              <p
                                 className="info-text"
                                 style={{ color: 'white' }}
                              >
                                 Посмотреть
                              </p>
                           </Flex>

                           <Flex vertical gap={10} align="center">
                              <StyledRightSquareOutlined />
                              <p
                                 className="info-text"
                                 style={{ color: 'white' }}
                              >
                                 Подробнее
                              </p>
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
   padding: 80px 75px;
   max-width: 1600px;

   .main-image {
      object-fit: cover;
      height: auto;
      max-height: 400px;
      max-width: 100%;
      min-width: 700px;
      width: 100%;
      border-radius: 8px;
      object-position: top;
   }

   .main-title {
      margin: 60px 10px 10px;
      font-size: 50px;
   }
`

const ImageWrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   width: 300px;
   height: 260px;
   object-fit: cover;
   margin: 10px;

   .info-text {
      font-size: 13px;
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

   @media (max-width: 768px) {
      img {
         height: auto;
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
   border-radius: 8px;

   ${ImageWrapper}:hover & {
      opacity: 1;
      bottom: 0;
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
   background: rgba(0, 0, 0, 0.277);
   opacity: 0;
   transition: opacity 0.3s ease;
   border-radius: 10px;
   transition: transform 0.3s ease;
   border-radius: 8px;

   ${ImageWrapper}:hover & {
      opacity: 1;
      transform: scale(1.03);
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
