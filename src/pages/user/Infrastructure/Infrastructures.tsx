import { FC } from 'react'
import { Button, Card, Flex } from 'antd'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ArrowsAltOutlined, EnvironmentFilled } from '@ant-design/icons'
import { useAppSelector } from '../../../store/store'
interface StyledCardProps {
   bgimage: string
}

const Infrastructures: FC = () => {
   window.scrollTo(0, 0)
   const { infrastractures } = useAppSelector((state) => state.infrastracture)

   return (
      <main>
         <CollageContainer>
            {infrastractures?.map((item) => (
               <NavLink to={`/infrastructure/${item.slug}`} key={item.id}>
                  <StyledCard bgimage={item.image}>
                     <div className="ant-card-body block">
                        <h1>{item.title}</h1>
                        <Flex
                           gap={20}
                           className="info-block"
                           justify="space-between"
                           align="end"
                        >
                           <Flex vertical>
                              <p>
                                 <EnvironmentFilled /> {item.address}
                              </p>
                              <p>
                                 <ArrowsAltOutlined /> {item.weave} м
                              </p>
                           </Flex>
                           <StyledButton>Подробнее</StyledButton>
                        </Flex>
                     </div>
                  </StyledCard>
               </NavLink>
            ))}
         </CollageContainer>
      </main>
   )
}

export default Infrastructures

const CollageContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 20px;
   max-width: 1600px;
   margin: 80px auto;
   margin-bottom: 20px;
   padding: 20px;
   background-color: #f0f2f5;
   border-radius: 10px;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
   @media (min-width: 768px) and (max-width: 1600px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: 767px) {
      grid-template-columns: 1fr;
      margin: 80px 10px;
      margin-bottom: 20px;
      padding: 10px;
   }
`
const StyledCard = styled(Card)<StyledCardProps>`
   border-radius: 10px;
   background-image: url(${(props) => props.bgimage});
   background-size: cover;
   background-position: center;
   height: 300px;
   width: 100%;
   color: white;
   transition: transform 0.3s ease, box-shadow 0.3s ease;
   margin: 0 auto;
   .ant-card-body {
      padding: 0;
      background: linear-gradient(
         180deg,
         rgba(0, 26, 46, 0) 56%,
         #001a2e7a 97.12%
      );
      border-radius: 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      .block {
         padding: 20px;
         h1 {
            color: white;
            margin: 0;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
         }
         .info-block {
            p {
               font-size: 14px;
               margin: 0;
               text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
            }
         }
      }
   }
   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
   }
   @media (max-width: 1024px) {
      max-width: 600px;
      height: 250px;
      .block {
         padding: 15px;
         h1 {
            font-size: 1.8rem;
         }
         .info-block {
            p {
               font-size: 13px;
            }
         }
      }
   }
   @media (max-width: 767px) {
      max-width: 100%;
      height: 200px;
      .block {
         padding: 10px;
         h1 {
            font-size: 1.3rem;
         }
         .info-block {
            p {
               font-size: 12px;
            }
         }
      }
   }
`
const StyledButton = styled(Button)`
   background-color: transparent;
   color: white;
   width: 140px;
   border-radius: 20px;
   height: 35px;
   border: 1px solid white;
   &:hover {
      background-color: transparent !important;
      color: white !important;
      border: 1px solid white;
   }
   @media (max-width: 767px) {
      width: 120px;
      height: 30px;
      font-size: 12px;
   }
`
