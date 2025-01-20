import styled from 'styled-components'
import { sponsorsData } from '../../configs'
import { Flex } from 'antd'
import bgImage from '../../assets/images/partners-baner/partners-image.jpg'

const Partners = () => {
   return (
      <StyledContainer>
         <BackgroundSection>
            <div className="first-part">
               <Content>
                  <h1 className="main-title">Спонсоры Абдыш ата</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Architecto, expedita aperiam. Enim quod iusto perspiciatis
                     voluptates fuga ad placeat ea amet ipsam obcaecati
                     cupiditate quidem, quisquam voluptatum adipisci, repellat
                     odit?
                  </p>
               </Content>
            </div>
         </BackgroundSection>

         <Flex gap={40} justify="center" wrap className="partners-container">
            {sponsorsData.map((sponsor) => (
               <SponsorItem key={sponsor.id}>
                  <a href={sponsor.link}>
                     <img
                        height="auto"
                        width={300}
                        src={sponsor.img}
                        alt={sponsor.alt}
                     />
                  </a>
               </SponsorItem>
            ))}
         </Flex>
      </StyledContainer>
   )
}

export default Partners

const StyledContainer = styled.main`
   max-width: 1600px;
   margin: 0 auto;
   color: white;

   .partners-container {
      padding: 50px 300px 150px;
   }

   .first-part {
      background: linear-gradient(to top, #ffffff, transparent 50%);
      height: 100%;
   }
`

const BackgroundSection = styled.div`
   position: relative;
   height: 500px;
   padding-top: 200px;
   text-align: center;
   background-image: url(${bgImage});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   margin: 0px 0;
`

const Content = styled.div`
   position: relative;
   z-index: 2;

   .main-title {
      margin-bottom: 5px;
      text-transform: uppercase;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      transition: color 0.3s ease;
   }

   > p {
      width: 440px;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 80px;
      font-size: 13px;
      color: white;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      transition: color 0.3s ease;
   }

   &:hover .main-title,
   &:hover > p {
      color: #ffcc00;
   }
`

const SponsorItem = styled.div`
   flex: 0 0 calc(18% - 40px);
   max-width: calc(25% - 40px);
   display: flex;
   align-items: center;
   justify-content: center;
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-5px);
   }

   img {
      display: block;
      padding: 10px;
      width: 100px;
      height: auto;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s ease;
   }

   img:hover {
      transform: translateY(-6px);
   }

   @media (max-width: 768px) {
      flex: 0 0 calc(50% - 20px);
      max-width: calc(50% - 20px);
   }

   @media (max-width: 480px) {
      flex: 0 0 100%;
      max-width: 100%;
   }
`
