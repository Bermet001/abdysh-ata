import { Typography, Carousel, Modal } from 'antd'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { useEffect, useState } from 'react'
import {
   getAcademiaBanner,
   getAllData,
} from '../../store/slice/tournamentAcademy/TournamentAcademyThunk'

const { Title, Paragraph } = Typography
interface Contact {
   email?: string
   phone?: string
}
interface ContactsState {
   contacts: Contact[]
}
const TournamentWrapper = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   padding: 20px 10px;
`
const StyledBanner = styled.div<{ banner: string | undefined }>`
   width: 100vw;
   position: relative;
   left: 50%;
   right: 50%;
   margin-left: -50vw;
   margin-right: -50vw;
   height: 400px;
   background: #037a3a;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   background-image: url(${(props) => props.banner});
   background-size: cover;
   background-position: center;
   &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
   }
   h1 {
      z-index: 2;
      font-size: 36px;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      margin: 0;
   }
   @media (max-width: 768px) {
      height: 300px;
      h1 {
         font-size: 24px;
      }
   }
   @media (max-width: 480px) {
      height: 200px;
      h1 {
         font-size: 18px;
      }
   }
`
const TextContent = styled.div`
   background: #fff;
   border-radius: 8px;
   margin-top: 15px;
`
const PastTournamentsSection = styled.div`
   margin-top: 20px;
`
const TournamentItem = styled.div`
   margin-bottom: 15px;
   padding-bottom: 15px;
   border-bottom: 1px solid #e5e5e5;
   &:last-child {
      border-bottom: none;
      margin-bottom: 0;
   }
`
const PhotoCarousel = styled(Carousel)`
   margin-top: 5px;
   .slick-slide {
      padding: 0 5px;
   }
   .slick-dots li button {
      background: #d21f3c;
   }
   .slick-dots li.slick-active button {
      background: #fff;
   }
   .slick-arrow {
      color: #d21f3c;
      font-size: 20px;
      &:hover {
         color: #fff;
      }
   }
   .slick-prev {
      left: 5px;
   }
   .slick-next {
      right: 5px;
   }
`
const PhotoImage = styled.img`
   width: 100%;
   height: 180px;
   object-fit: cover;
   border-radius: 8px;
   border: 2px solid #fff;
   cursor: pointer;
   transition: transform 0.3s ease;
   &:hover {
      transform: scale(1.05);
   }
   @media (max-width: 768px) {
      height: 140px;
   }
   @media (max-width: 480px) {
      height: 100px;
   }
`
const ZoomedImage = styled.img`
   width: 100%;
   max-width: 90vw;
   max-height: 90vh;
   object-fit: contain;
`
const ContactSection = styled.div`
   padding: 15px;
   text-align: center;
   background: #f5f5f5;
   border-radius: 8px;
   margin-top: 20px;
`
const TournamentAcademy = () => {
   const { contacts } = useAppSelector(
      (state: { contacts: ContactsState }) => state.contacts
   )
   const { first, allTeams } = useAppSelector((state) => state.academy)
   const contact: Contact | null = contacts.length > 0 ? contacts[0] : null
   const dispatch = useAppDispatch()
   const [isModalVisible, setIsModalVisible] = useState(false)
   const [selectedImage, setSelectedImage] = useState<string | null>(null)

   useEffect(() => {
      dispatch(getAcademiaBanner())
      dispatch(getAllData())
   }, [dispatch])

   const handleImageClick = (imageSrc: string) => {
      setSelectedImage(imageSrc)
      setIsModalVisible(true)
   }

   const handleCancel = () => {
      setIsModalVisible(false)
      setSelectedImage(null)
   }

   return (
      <TournamentWrapper>
         {first.map((item, i) => (
            <div key={i}>
               <StyledBanner banner={item?.banner}>
                  <Title>{item?.banner_title}</Title>
               </StyledBanner>
               <TextContent>
                  <div
                     dangerouslySetInnerHTML={{ __html: item?.content || '' }}
                     style={{
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#333',
                     }}
                  />
                  <br />
                  <br />
                  <Paragraph
                     style={{
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: '#05a550',
                        fontWeight: 600,
                     }}
                  >
                     {item?.title_below}
                  </Paragraph>
                  <Paragraph
                     style={{
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#333',
                        fontWeight: 600,
                     }}
                  >
                     {item?.subtitle}
                  </Paragraph>
               </TextContent>
               <Title
                  level={3}
                  style={{ color: '#ed5a0c', marginBottom: '15px' }}
               >
                  {item.title_turner}
               </Title>
            </div>
         ))}
         <PastTournamentsSection>
            {allTeams?.map((tournament) => (
               <TournamentItem key={tournament?.id}>
                  <div
                     dangerouslySetInnerHTML={{
                        __html: tournament?.content || '',
                     }}
                     style={{
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#333',
                        fontWeight: 500,
                     }}
                  />
                  <br />
                  <br />
                  <PhotoCarousel
                     autoplay
                     autoplaySpeed={3000}
                     slidesToShow={Math.min(4, tournament?.academia_images?.length)}
                     dots={true}
                     arrows={true}
                     swipe={true}
                     swipeToSlide={true}
                     draggable={true}
                     touchThreshold={10}
                     responsive={[
                        { breakpoint: 768, settings: { slidesToShow: 2 } },
                        { breakpoint: 480, settings: { slidesToShow: 2 } },
                     ]}
                  >
                     {tournament?.academia_images?.map((photo) => (
                        <div key={photo?.id}>
                           <PhotoImage
                              loading="lazy"
                              src={photo?.image}
                              alt={`Фото ${photo?.id}`}
                              onClick={() => handleImageClick(photo?.image)}
                           />
                        </div>
                     ))}
                  </PhotoCarousel>
               </TournamentItem>
            ))}
         </PastTournamentsSection>
         <ContactSection>
            <Paragraph style={{ margin: 0, color: '#333' }}>
               Связь с организаторами:{' '}
               <a
                  href={`mailto:${contact?.email}`}
                  style={{ color: '#d21f3c' }}
               >
                  {contact?.email || 'academy@football.ru'}
               </a>
               <br />
               Телефон:{' '}
               <span style={{ color: '#d21f3c' }}>
                  {contact?.phone || 'Нет данных'}
               </span>
            </Paragraph>
         </ContactSection>
         <Modal
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            style={{margin:" auto", backgroundColor:"transparent"}}
         >
            {selectedImage && <ZoomedImage src={selectedImage} alt="Enlarged Photo" />}
         </Modal>
      </TournamentWrapper>
   )
}
export default TournamentAcademy