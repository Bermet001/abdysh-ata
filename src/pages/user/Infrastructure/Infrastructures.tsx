import { FC } from 'react'
import { Button, Card, Flex } from 'antd'
import styled from 'styled-components'
import { infrastructure } from '../../../configs'
import { NavLink } from 'react-router-dom'
import { ArrowsAltOutlined, EnvironmentFilled } from '@ant-design/icons'

interface StyledCardProps {
   bgImage: string
}

const Infrastructures: FC = () => (
   <main>
      <CollageContainer wrap>
         {infrastructure.map((item) => (
            <NavLink to={`/infrastructure/${item.id}`} key={item.id}>
               <StyledCard bgImage={item.image}>
                  <div className="ant-card-body block">
                     <h3>{item.name}</h3>

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
                              <ArrowsAltOutlined /> {item.address}
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

export default Infrastructures

const CollageContainer = styled(Flex)`
   gap: 20px;
   padding: 20px;
   background-color: #f0f2f5;
   border-radius: 10px;
   margin: 0 75px;
   margin-top: 80px;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s ease;

   &:hover {
      transform: scale(1.02);
   }
`

const StyledCard = styled(Card)<StyledCardProps>`
   border-radius: 10px;
   background-image: url(${(props) => props.bgImage});
   background-size: cover;
   background-position: center;
   height: 300px;
   min-width: 100%;
   max-width: 600px;
   color: white;
   transition: transform 0.3s ease, box-shadow 0.3s ease;

   .ant-card-body {
      padding: 0;
   }

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
   }

   .ant-card-body {
      background: rgba(0, 0, 0, 0.151);
      border-radius: 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      background: linear-gradient(
         180deg,
         rgba(0, 26, 46, 0) 56%,
         #001a2e7a 97.12%
      );

      .block {
         padding: 20px 32px;

         h3 {
            color: white;
            margin: 0;
            font-size: 2.2rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
         }

         .info-block {
            p {
               font-size: 13px;
            }
         }
      }
   }

   p {
      margin: 0;
      font-size: 1rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
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
      color: white;
      border: 1px solid white;
   }
`
