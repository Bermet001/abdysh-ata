import { FC, useEffect } from 'react'
import { Typography, Card, Flex } from 'antd'
import styled from 'styled-components'
import image from '../../../assets/images/banner.avif'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { NEWS_THUNK } from '../../../store/slice/news/newsThunk'
import { useParams } from 'react-router-dom'

const { Title, Paragraph } = Typography

const New: FC = () => {
   window.scrollTo(0, 0)

   const { slug } = useParams<{ slug: string }>()
   const { currentNews } = useAppSelector((state) => state.news)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(NEWS_THUNK.getNew(slug))
   }, [dispatch, slug])

   return (
      <StyledContainer>
         <BackgroundContainer image={currentNews?.image || image} />
         <ContentCard>
            <Flex>
               <Flex vertical>
                  <StyledTitle level={1}>{currentNews?.title}</StyledTitle>

                  <Flex justify="space-between" className="date-info">
                     <Paragraph className="sport-type">
                        {currentNews?.category.title}
                     </Paragraph>
                  </Flex>

                  <StyledParagraph
                     dangerouslySetInnerHTML={{
                        __html:
                           currentNews?.content ||
                           'loreasdfasdfasjdhfas ajdh fajsdkfkal laksjhdfak aksdhjfa skdhfa ldksfjahsdf laksjdhfajksdha cdjadkschalksdjch',
                     }}
                  />
               </Flex>
            </Flex>
         </ContentCard>

         <div className="box_container">
            <h3 className="main-title">Кадры с события</h3>
            <Flex wrap gap={15}>
               {Array.from({ length: 4 }).map(() => (
                  <img src={image} alt="" />
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

   @media (max-width: 600px) {
      margin-top: 65px;
   }

   img {
      width: 400px;
      border-radius: 10px;
   }

   .box_container {
      padding: 40px;
   }
`

const BackgroundContainer = styled.div<{ image: string }>`
   background-image: url(${(props) => props.image});
   background-size: cover;
   background-repeat: no-repeat;
   background-attachment: fixed;
   min-height: 70vh;

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
`
