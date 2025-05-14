import { FC, useEffect } from 'react'
import { Carousel, Button, Flex, Skeleton } from 'antd'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/store'
import { BANNER_THUNK } from '../store/slice/banner/bannerThunk'

const Slider: FC = () => {
   const { banners, isLoading } = useAppSelector((state) => state.banner)
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(BANNER_THUNK.getBanners())
   }, [dispatch])
   return (
      <section>
         <StyledCarousel
            dots={false}
            autoplay
            arrows
            autoplaySpeed={2000}
            infinite

            aria-hidden="false"
         >
            {isLoading
               ? [...Array(3)].map((_, index) => <SkeletonImage key={index} />)
               : banners?.map((item, index) => (
                    <div className="main-container" key={index}>
                       <Overlay />
                       <img
                          src={item?.image}
                          alt={`Slide ${index + 1}`}
                          width="100%"
                          height="100%"
                          loading='lazy'
                       />
                       <Flex align="start" vertical className="content">
                          <h2>{item?.title}</h2>
                          <NavLink to={`/banner/${item?.slug}`}>
                             <StyledButtonView
                                aria-hidden="true"
                                type="primary"
                             >
                                Читать дальше
                             </StyledButtonView>
                          </NavLink>
                       </Flex>
                    </div>
                 ))}
         </StyledCarousel>
      </section>
   )
}

export default Slider
const StyledCarousel = styled(Carousel)`
   color: white;
   .slick-slide {
      height: 600px;
      position: relative;
   }
   .slick-slide img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
   }
   .content {
      position: relative;
      z-index: 2;
      top: 50px;
      color: white;
      max-width: 1600px;
      margin: 0 auto;
   }
   .content h2 {
      font-size: 60px;
      margin-bottom: 50px;
      color: white;
      width: 580px;
      line-height: 1;
   }
   .main-container {
      padding: 120px 75px;
   }

   .slick-prev,
.slick-next {
   z-index: 5;
   width: 30px;
   height: 30px;
   background-color: rgba(237, 90, 12, 0.8);
   border-radius: 50%;
   display: flex !important;
   align-items: center;
   justify-content: center;
   transition: background 0.3s ease;
}

.slick-prev::before,
.slick-next::before {
   font-size: 30px;
   color: white;
   opacity: 1;
}

.slick-prev:hover,
.slick-next:hover {
   background-color: rgba(237, 90, 12, 1);
}

.slick-prev::after {
   left: 11px;
   top:10px !important;
}
.slick-next::after { 
   left: 6px !important;
   top:10px !important;
}

   @media (max-width: 1000px) {
      .slick-slide {
         height: 500px;
      }
      .content h2 {
         font-size: 50px;
         width: 60%;
      }
      .main-container {
         padding: 80px 20px;
      }
   }
   @media (max-width: 800px) {
      .slick-slide {
         height: 400px;
      }
      .content {
         top: 40px;
      }
      .content h2 {
         font-size: 40px;
         margin-bottom: 30px;
         width: 70%;
      }
      .main-container {
         padding: 60px 20px;
      }
   }
   @media (max-width: 600px) {
      .slick-slide {
         height: 300px;
      }
      .content h2 {
         font-size: 30px;
         margin-bottom: 20px;
      }
      .main-container {
         padding: 40px 20px;
      }
   }
   @media (max-width: 500px) {
      .content h2 {
         font-size: 28px;
         margin-bottom: 10px;
         width: 70%;
      }
   }
`
const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.237);
   z-index: 1;
`
const StyledButtonView = styled(Button)`
   padding: 23px 45px;
   border: none;
   color: white;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 500;
   @media (max-width: 900px) {
      padding: 20px 35px;
      font-size: 14px;
   }
   @media (max-width: 600px) {
      padding: 10px 20px;
      font-size: 10px;
   }
`
const SkeletonImage = styled(Skeleton)`
   height: 600px;
   width: 100%;
   border-radius: 10px;
   background: rgba(240, 240, 240, 0.5);
`
