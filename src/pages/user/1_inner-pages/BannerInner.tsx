import { useParams } from 'react-router-dom'
import { FC, useEffect } from 'react'
import styled from 'styled-components'
import Sponsors from '../../../components/Sponsors'
import ProductSlider from '../../../components/Products'
import MatchInfo from '../../../components/MatchInfo'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { BANNER_THUNK } from '../../../store/slice/banner/bannerThunk'

const BannerInner: FC = () => {
   window.scrollTo(0, 0)
   const { slug } = useParams<{ slug: string }>()
   const { banner } = useAppSelector((state) => state.banner)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(BANNER_THUNK.getBanner(slug))
   }, [slug, dispatch])

   return (
      <BannerSection>
         <BannerImage src={banner.image} alt={banner.title} />
         <Overlay />

         <BannerContent>
            <h2 className="banner-title">{banner.title}</h2>
            <p
               dangerouslySetInnerHTML={{
                  __html: banner?.subtitle || '',
               }}
            />
         </BannerContent>
         <MatchInfo />

         <ProductSlider />

         <div className="space" />
         <Sponsors />
      </BannerSection>
   )
}

export default BannerInner

const BannerSection = styled.main`
   color: white;

   .banner-title {
      font-size: 60px;
      color: white;
      margin-bottom: 30px;
   }

   .space {
      margin-top: 130px;
   }

   @media (max-width: 600px) {
      .banner-title {
         font-size: 30px;
         margin-bottom: 20px;
      }
   }

   @media (max-width: 500px) {
      .banner-title {
         font-size: 28px;
         margin-bottom: 10px;
         width: 70%;
      }
   }
`

const BannerImage = styled.img`
   width: 100%;
   height: 560px;
   object-fit: cover;
`

const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 560px;
   background-color: rgba(0, 0, 0, 0.303);
   z-index: 1;
`

const BannerContent = styled.div`
   position: absolute;
   top: 42%;
   left: 33%;
   transform: translate(-50%, -50%);
   max-width: 800px;
   z-index: 2;

   @media (max-width: 600px) {
      padding: 30px;
      top: 24%;
   }
`
