import Slider from '../components/Slider'
import MatchInfo from '../components/MatchInfo'
import Sponsors from '../components/Sponsors'
import Gallery from '../components/Gallery'
import VictoryBlock from '../components/VictoryBlock'
import ProductSlider from '../components/Products'
import News from '../components/News'
import { FC } from 'react'
import Team from '../components/Team'
import { Helmet } from 'react-helmet-async'
import Infrastructures from './user/Infrastructure/Infrastructures'
import TournamentTable from './user/rating-table/TournamentTable'
import AcademyLanding from './user/AcademyLanding'

const Landing: FC = () => (
   <>
      <Helmet>
         <title>Абдыш ата главная страница</title>
         <meta
            name="description"
            content="Следите за нашими последними событиями и достижениями. Просматривайте галерею, новости и информацию о матчах на нашей главной странице."
         />
         <meta
            name="keywords"
            content="спорт, новости,Абдыш ата, матчи, футбольная команда, футбол"
         />
         <meta name="author" content="Абдыш ата" />
      </Helmet>

      <main>
         <Slider />
         <MatchInfo />
         <TournamentTable />
         <AcademyLanding />
         <Infrastructures />
         <Team />
         <ProductSlider />
         <News />
         <Gallery />
         <VictoryBlock />
         <Sponsors />
      </main>
   </>
)

export default Landing
