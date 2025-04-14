import { Flex } from 'antd'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import background1 from '../../../assets/images/banner-rating.png'
import { getPartners } from '../../../store/slice/partners/partnersThunk'
import TournamentTable from './TournamentTable'

const Rating = () => {
   const { slug } = useParams<{ slug: string }>()
   window.scrollTo(0, 0)
   const { partners } = useAppSelector((state) => state.partner)
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(getPartners())
   }, [dispatch, slug])
   return (
      <StyledContainer>
         <div className="second-container-table">
            <Flex className="partners" align="center" justify="center">
               {partners?.slice(0, 3).map((item) => (
                  <a href={item.link} key={item.id}>
                     <div className="partner">
                        <img src={item.image} alt={item.title} width={70} />
                     </div>
                  </a>
               ))}
            </Flex>
            <br />
            <TournamentTable />
         </div>
      </StyledContainer>
   )
}

export default Rating
const StyledContainer = styled.main`
   padding: 100px 75px;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-image: url(${background1});
   .second-container-table {
      margin: 0 auto;
      max-width: 1600px;
   }
   @media (max-width: 1024px) {
      padding: 100px 20px;
   }
   @media (max-width: 480px) {
      padding: 100px 5px;
   }
   h1 {
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      margin-bottom: 20px;
   }
   .partner {
      background-color: rgba(255, 255, 255, 0.603);
      border-radius: 8px;
      padding: 10px;
      margin-right: 10px;
      display: inline-block;
      transition: filter 0.3s;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      height: 70px;
      display: flex;
      align-items: center;
   }
`
