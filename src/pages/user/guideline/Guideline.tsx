import styled from 'styled-components'
import { Card, Col, Modal, Row } from 'antd'
import { FC, useEffect, useState } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { getManagmets } from '../../../store/slice/guideline/guidelineThunk'
import { Helmet } from 'react-helmet-async'

interface IManagment {
   id: number
   name: string
   position: string
   image: string
   content: string
}

const Guideline: FC = () => {
   window.scrollTo(0, 0)
   const { persons } = useAppSelector((state) => state.management)

   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const [selectedDirector, setSelectedDirector] = useState<IManagment | null>(
      null
   )

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getManagmets())
   }, [dispatch])

   const showModal = (director: IManagment) => {
      setSelectedDirector(director)
      setIsModalOpen(true)
   }

   const handleCancel = () => {
      setIsModalOpen(false)
      setSelectedDirector(null)
   }

   return (
      <StyledContainer>
         <Helmet>
            <title>Руководство FC Абдыш ата</title>
            <meta
               name="description"
               content="Узнайте о руководстве FC Абдыш ата, их ролях и обязанностях."
            />
            <meta
               name="keywords"
               content="руководство, FC Абдыш ата, менеджмент"
            />
            <meta name="author" content="Абдыш ата" />
            <link rel="canonical" href="http://mysite.com/guideline" />
         </Helmet>
         <div>
            <h1 className="main-title">Руководство</h1>
            <Row gutter={[10, 10]}>
               {persons?.map((director) => (
                  <Col xs={12} sm={12} md={8} lg={6} key={director.id}>
                     <StyledCard onClick={() => showModal(director)}>
                        <InfoCircleOutlined className="info-icon" />
                        <Image src={director.image} alt={director.name} />
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
                  <p
                     dangerouslySetInnerHTML={{
                        __html: selectedDirector.content,
                     }}
                  />
               </Modal>
            )}
         </div>
      </StyledContainer>
   )
}

export default Guideline

const StyledContainer = styled.main`
   background-color: #f7f9fc;
   border-radius: 10px;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
   padding: 100px 75px;

   > div {
      margin: 0 auto;
      max-width: 1600px;
   }

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
`

const StyledCard = styled(Card)`
   border-radius: 15px;
   transition: transform 0.3s, box-shadow 0.3s;

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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
      }
   }

   .name-p {
      font-size: 18px;
      height: 56px;

      @media (max-width: 570px) {
         font-size: 13px;
         height: auto;
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
