import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useEffect } from 'react'
import { getPartners } from '../store/slice/partners/partnersThunk'

const Sponsors = () => {
   const { partners } = useAppSelector((state) => state.partner)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getPartners())
   }, [dispatch])

   return (
      <StyledContainer>
         <h2 className="main-title">Наши спонсоры</h2>

         <Swiper
            loop={partners.length > 4}
            spaceBetween={30}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
               200: {
                  slidesPerView: 3,
               },
               768: {
                  slidesPerView: 3,
               },
               1024: {
                  slidesPerView: 3,
               },
               1440: {
                  slidesPerView: 4,
               },
               1600: {
                  slidesPerView: 4,
               },
            }}
         >
            {partners?.map((sponsor) => (
               <SwiperSlide key={sponsor.id}>
                  <a aria-label="ссылка на сайтс спонсора" href={sponsor.link}>
                     <img
                        width="200px"
                        height="100%"
                        src={sponsor.image}
                        alt={sponsor.title}
                     />
                  </a>
               </SwiperSlide>
            ))}
         </Swiper>
      </StyledContainer>
   )
}

export default Sponsors

const StyledContainer = styled.section`
   padding: 0 0 60px 0;
   text-align: center;
   max-width: 1600px;
   margin: 0 auto;

   @media (max-width: 1024px) {
      padding: 60px 20px 40px;
   }

   @media (max-width: 480px) {
      padding: 40px 20px 25px;
   }

   .swiper {
      width: 100%;
      height: 100%;
   }

   .swiper-slide {
      text-align: center;
      font-size: 18px;

      display: flex;
      justify-content: center;
      align-items: center;
   }

   .swiper-slide img {
      display: block;
      padding: 10px;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s ease;

      @media (max-width: 680px) {
         width: 130px;
      }

      @media (max-width: 400px) {
         width: 100px;
      }
   }

   .swiper-slide img:hover {
      transform: translateY(-6px);
   }
`
