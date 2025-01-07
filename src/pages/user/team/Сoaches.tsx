import styled from 'styled-components'
import { coaches } from '../../../configs'

const Сoaches = () => {
   return (
      <StyledContainer>
         {coaches.map(({ name, surename, position, img }) => (
            <StyledCard>
               <img className="coach-photo" src={img} alt="Дмитрий Комбаров" />
               <h2 className="coach-name">{name}</h2>
               <h1 className="coach-surname">{surename}</h1>
               <p className="coach-position">{position}</p>
            </StyledCard>
         ))}
      </StyledContainer>
   )
}

export default Сoaches

const StyledContainer = styled.section`
   max-width: 1600px;
`

const StyledCard = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   color: white;
   text-align: center;
   padding: 40px;
   border-radius: 15px;

   .coach-photo {
      width: 300px;
      height: auto;
      border-radius: 10px;
      margin-bottom: 20px;
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
      font-size: 18px;
      font-weight: 300;
      margin: 0;
   }

   /* Optional: Add snowflake animation */
   &::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100%;
      height: 100%;
      background: url('path/to/snowflake.png') no-repeat;
      opacity: 0.5;
      animation: snowAnimation 10s linear infinite;
   }

   @keyframes snowAnimation {
      0% {
         transform: translateY(0);
      }
      100% {
         transform: translateY(100%);
      }
   }
`
