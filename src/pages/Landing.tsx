import Slider from '../components/Slider'
import MatchInfo from '../components/MatchInfo'
import Sponsors from '../components/Sponsors'
import Gallery from '../components/Gallery'
import VictoryBlock from '../components/VictoryBlock'
import ProductSlider from '../components/Products'
import News from '../components/News'
import { FC } from 'react'
import Team from '../components/Team'
import Stories from '../components/Stories'

const Landing: FC = () => {
   return (
      <>
         <Slider />
         <MatchInfo />
         <Stories />
         <ProductSlider />
         <News />
         <Gallery />
         <Team />
         <VictoryBlock />
         <Sponsors />
      </>
   )
}

export default Landing
