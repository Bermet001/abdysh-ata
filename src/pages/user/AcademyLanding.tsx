import { FC, useEffect } from 'react'
import { Button, Flex, Skeleton } from 'antd'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { getAcademiaBanner } from '../../store/slice/tournamentAcademy/TournamentAcademyThunk'

const AcademyLanding: FC = () => {
   const { first, isLoading } = useAppSelector((state) => state.academy)
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(getAcademiaBanner())
   }, [dispatch])
   if (isLoading)
      <StyledSection>
         <SkeletonImage active />
      </StyledSection>
   if (!first || first.length === 0) {
      return
   }
   return (
      <StyledSection>
         {first?.map((item, index) => (
            <BannerContainer key={item?.banner || index}>
               <BannerImage loading="lazy" src={item?.banner} alt={item?.title} />
               <Overlay />
               <ContentWrapper>
                  <Title>{item?.title}</Title>
                  <NavLink to="/team/futbolnaya-akademiya">
                     <StyledButton type="primary">узнать больше</StyledButton>
                  </NavLink>
               </ContentWrapper>
            </BannerContainer>
         ))}
      </StyledSection>
   )
}

export default AcademyLanding
const StyledSection = styled.section`
   position: relative;
   width: 100%;
   overflow: hidden;
   /* max-width: 1600px; */
   margin: 0 auto;
`
const BannerContainer = styled.div`
   position: relative;
   height: 600px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 75px;
   overflow: hidden;
   @media (max-width: 1000px) {
      height: 500px;
      padding: 0 40px;
   }
   @media (max-width: 800px) {
      height: 400px;
      padding: 0 20px;
   }
   @media (max-width: 600px) {
      height: 300px;
      padding: 0 15px;
   }
`
const BannerImage = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   z-index: 1;
   transition: transform 0.5s ease;
   ${BannerContainer}:hover & {
      transform: scale(1.05);
   }
`
const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
   z-index: 2;
`
const ContentWrapper = styled(Flex)`
   position: relative;
   z-index: 3;
   flex-direction: column;
   align-items: flex-start;
   max-width: 1600px;
   width: 100%;
   margin: 0 auto;
   animation: fadeInUp 0.8s ease-out;
   @keyframes fadeInUp {
      from {
         opacity: 0;
         transform: translateY(30px);
      }
      to {
         opacity: 1;
         transform: translateY(0);
      }
   }
`
const Title = styled.h2`
   font-size: 60px;
   font-weight: 700;
   color: #fff;
   margin-bottom: 40px;
   max-width: 600px;
   line-height: 1.1;
   text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
   letter-spacing: 1px;
   @media (max-width: 1000px) {
      font-size: 48px;
      max-width: 500px;
   }
   @media (max-width: 800px) {
      font-size: 36px;
      max-width: 400px;
      margin-bottom: 30px;
   }
   @media (max-width: 600px) {
      font-size: 28px;
      max-width: 300px;
      margin-bottom: 20px;
   }
   @media (max-width: 500px) {
      font-size: 24px;
   }
`
const StyledButton = styled(Button)`
   padding: 12px 40px;
   font-size: 18px;
   font-weight: 600;
   height: auto;
   border-radius: 30px;
   background: #05a550;
   border: none;
   color: white;
   box-shadow: 0 4px 15px #05a55078;
   transition: all 0.3s ease;
   &:hover {
      background: #61e09c78;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px #05a550b3;
      color: white;
   }
   @media (max-width: 900px) {
      padding: 10px 30px;
      font-size: 16px;
   }
   @media (max-width: 600px) {
      padding: 8px 20px;
      font-size: 14px;
   }
`
const SkeletonImage = styled(Skeleton)`
   height: 600px;
   width: 100%;
   background: rgba(240, 240, 240, 0.5);
   .ant-skeleton-content {
      padding: 75px;
   }
   @media (max-width: 1000px) {
      height: 500px;
   }
   @media (max-width: 800px) {
      height: 400px;
   }
   @media (max-width: 600px) {
      height: 300px;
      .ant-skeleton-content {
         padding: 20px;
      }
   }
`
