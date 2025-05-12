import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { getHistoryAcademy } from '../../store/slice/history/historyThunk'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Flex } from 'antd'

const Academy = () => {
   const { slug } = useParams<{ slug: string }>()
   const { academyHistory } = useAppSelector((state) => state.history)
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(getHistoryAcademy())
   }, [dispatch, slug])
   const history = academyHistory?.length > 0 ? academyHistory[0] : null
   return (
      <BannerContainer banner={history?.banner}>
         <Flex
            justify="space-between"
            align="center"
            className="second-academy-container"
            style={{ maxWidth: '1600px' }}
         >
            <BannerContent>
               <div>
                  <div
                     dangerouslySetInnerHTML={{
                        __html: history?.contend || '',
                     }}
                  />
                  <div
                     dangerouslySetInnerHTML={{
                        __html: history?.content_end || '',
                     }}
                  />
               </div>
            </BannerContent>
            <PlayerImage loading="lazy" src={history?.image} alt="Player" />
         </Flex>
      </BannerContainer>
   )
}

export default Academy

const BannerContainer = styled.div<{ banner: string | undefined }>`
   position: relative;
   height: max-content;
   background-image: url(${(props) => props.banner});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   padding: 0 50px;
   padding-top: 30px;
   &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
   }
   @media (max-width: 768px) {
      .second-academy-container {
         flex-direction: column;
         height: auto;
      }
      padding: 30px 20px;
   }
   @media (max-width: 480px) {
      padding: 20px 15px;
   }
`
const BannerContent = styled.div`
   position: relative;
   z-index: 2;
   color: white;
   max-width: 50%;
   p {
      font-size: 22px;
      line-height: 1.5;
      margin-bottom: 30px;
      strong {
         font-size: 50px;
      }
   }
   @media (max-width: 1000px) {
      max-width: 100%;
      p {
         font-size: 18px;
         margin-bottom: 20px;
         strong {
            font-size: 35px;
         }
      }
   }
   @media (max-width: 480px) {
      p {
         font-size: 16px;
         margin-bottom: 15px;
         strong {
            font-size: 23px;
         }
      }
   }
`
const PlayerImage = styled.img`
   position: relative;
   z-index: 3;
   width: auto;
   height: 700px;
   object-fit: contain;
   padding-right: 10%;
   @media (max-width: 1200px) {
      height: 650px;
      padding-right: 4%;
   }
   @media (max-width: 900px) {
      height: 550px;
      margin-top: 20px;
      padding-right: 7%;
   }
   @media (max-width: 480px) {
      margin-top: 0px;
      padding-right: 0;
      height: 300px;
   }
`
