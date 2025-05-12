import { Skeleton } from 'antd'
import MatchCard from './MatchCard'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useEffect } from 'react'
import { getAllMatches } from '../store/slice/matches/matchesThunk'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'

const MatchInfo = () => {
   const { allMatches, isLoading } = useAppSelector((state) => state.matches)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getAllMatches())
   }, [dispatch])

   return (
      <StyledContainer>
         {isLoading ? (
            <SkeletonWrapper>
               {[...Array(4)].map((_, i) => (
                  <SkeletonMatchCard key={i} />
               ))}
            </SkeletonWrapper>
         ) : (
            <Swiper
               slidesPerView={4}
               spaceBetween={10}
               pagination={{ clickable: true }}
               breakpoints={{
                  1200: { slidesPerView: 4 },
                  992: { slidesPerView: 3 },
                  768: { slidesPerView: 2.8 },
                  0: { slidesPerView: 2 },
               }}
            >
               {allMatches?.map((match, index) => (
                  <SwiperSlide key={index}>
                     <MatchCard {...match} />
                  </SwiperSlide>
               ))}
            </Swiper>
         )}
      </StyledContainer>
   )
}

export default MatchInfo

const StyledContainer = styled.section`
   margin: 0 auto;
   margin-top: -100px;
   position: relative;
   z-index: 1;
   width: 100%;
   max-width: 1600px;
   @media (max-width: 1450px) {
      padding: 0 75px;
   }
   
   @media (max-width: 726px) {
      padding: 0 20px;
   }
   @media (max-width: 600px) {
      margin-top: -60px;
   }
`

const SkeletonWrapper = styled.div`
   display: flex;
   gap: 15px;
   overflow-x: auto;
   /* height: 210px; */
`

const SkeletonMatchCard = styled(Skeleton)`
   width: 270px;
   /* height: 120px; */
   border-radius: 10px;
   flex-shrink: 0;
`
