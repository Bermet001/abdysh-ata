import Slider from '../components/Slider'
import MatchInfo from '../components/MatchInfo'
import Sponsors from '../components/Sponsors'
import Gallery from '../components/Gallery'
import VictoryBlock from '../components/VictoryBlock'
import ProductSlider from '../components/Products'
import News from '../components/News'
import { FC } from 'react'
import Team from '../components/Team'

const Landing: FC = () => (
   <>
      <main>
         <Slider />
         <MatchInfo />
         <ProductSlider />
         <News />
         <Gallery />
         <Team />
         <VictoryBlock />
         <Sponsors />
      </main>
   </>
)

export default Landing
