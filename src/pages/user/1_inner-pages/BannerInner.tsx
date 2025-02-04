import { useParams } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import Sponsors from '../../../components/Sponsors'
import ProductSlider from '../../../components/Products'
import MatchInfo from '../../../components/MatchInfo'
import { banners } from '../../../configs'

interface Banner {
   id: number
   title: string
   subtitle: string
   description: string
   additionalText: string
   imageUrl: string
}

const BannerInner: FC = () => {
   window.scrollTo(0, 0)
   const { id } = useParams<{ id: string }>()
   const [bannerData, setBannerData] = useState<Banner | null>(null)

   useEffect(() => {
      const data = banners.find((banner) => banner.id.toString() === id)
      setBannerData(data || null)
   }, [id])

   if (!bannerData) {
      return <LoadingMessage>Loading...</LoadingMessage>
   }

   return (
      <BannerSection>
         <BannerImage src={bannerData.imageUrl} alt={bannerData.title} />
         <Overlay />

         <BannerContent>
            <h2 className="banner-title">{bannerData.title}</h2>

            <p>{bannerData.description}</p>
            <AdditionalText>{bannerData.additionalText}</AdditionalText>
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
`

const LoadingMessage = styled.div`
   text-align: center;
   font-size: 24px;
   margin-top: 50px;
`

const AdditionalText = styled.p`
   margin-top: 10px;
   font-size: 18px;
   line-height: 1.5;
`
