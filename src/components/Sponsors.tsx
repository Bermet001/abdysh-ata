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
   const duplicatedPartners =
      partners?.length < 5 ? [...partners, ...partners].slice(0, 5) : partners
   return (
      <div
         style={{
            background: '#e2e2e2',
         }}
      >
         <StyledContainer>
            <h2 className="main-title-center">Наши спонсоры</h2>
            <Swiper
               loop={duplicatedPartners.length > 4}
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
               {duplicatedPartners.map((sponsor, index) => (
                  <SwiperSlide key={`${sponsor?.id}-${index}`}>
                     <a
                        key={sponsor?.id}
                        aria-label="ссылка на сайт спонсора"
                        href={sponsor?.link}
                     >
                        <img
                           width="50px"
                           height={53}
                           loading="lazy"
                           src={sponsor?.image}
                           alt={sponsor?.title}
                        />
                     </a>
                  </SwiperSlide>
               ))}
            </Swiper>
         </StyledContainer>
      </div>
   )
}

export default Sponsors

const StyledContainer = styled.section`
   padding: 120px 75px 60px 75px;
   max-width: 1600px;
   margin: 0 auto;
   width: 100%;
   min-height: 100px;
   @media (max-width: 1024px) {
      padding: 40px 20px 25px;
   }
   img {
      object-fit: contain;
   }
   .swiper-slide img {
      display: block;
      padding: 10px;
      height: auto;
      width: 180px;
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
