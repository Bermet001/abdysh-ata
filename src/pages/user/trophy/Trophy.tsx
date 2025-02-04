import { useEffect, useState } from 'react'
import { Flex } from 'antd'
import styled, { keyframes } from 'styled-components'
import TrophyRoom from '../../../assets/images/Trophy/TrophyRoom.webp'
import Team from '../../../assets/images/heistory/team.webp'

interface TrophyItem {
   title: string
   description: string
}

const Trophy = () => {
   window.scrollTo(0, 0)

   const [isUserScrolling, setIsUserScrolling] = useState<boolean>(false)
   const trophyData: TrophyItem[] = Array(20).fill({
      title: 'Bemchik',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at eveniet corrupti mollitia repellat excepturi voluptatibus deserunt pariatur, odio sed laudantium iste dicta distinctio ad quisquam commodi dignissimos libero sequi?',
   })

   useEffect(() => {
      const handleScroll = () => setIsUserScrolling(true)

      const scrollDown = () =>
         !isUserScrolling
            ? window.scrollBy({
                 top: 50,
                 behavior: 'smooth',
              })
            : null

      window.addEventListener('wheel', handleScroll, { passive: false })

      const interval = setInterval(scrollDown, 70)

      return () => {
         clearInterval(interval)
         window.removeEventListener('wheel', handleScroll)
      }
   }, [isUserScrolling])

   return (
      <StyledContainer vertical>
         <StyledFirstPart>
            <div className="first-part">
               <Flex className="first" align="end">
                  <DarkOverlay />

                  <Flex justify="end" vertical className="container">
                     <h2 className="title">ТРОФЕЙНАЯ КОМНАТА</h2>
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
            {trophyData.map((item, index) => (
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
                     <p className="text-info">{item.description}</p>

                     <p className="text-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus, rem! Vero.
                     </p>
                  </Flex>
               </Flex>
            ))}
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
   @media (max-width: 768px) {
      flex-direction: column;
   }

   .first-part {
      height: 100%;
      width: 100%;
      position: relative;
      z-index: 9;
      padding: 75px;

      .first {
         height: 100%;
      }

      @media (max-width: 1024px) {
         padding: 20px;
      }
   }

   .image {
      width: 50%;
      height: 400px;
      object-fit: cover;

      @media (max-width: 768px) {
         height: auto;
      }
   }

   .text {
      padding: 75px;
      height: auto;
      font-size: 20px;
      font-weight: 200;

      @media (max-width: 1024px) {
         padding: 20px;
         line-height: 1.5;
      }

      @media (max-width: 768px) {
         font-size: 16px;
      }
   }

   .trophy-block-container {
      padding: 75px;

      @media (max-width: 1024px) {
         padding: 20px;
      }

      .trophy-block {
         flex-direction: column;

         @media (max-width: 768px) {
            padding: 0px;
         }

         .texstovka {
            padding: 40px;

            @media (max-width: 768px) {
               gap: 20px !important;
               padding: 25px;
               .text-info {
                  font-size: 14px;
               }
            }

            @media (max-width: 610px) {
               gap: 20px !important;
               padding: 10px;

               .text-info {
                  gap: 10px !important;
                  font-size: 10px;
               }
            }

            @media (max-width: 400px) {
               gap: 10px !important;

               .text-info {
                  gap: 10px !important;
                  font-size: 8px;
               }
            }

            h2 {
               font-family: 'Inter', serif;
               font-size: 35px;
               font-weight: 600;

               @media (max-width: 768px) {
                  font-size: 23px;
               }

               @media (max-width: 610px) {
                  font-size: 20px;
               }

               @media (max-width: 400px) {
                  font-size: 18px;
               }
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

         @media (max-width: 768px) {
            font-size: 16px;
         }
      }

      &:hover .title,
      &:hover > p {
         color: #ffcc00;
      }
   }

   @media (max-width: 1024px) {
      height: 60vh;

      .container {
         .title {
            font-size: 60px;
         }

         > p {
            font-size: 17px;
         }
      }
   }

   @media (max-width: 768px) {
      height: 40vh;

      .container {
         .title {
            font-size: 40px;
         }
      }
   }

   @media (max-width: 610px) {
      height: 40vh;

      .container {
         .title {
            font-size: 25px;
         }
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
