import { ConfigProvider, Slider } from 'antd'
import Footer from './layout/Footer'
import Sponsors from './components/Sponsors'
import VictoryBlock from './components/VictoryBlock'
import Gallery from './components/Gallery'
import ProductSlider from './components/Products'
import MatchInfo from './components/MatchInfo'
import Header from './layout/Header'

const App = () => (
   <ConfigProvider
      theme={{
         token: {
            colorPrimary: '#00a64f',
            colorPrimaryHover: '#00b959',
            borderRadius: 5,
            fontFamily: 'Lato, sans-serif',
         },

         components: {
            Select: {
               colorBgContainer: '#00a64f ',
            },
            Button: {
               colorLink: '#909CB5',
               borderRadius: 3,
            },
         },
      }}
   >
      {/* <AppRouter /> */}
      <Header />
      <Slider />
      <MatchInfo />
      <ProductSlider />
      <Gallery />
      <VictoryBlock />
      <Sponsors />
      <Footer />
   </ConfigProvider>
)

export default App
