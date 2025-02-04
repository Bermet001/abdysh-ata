import styled from 'styled-components'
import { Card, Col, Modal, Row } from 'antd'
import { FC, useState } from 'react'
import photo from '../../../assets/images/players/image.png'
import { InfoCircleOutlined } from '@ant-design/icons'

interface Director {
   name: string
   position: string
   image: string
   text: string
   id: number
}

interface Data {
   directors: Director[]
}

const data: Data = {
   directors: [
      {
         name: 'Туменбаев Бактыбек Асаналиевич',
         position: 'Председатель Совета',
         image: 'link_to_image1.jpg',
         text: 'Информация о Туменбаеве Бактыбеке Асаналиевиче.',
         id: 1,
      },
      {
         name: 'Кыргызаева Асель Жешенбековна',
         position: 'Член Совета Директоров',
         image: 'link_to_image2.jpg',
         text: 'Информация о Кыргызаевой Асель Жешенбековне.',
         id: 2,
      },
      {
         name: 'Масрабажев Жанибек Сагадиевич',
         position: 'Член Совета Директоров',
         image: 'link_to_image3.jpg',
         text: 'Информация о Масрабажеве Жанибеке Сагадиевиче.',
         id: 3,
      },
      {
         name: 'Асылбек Эмильбек Манабекович',
         position: 'Член Шараитского совета',
         image: 'link_to_image4.jpg',
         text: 'Информация о Асылбеке Эмильбек Манабековиче.',
         id: 4,
      },
      {
         name: 'Эшнунков Токтин Мусурманович',
         position: 'Член Шараитского совета',
         image: 'link_to_image5.jpg',
         text: 'Информация о Эшнункове Токтине Мусурмановиче.',
         id: 5,
      },
      {
         name: 'Алимбеков Олжобай Садикович',
         position: 'Член Шараитского совета',
         id: 6,
         image: 'link_to_image6.jpg',
         text: 'Информация о Алимбекове Олжобае Садиковиче.',
      },
   ],
}

const Guideline: FC = () => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const [selectedDirector, setSelectedDirector] = useState<Director | null>(
      null
   )

   const showModal = (director: Director) => {
      setSelectedDirector(director)
      setIsModalOpen(true)
   }

   const handleCancel = () => {
      setIsModalOpen(false)
      setSelectedDirector(null)
   }

   window.scrollTo(0, 0)

   return (
      <StyledContainer>
         <h2 className="main-title">Руководство</h2>

         <Row gutter={[10, 10]}>
            {data.directors.map((director) => (
               <Col xs={12} sm={12} md={8} lg={6} key={director.id}>
                  <StyledCard>
                     <InfoCircleOutlined
                        onClick={() => showModal(director)}
                        className="info-icon"
                     />

                     <Image src={photo} alt={director.name} />
                     <h3 className="name-p">{director.name}</h3>
                     <CardContent>{director.position}</CardContent>
                  </StyledCard>
               </Col>
            ))}
         </Row>

         {selectedDirector && (
            <Modal
               title={selectedDirector.name}
               open={isModalOpen}
               onCancel={handleCancel}
               footer={null}
            >
               <p>{selectedDirector.text}</p>
            </Modal>
         )}
      </StyledContainer>
   )
}

export default Guideline

const StyledContainer = styled.main`
   max-width: 1600px;
   margin: 0 auto;
   background-color: #f7f9fc;
   border-radius: 10px;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
   padding: 100px 75px;

   @media (max-width: 1024px) {
      padding: 100px 20px;
   }

   @media (max-width: 768px) {
      .main-title {
         margin-bottom: 30px;
         font-size: 24px;
      }
   }

   .ant-card .ant-card-body {
      padding-top: 15px !important;

      @media (max-width: 570px) {
         padding: 13px;
      }
   }

   @media (max-width: 570px) {
      .ant-card {
         margin: 0;
      }
   }
`

const StyledCard = styled(Card)`
   /* margin: 10px; */
   border-radius: 15px;
   transition: transform 0.3s, box-shadow 0.3s;

   @media (max-width: 570px) {
   }

   @media (max-width: 570px) {
      border-radius: 8px;
   }

   .info-icon {
      svg {
         width: 1.5rem;
         height: 1.5rem;
         fill: #adadad;
         cursor: pointer;
         border-radius: 50%;
         transition: transform 0.3s, box-shadow 0.3s;

         &:hover {
            transform: translateY(-2px);
            fill: #ffcc00;
         }

         @media (max-width: 570px) {
            width: 1rem;
            height: 1rem;
         }
      }
   }

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
   }

   .name-p {
      font-size: 18px;
      height: 56px;

      @media (max-width: 570px) {
         font-size: 13px;
         height: 100%;
      }
   }
`

const CardContent = styled.p`
   font-size: 14px;
   color: #555;
   margin: 10px 0 0;

   @media (max-width: 570px) {
      min-height: 40px;
   }
`

const Image = styled.img`
   width: 100%;
   height: auto;
   border-radius: 10px 10px 0 0;
   object-fit: cover;
   object-position: top;
   min-height: 370px;

   @media (max-width: 1224px) {
      min-height: 300px;
   }

   @media (max-width: 768px) {
      max-height: 250px;
      min-height: 100%;
   }
`
