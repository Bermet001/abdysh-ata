import styled, { keyframes } from 'styled-components'
import { Flex, Typography } from 'antd'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { useEffect } from 'react'
import { getHistory } from '../../store/slice/history/historyThunk'
import { Helmet } from 'react-helmet-async'

const { Paragraph } = Typography

const History = () => {
   window.scrollTo(0, 0)
   const { history } = useAppSelector((state) => state.history)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getHistory())
   }, [dispatch])

   const history_text = history.length > 0 ? history[0] : null

   return (
      <>
         <Helmet>
            <title>История Абдыш ата</title>
            <meta
               name="description"
               content="Узнайте о богатой истории и достижениях Абдыш ата, самого любимого многопрофильного спортивного клуба в мире."
            />
            <meta
               name="keywords"
               content="история, Абдыш ата, спортивный клуб"
            />
            <meta name="author" content="Абдыш ата" />
            <meta property="og:title" content="История Абдыш ата" />
            <meta
               property="og:description"
               content="Узнайте о богатой истории и достижениях Абдыш ата."
            />
            <meta property="og:url" content="http://mysite.com/history" />
            <meta property="og:type" content="website" />
            <script type="application/ld+json">
               {`
                  {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "История Абдыш ата",
                    "description": "Узнайте о богатой истории и достижениях Абдыш ата.",
                    "url": "http://mysite.com/history"
                  }
               `}
            </script>
         </Helmet>
         <StyledContainer>
            <BackgroundSection $image={history_text?.banner}>
               <Overlay />

               <div className="first-part">
                  <Content>
                     <h1 className="main-title">{history_text?.title}</h1>

                     <p>{history_text?.subtitle}</p>
                  </Content>
               </div>
            </BackgroundSection>

            <Flex vertical className="main-part">
               <h1 className="main-title">{history_text?.title}</h1>

               <StyledParagraph>
                  <div
                     dangerouslySetInnerHTML={{
                        __html: history_text?.content || '',
                     }}
                  />
               </StyledParagraph>

               <br />
               <br />
               <br />
               <br />
               <Flex vertical>
                  <h3 className="main-title">{history_text?.subtitle}</h3>
                  <StyledParagraph>
                     <Flex className="second-block">
                        <div
                           dangerouslySetInnerHTML={{
                              __html: history_text?.content_end || '',
                           }}
                        />

                        <img
                           src={history_text?.image}
                           alt={history_text?.title}
                        />
                     </Flex>
                  </StyledParagraph>
               </Flex>
            </Flex>
         </StyledContainer>
      </>
   )
}

export default History

const fadeInUp = keyframes`
0% {
    opacity: 0;
    transform: translateY(20px);
}

100% {
    opacity: 1;
    transform: translateY(0);
}
`

const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.5);
   z-index: 1;
`
const StyledContainer = styled.main`
   max-width: 1600px;
   margin: 0 auto;

   .partners-container {
      padding: 50px 0 150px;
   }

   .first-part {
      color: white;
      background: linear-gradient(to top, #ffffff, transparent 50%);
      height: 100%;
      position: relative;
      z-index: 9;
   }

   .main-part {
      padding: 75px;
      animation-name: ${fadeInUp};
      animation-delay: 0.5s;

      @media (max-width: 1024px) {
         padding: 20px;

         .second-block {
            flex-direction: column;

            svg {
               width: 100%;
               height: auto;
            }
         }
      }

      .main-title {
         margin-bottom: 10px;
         text-transform: uppercase;
         transition: color 0.3s ease;
         animation-name: ${fadeInUp};
         animation-delay: 0.5s;
         font-size: 2rem;

         @media (max-width: 768px) {
            font-size: 1.8rem;
         }

         @media (max-width: 480px) {
            font-size: 1.5rem;
         }
      }
   }

   .last {
      width: 70%;

      @media (max-width: 768px) {
         width: 100%;
      }
   }
`

const BackgroundSection = styled.div<{ $image: string | undefined }>`
   position: relative;
   height: 500px;
   padding-top: 200px;
   text-align: center;
   background-image: url(${(props) => props.$image});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   margin: 0;

   @media (max-width: 768px) {
      height: 400px;
      padding-top: 150px;
   }

   @media (max-width: 480px) {
      height: 300px;
      padding-top: 100px;
   }
`

const Content = styled.div`
   position: relative;
   z-index: 2;

   .main-title {
      margin-bottom: 5px;
      text-transform: uppercase;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      transition: color 0.3s ease;
      animation-name: ${fadeInUp};
      animation-delay: 0.5s;
   }

   > p {
      width: 440px;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 80px;
      font-size: 15px;
      color: white;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      transition: color 0.3s ease;

      @media (max-width: 768px) {
         width: 80%;
         font-size: 14px;
      }

      @media (max-width: 480px) {
         font-size: 12px;
      }
   }

   &:hover .main-title,
   &:hover > p {
      color: #ffcc00;
   }
`

const StyledParagraph = styled(Paragraph)`
   font-size: 1rem;
   color: #808080;
   font-weight: 300;

   @media (max-width: 768px) {
      font-size: 0.9rem;
   }

   @media (max-width: 480px) {
      font-size: 0.8rem;
   }
`
