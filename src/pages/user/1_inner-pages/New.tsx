import { FC, useEffect } from 'react'
import { Typography, Card, Flex } from 'antd'
import styled from 'styled-components'
import News from '../../../components/News'
import image from '../../../assets/images/banner.avif'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { NEWS_THUNK } from '../../../store/slice/news/newsThunk'
import { useParams } from 'react-router-dom'

const { Title, Paragraph } = Typography

const New: FC = () => {
   window.scrollTo(0, 0)

   const { slug } = useParams<{ slug: string }>()
   const { currentNews } = useAppSelector((state) => state.news)
   console.log(slug)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(NEWS_THUNK.getNew(slug))
   }, [dispatch, slug])

   return (
      <StyledContainer>
         <BackgroundContainer image={currentNews?.image || image} />
         <ContentCard>
            <Flex gap={20} vertical align="center">
               <Flex vertical>
                  <StyledTitle level={1}>{currentNews?.title}</StyledTitle>

                  <Flex justify="space-between" className="date-info">
                     <Paragraph>
                        <a style={{ color: '#888', fontSize: '0.9em' }} href="">
                           fcabdyshata.com
                        </a>

                        <span style={{}}>{currentNews?.date}</span>
                     </Paragraph>
                     <Paragraph className="sport-type">
                        {currentNews?.category.title}
                     </Paragraph>
                  </Flex>

                  <StyledParagraph
                     dangerouslySetInnerHTML={{
                        __html: currentNews?.content || '',
                     }}
                  />
               </Flex>
            </Flex>
         </ContentCard>

         <News />
         <br />
         <br />
      </StyledContainer>
   )
}

export default New

const StyledContainer = styled.main`
   margin-bottom: 40px;
   margin: 0 auto;
`

const BackgroundContainer = styled.div<{ image: string }>`
   background-image: url(${(props) => props.image});
   background-size: cover;
   background-repeat: no-repeat;
   background-attachment: fixed;
   min-height: 70vh;
`

const ContentCard = styled(Card)`
   border-radius: 20px;
   max-width: 700px;
   margin: 0 auto;
   border: none;
   text-align: start;

   .date-info {
      width: 100%;
      border-bottom: 0.4px solid #ccc;
      margin-bottom: 30px;

      span {
         text-transform: uppercase;
         font-weight: 600;
         color: #04a54f;
         font-size: 0.9em;
      }

      .sport-type {
         text-transform: uppercase;
         font-size: 0.9em;
         font-weight: 600;
         color: #04a54f;
      }
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
