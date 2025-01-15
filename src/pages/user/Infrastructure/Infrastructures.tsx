import { FC } from 'react'
import { Card, Flex } from 'antd'
import styled from 'styled-components'
import { infrastructure } from '../../../configs'
import { NavLink } from 'react-router-dom'

interface StyledCardProps {
   bgImage: string
}

const Infrastructures: FC = () => (
   <main>
      <CollageContainer wrap>
         {infrastructure.map((item) => (
            <NavLink to={`/infrastructure/${item.id}`}>
               <StyledCard key={item.id} hoverable bgImage={item.image}>
                  <div className="ant-card-body">
                     <h3>{item.name}</h3>

                     <p>{item.address}</p>
                  </div>
               </StyledCard>
            </NavLink>
         ))}
      </CollageContainer>
   </main>
)

export default Infrastructures

const CollageContainer = styled(Flex)`
   gap: 16px;
   padding: 20px;
   background-color: #f0f2f5;
   border-radius: 6px;
   margin: 0 75px;
   margin-top: 80px;
`

const StyledCard = styled(Card)<StyledCardProps>`
   border-radius: 8px;
   overflow: hidden;
   text-align: center;
   background-image: url(${(props) => props.bgImage});
   background-size: cover;
   background-position: center;
   height: 250px;
   width: 300px;
   color: white;

   .ant-card-body {
      padding: 16px;
      background: rgba(0, 0, 0, 0.5);
   }

   h3,
   p {
      margin: 0;
   }
`
