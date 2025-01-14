import {
   // useEffect,
   useState,
} from 'react'
import { Button, Flex } from 'antd'
import styled, { keyframes } from 'styled-components'
import TrophyRoom from '../../../assets/images/Trophy/TrophyRoom.webp'
import Team from '../../../assets/images/heistory/team.webp'

const Trophy = () => {
   const [visibleCount, setVisibleCount] = useState(10)
   // useEffect(() => {
   //    // window.scrollTo(0, 0)
   // })

   const trophyData = Array(20).fill({
      title: 'Bemchik',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at eveniet corrupti mollitia repellat excepturi voluptatibus deserunt pariatur, odio sed laudantium iste dicta distinctio ad quisquam commodi dignissimos libero sequi?',
   })

   const handleShowMore = () => setVisibleCount((prevCount) => prevCount + 10)

   return (
      <StyledContainer vertical>
         <StyledFirstPart>
            <div className="first-part">
               <Flex className="first" align="end">
                  <DarkOverlay />
                  <Flex justify="end" vertical className="container">
                     <h1 className="title">ТРОФЕЙНАЯ КОМНАТА</h1>
                     <p>В этом разделе вы можете посмотреть наши достижения</p>
                  </Flex>
               </Flex>
            </div>
         </StyledFirstPart>

         <p className="text">
            Когда речь заходит о главных национальных и европейских наградах,
            наша мужская команда выигрывает все, а женская и Академическая
            команды в последнее время регулярно завоевывают кубки.
         </p>

         <Flex vertical className="trophy-block-container">
            {trophyData.slice(0, visibleCount).map((item, index) => (
               <Flex
                  key={index}
                  className="trophy-block"
                  style={{
                     flexDirection: index % 2 === 1 ? 'row-reverse' : 'row',
                  }}
               >
                  <img className="image" src={Team} alt={item.title} />

                  <Flex align="start" gap={40} vertical className="texstovka">
                     <h2>{item.title}</h2>

                     <p>{item.description}</p>

                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus, rem! Vero.
                     </p>
                  </Flex>
               </Flex>
            ))}

            <br />
            <br />
            <br />
            {visibleCount < trophyData.length && (
               <Button onClick={handleShowMore} type="link">
                  Смотреть еще
               </Button>
            )}
         </Flex>
      </StyledContainer>
   )
}

export default Trophy

const fadeInUp = keyframes`
0% {
    opacity: 0;
    transform: translateY(20px);
}

100% {
    opacity: 1;
    transform: translateY(0);
}
`

const StyledContainer = styled(Flex)`
   .first-part {
      height: 100%;
      width: 100%;
      position: relative;
      z-index: 9;
      padding: 75px;

      .first {
         height: 100%;
      }
   }

   .image {
      width: 50%;
      height: 400px;
      object-fit: cover;
   }

   .text {
      padding: 75px;
      height: 100%;
      font-size: 20px;
      font-weight: 200;
      line-height: 2;
   }

   .trophy-block-container {
      padding: 75px;

      .trophy-block {
         .texstovka {
            padding: 40px;

            h2 {
               font-family: 'Inter', serif;
               font-size: 35px;
               font-weight: 600;
            }

            .link-btn {
               font-size: 20px;
               color: green;
            }
         }
      }
   }
`

const StyledFirstPart = styled(Flex)`
   position: relative;
   background-image: url(${TrophyRoom});
   background-size: cover;
   background-position: center;
   height: 70vh;
   width: 100vw;
   color: white;

   .container {
      position: relative;
      z-index: 2;
      text-align: start;

      .title {
         margin-bottom: 5px;
         text-transform: uppercase;
         color: white;
         font-size: 75px;
         text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
         transition: color 0.3s ease;
         animation-name: ${fadeInUp};
         animation-delay: 0.5s;
      }

      > p {
         text-align: start;
         font-size: 20px;
         color: white;
         text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
         transition: color 0.3s ease;
      }

      &:hover .title,
      &:hover > p {
         color: #ffcc00;
      }
   }
`

const DarkOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(to bottom, #000, transparent 99%);
   z-index: 1;
`
