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
      object-position: top;
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
