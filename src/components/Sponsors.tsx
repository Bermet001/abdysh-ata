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
         <h2 className="main-title-center">Наши спонсоры</h2>

         <Swiper
            loop={partners.length > 4}
            spaceBetween={30}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
               200: { slidesPerView: 3 },
               768: { slidesPerView: 3 },
               1024: { slidesPerView: 3 },
               1440: { slidesPerView: 4 },
               1600: { slidesPerView: 4 },
            }}
         >
            {partners?.map((sponsor) => (
               <a
                  key={sponsor.id}
                  aria-label="ссылка на сайтс спонсора"
                  href={sponsor.link}
               >
                  <SwiperSlide key={sponsor.id}>
                     <img
                        loading="lazy"
                        src={sponsor.image}
                        alt={sponsor.title}
                     />
                  </SwiperSlide>
               </a>
            ))}
         </Swiper>
      </StyledContainer>
   )
}

export default Sponsors

const StyledContainer = styled.section`
   padding: 0 0 60px 0;
   max-width: 1600px;
   margin: 0 auto;
   min-height: 100px;

   @media (max-width: 1024px) {
      padding: 40px 20px 25px;
   }

   .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .swiper-slide img {
      display: block;
      padding: 10px;
      height: auto;
      width: 230px;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s ease;

      @media (max-width: 800px) {
         width: 150px;
         height: auto;
      }

      @media (max-width: 500px) {
         width: 100px;
         height: auto;
      }

      &:hover {
         transform: translateY(-6px);
      }
   }
`
