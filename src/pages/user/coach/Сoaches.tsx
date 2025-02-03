import styled from 'styled-components'
import { coaches } from '../../../configs'
import { Button, Flex } from 'antd'
import { NavLink } from 'react-router-dom'

const Сoaches = () => {
   return (
      <StyledContainer>
         <h1 className="main-title ">Тренерский штаб</h1>

         <Flex justify="space-around" wrap>
            {coaches.map(({ name, surename, position, img, id }) => (
               <StyledCard key={id}>
                  <div className="card-coach">
                     <img
                        className="coach-photo"
                        src={img}
                        alt={`${name} ${surename}`}
                     />

                     <h2 className="coach-name">{name}</h2>
                     <h2 className="coach-surname">{surename}</h2>
                     <p className="coach-position">{position}</p>

                     <Button type="primary" className="more-info-btn">
                        <NavLink to={`/coaches/${id}`}>
                           Смотреть профиль
                        </NavLink>
                     </Button>
                  </div>
               </StyledCard>
            ))}
         </Flex>
      </StyledContainer>
   )
}

export default Сoaches

const StyledContainer = styled.section`
   max-width: 1600px;
   margin: 0 auto;
`

const StyledCard = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   overflow: hidden;

   .card-coach {
      padding: 40px;
      transition: filter 0.3s ease;

      @media (max-width: 1400px) {
         padding: 0;
      }
   }

   &:hover .card-coach {
      .coach-photo,
      .coach-position {
         filter: blur(2px);
      }
   }

   .coach-photo {
      width: 350px;
      height: auto;
      margin-bottom: 20px;
      -webkit-box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
      -moz-box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
      box-shadow: inset 0px -186px 162px -200px rgba(0, 166, 79, 1);
   }

   .coach-name {
      font-size: 24px;
      font-weight: 400;
      margin: 0;
   }

   .coach-surname {
      font-size: 36px;
      font-weight: 700;
      margin: 0;
   }

   .coach-position {
      font-weight: 400;
      margin: 0;
      color: #d1d1d1;
   }

   .more-info-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-10%);
      padding: 20px 30px;
      border: none;
      color: white;
      cursor: pointer;
      opacity: 0;
      transition: top 0.5s ease, opacity 0.3s ease;
   }

   &:hover .more-info-btn {
      top: 65%;
      opacity: 1;
      transform: translate(-50%, -50%);
   }
`
