import styled from 'styled-components'
import { Card, Col, Button, Flex } from 'antd'
import Image from '../assets/images/image7.jpg'

import { RightOutlined } from '@ant-design/icons'
import { leagues } from '../configs'

const VictoryBlock = () => {
   return (
      <Container>
         <VictoryDes className="victory-des">
            <Flex className="inner" align="center" justify="space-between">
               <Flex vertical align="start">
                  <Title>Достижения Команды</Title>

                  <Description>
                     Мы гордимся нашими трофеями и достижениями, которые стали
                     результатом упорного труда и преданности команды на
                     протяжении многих лет.
                  </Description>
               </Flex>

               <StyledButton type="primary">
                  Все трофеи <RightOutlined />
               </StyledButton>
            </Flex>
         </VictoryDes>

         <Flex className="trophy" justify="space-between">
            {leagues.map(({ id, name, date, trophy }) => (
               <Col span={5} key={id}>
                  <StyledCard>
                     <img
                        className="trophy-image"
                        width={300}
                        height={340}
                        src={trophy}
                        alt="trophy"
                     />
                     <p>{date}</p>
                     <h2>{name}</h2>
                  </StyledCard>
               </Col>
            ))}
         </Flex>
      </Container>
   )
}

export default VictoryBlock

const Container = styled.div`
   text-align: center;
   padding: 120px 0;
   color: black;

   & .trophy {
      padding: 0 calc(75px + 1rem);
      position: relative;
      z-index: 10;
      margin: 0 auto;
      width: 100%;
      max-width: 1600px;
   }
`

const Title = styled.h1`
   margin-bottom: 20px;
`

const Description = styled.p`
   margin-bottom: 40px;
   font-size: 1rem;
   color: white;
   width: 700px;
`

const StyledCard = styled(Card)`
   text-align: start;
   border-radius: 10px;
   margin-top: -60px;
   max-width: 250px;
   min-width: 240px;

   .trophy-image {
      width: 200px;
      max-width: 200px;
      height: 250px;

      object-fit: cover;
   }
`

const VictoryDes = styled.div`
   width: 100vw;
   height: 350px;
   display: flex;
   flex-direction: column;
   background-image: url(${Image});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   position: relative;
   padding: 100px 75px 0 75px;

   .inner {
      max-width: 1500px;
      margin: 0 auto;
      width: 100%;
   }

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
   }

   p {
      margin-top: 10px;
   }

   h1 {
      font-size: 45px !important;
   }

   h1,
   p {
      position: relative;
      z-index: 2;
      color: white;
      text-align: start;
   }
`

const StyledButton = styled(Button)`
   border: none;
   position: relative;
   z-index: 2;
   color: white;
   padding: 25px 40px;
   font-size: 1rem;
   border-radius: 8px;

   &:focus {
      outline: none;
   }
`
