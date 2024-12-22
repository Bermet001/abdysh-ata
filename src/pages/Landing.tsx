import Header from '../layout/Header'
import Slider from '../components/Slider'
import MatchInfo from '../components/MatchInfo'
import Footer from '../layout/Footer'
import Sponsors from '../components/Sponsors'
import Gallery from '../components/Gallery'
import VictoryBlock from '../components/VictoryBlock'
import ProductSlider from '../components/Products'

const Landing = () => {
   return (
      <div>
         <Header />
         <Slider />
         <MatchInfo />
         <ProductSlider />
         <Gallery />
         <VictoryBlock />
         <Sponsors />
         <Footer />
      </div>
   )
}

export default Landing
