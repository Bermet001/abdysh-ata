import { useEffect } from 'react'
import styled from 'styled-components'
import { getAcademiaAdvantages } from '../../store/slice/history/historyThunk'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { Flex } from 'antd'

const Card = ({ icon, text }: { icon: string; text: string }) => (
   <CardWrapper>
      <IconWrapper loading="lazy" width={50} height={50} src={icon} alt={text} />
      <CardText>{text}</CardText>
   </CardWrapper>
)
const Cards = () => {
   const { advanteges } = useAppSelector((state) => state.history)
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(getAcademiaAdvantages())
   }, [dispatch])
   return (
      <AcademyInfoSection>
         <SectionTitle className="main-title">Наша академия – это</SectionTitle>
         <Flex wrap justify="center" gap={20} align="center">
            {advanteges?.map((card) => (
               <Card key={card?.id} icon={card?.icon} text={card?.title} />
            ))}
         </Flex>
      </AcademyInfoSection>
   )
}
export default Cards

const AcademyInfoSection = styled.section`
   padding: 20px 75px;
   background-color: #fff;
   max-width: 1600px;
   margin: 0 auto;
   @media (max-width: 1024px) {
      padding: 0 30px;
   }
`
const SectionTitle = styled.h2`
   color: #000;
   margin-top: 30px;
   font-weight: bold;
`
const CardWrapper = styled.div`
   border: 1px solid #e0e0e0;
   padding: 20px;
   width: 100%;
   max-width: 270px;
   height: 180px;
   text-align: start;
   background-color: #fff;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   @media (max-width: 768px) {
      max-width: 300px;
   }
`
const IconWrapper = styled.img`
   margin-bottom: 20px;
`
const CardText = styled.p`
   font-size: 20px;
   font-weight: 600;
   line-height: 1.5;
   color: #000;
   @media (max-width: 480px) {
      font-size: 16px;
   }
`
