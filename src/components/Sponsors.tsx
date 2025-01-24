import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { sponsorsData } from '../configs'

const Sponsors = () => {
   return (
      <StyledContainer>
         <h1 className="main-title">Наши спонсоры</h1>

         <Swiper
            loop={true}
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
                  slidesPerView: 4,
               },
               1024: {
                  slidesPerView: 4,
               },
               1440: {
                  slidesPerView: 5,
               },
               1600: {
                  slidesPerView: 6,
               },
            }}
         >
            {sponsorsData.map((sponsor) => (
               <SwiperSlide key={sponsor.id}>
                  <a href={sponsor.link}>
                     <img height="auto" src={sponsor.img} alt={sponsor.alt} />
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
      padding: 60px 20px 0;
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
      width: 100px;
      height: auto;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s ease;
   }

   .swiper-slide img:hover {
      transform: translateY(-6px);
   }
`
