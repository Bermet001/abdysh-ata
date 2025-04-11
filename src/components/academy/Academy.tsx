import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { getHistoryAcademy } from '../../store/slice/history/historyThunk'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

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
         <PlayerImage src={history?.image} alt="Player" />
      </BannerContainer>
   )
}

export default Academy

const BannerContainer = styled.div<{ banner: string | undefined }>`
   position: relative;
   max-width: 1600px;
   height: 500px;
   background-image: url(${(props) => props.banner});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   display: flex;
   gap: 30px;
   align-items: center;
   justify-content: space-between;
   padding: 0 50px;

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
      flex-direction: column;
      height: auto;
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

   h1 {
      font-size: 36px;
      font-weight: bold;
      line-height: 1.2;
      margin-bottom: 20px;
   }

   p {
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 30px;
   }

   @media (max-width: 768px) {
      max-width: 100%;
      text-align: center;

      h1 {
         font-size: 28px;
         margin-bottom: 15px;
      }

      p {
         font-size: 16px;
         margin-bottom: 20px;
      }
   }

   @media (max-width: 480px) {
      h1 {
         font-size: 24px;
         margin-bottom: 10px;
      }

      p {
         font-size: 14px;
         margin-bottom: 15px;
      }
   }
`

const PlayerImage = styled.img`
   position: relative;
   z-index: 2;
   max-height: 100%;
   width: auto;
   height: 400px;
   object-fit: contain;

   @media (max-width: 768px) {
      height: 250px;
      margin-top: 20px;
   }

   @media (max-width: 480px) {
      display: none;
   }
`
