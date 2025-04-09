import { FC } from 'react'
import { Button, Card, Flex } from 'antd'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ArrowsAltOutlined, EnvironmentFilled } from '@ant-design/icons'
import { useAppSelector } from '../../../store/store'
import { Helmet } from 'react-helmet-async'
interface StyledCardProps {
   bgimage: string
}

const Infrastructures: FC = () => {
   window.scrollTo(0, 0)
   const { infrastractures } = useAppSelector((state) => state.infrastracture)

   return (
      <main>
         <Helmet>
            <title>Инфраструктуры FC Абдыш ата</title>
            <meta
               name="description"
               content="Узнайте о инфраструктурах FC Абдыш ата, их местоположении и характеристиках."
            />
            <meta
               name="keywords"
               content="инфраструктуры, FC Абдыш ата, спортивные объекты"
            />
            <meta name="author" content="Абдыш ата" />
            <link
               rel="canonical"
               href="https://abdysh-front.tw1.ru/infrastructures"
            />
         </Helmet>

         <CollageContainer wrap>
            {infrastractures?.map((item, index) => (
               <NavLink
                  style={{
                     width: index % 2 === 1 ? 'max-content' : '55%',
                  }}
                  to={`/infrastructure/${item.slug}`}
                  key={item.id}
                  className="navlink"
               >
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

const CollageContainer = styled(Flex)`
   gap: 20px;
   padding: 20px;
   background-color: #f0f2f5;
   border-radius: 10px;
   margin: 0 75px;
   margin-top: 80px;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

   @media (max-width: 1024px) {
      margin: 80px 20px;
   }
   @media (max-width: 924px) {
      .navlink {
         width: max-content !important;
      }
   }

   @media (max-width: 768px) {
      flex-direction: column;
      margin: 0;
      padding: 80px 10px;
   }
`

const StyledCard = styled(Card)<StyledCardProps>`
   border-radius: 10px;
   background-image: url(${(props) => props.bgimage});
   background-size: cover;
   background-position: center;
   height: 300px;
   min-width: 100%;
   color: white;
   transition: transform 0.3s ease, box-shadow 0.3s ease;

   @media (max-width: 1415px) {
      .block {
         padding: 15px !important;
      }

      max-width: 360px;
   }

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

         h1 {
            color: white;
            margin: 0;
            font-size: 2.2rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
         }

         @media (max-width: 768px) {
            h1 {
               font-size: 1.3rem;
            }
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

   @media (max-width: 768px) {
      height: 200px;
      .block {
         padding: 10px;

         h1 {
            font-size: 1rem;
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
      color: white;
      border: 1px solid white;
   }
`
