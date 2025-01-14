import React from 'react'
import { Card, Flex } from 'antd'
import styled from 'styled-components'
import { infrastructure } from '../../../configs'

interface StyledCardProps {
   bgImage: string
}

const CollageContainer = styled(Flex)`
   /* display: grid;
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   gap: 16px;
   padding: 20px;
   background-color: #f0f2f5; */
`

const StyledCard = styled(Card)<StyledCardProps>`
   /* border-radius: 8px; */
   /* overflow: hidden; */
   text-align: center;
   background-image: url(${(props) => props.bgImage});
   background-size: cover;
   background-position: center;
   /* height: auto;
   width: 100%;
   color: white; */

   .ant-card-body {
      padding: 16px;
      background: rgba(0, 0, 0, 0.5);
   }

   h3,
   p {
      margin: 0;
   }
`

const Infrastructures: React.FC = () => {
   return (
      <CollageContainer>
         {infrastructure.map((item) => (
            <StyledCard key={item.id} hoverable bgImage={item.image}>
               <div className="ant-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.address}</p>
               </div>
            </StyledCard>
         ))}
      </CollageContainer>
   )
}

export default Infrastructures
