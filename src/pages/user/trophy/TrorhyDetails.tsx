import { FC, useEffect } from 'react'
import { Typography, Card, Flex } from 'antd'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useParams } from 'react-router-dom'
import { getAchievement } from '../../../store/slice/ahievements/ahievementsThunk'

const { Title, Paragraph } = Typography

const New: FC = () => {
   window.scrollTo(0, 0)
   const { slug } = useParams<{ slug: string }>()
   const { currentAchievement } = useAppSelector((state) => state.achievements)
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(getAchievement(slug))
   }, [dispatch, slug])
   return (
      <StyledContainer>
         <BackgroundContainer image={currentAchievement?.image || null} />
         <ContentCard>
            <Flex>
               <Flex vertical>
                  <StyledTitle level={1}>
                     {currentAchievement?.title}
                  </StyledTitle>
                  <Flex justify="space-between" className="date-info">
                     <Paragraph className="sport-type">
                        {currentAchievement?.season}
                     </Paragraph>
                  </Flex>
                  <StyledParagraph
                     dangerouslySetInnerHTML={{
                        __html: currentAchievement?.content || '',
                     }}
                  />
               </Flex>
            </Flex>
         </ContentCard>
         <div className="box_container">
            <h3 className="main-title">Кадры с события</h3>
            <Flex wrap gap={15}>
               {currentAchievement?.images?.map((item) => (
                  <img src={item} alt="" />
               ))}
            </Flex>
         </div>
      </StyledContainer>
   )
}

export default New

const StyledContainer = styled.main`
   margin-bottom: 40px;
   margin: 0 auto;
   max-width: 1600px;
   @media (max-width: 600px) {
      margin-top: 65px;
   }
   img {
      width: 400px;
      border-radius: 10px;
   }
   .box_container {
      padding: 40px;
      padding-left: 20px;
   }
`
const BackgroundContainer = styled.div<{ image: string | null }>`
   background-image: url(${(props) => props.image});
   background-size: cover;
   background-repeat: no-repeat;
   min-height: 80vh;
   @media (max-width: 600px) {
      min-height: 45vh;
      background-position: center;
      background-attachment: scroll;
   }
`
const ContentCard = styled(Card)`
   border-radius: 20px;
   border: none;
   .date-info {
      width: 100%;
      border-bottom: 0.4px solid #ccc;
      margin-bottom: 30px;
   }
`
const StyledTitle = styled(Title)`
   text-align: start;
   color: red;
`
const StyledParagraph = styled.p`
   font-size: 1rem;
   color: #8e8e8e;
   font-weight: 300;
   margin-left: 20px;
`
