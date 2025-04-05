import { Typography, Carousel } from 'antd'
import styled from 'styled-components'

const { Title, Paragraph } = Typography

const TournamentWrapper = styled.div`
   max-width: 1600px;
   margin: 0 auto;
   animation: fadeIn 1s ease-in;

   @keyframes fadeIn {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }

   @media (max-width: 768px) {
      padding: 16px;
   }
`

const StyledBanner = styled.div`
   width: 100%;
   height: 400px;
   background: linear-gradient(135deg, #ed5a0c 0%, #00a64f 100%);
   border-radius: 12px;
   overflow: hidden;
   margin-bottom: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   font-size: 24px;
   background-size: cover;
   background-position: center;

   @media (max-width: 768px) {
      height: 200px;
      font-size: 18px;
   }

   @media (max-width: 480px) {
      height: 150px;
      font-size: 16px;
   }
`

const TextContent = styled.div`
   padding: 24px;
   background: #fff;
   border-radius: 12px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   margin-bottom: 24px;

   @media (max-width: 768px) {
      padding: 16px;
   }
`

const PastTournamentsSection = styled.div`
   padding: 24px;
   background: #fff;
   border-radius: 12px;
   margin-bottom: 24px;
   border-left: 4px solid #ed5a0c;
`

const TournamentItem = styled.div`
   margin-bottom: 20px;
   padding: 16px;
   border-bottom: 1px solid #e8e8e8;

   &:last-child {
      border-bottom: none;
      margin-bottom: 0;
   }
`

const PhotoCarousel = styled(Carousel)`
   margin-top: 16px;

   .slick-slide {
      padding: 0 8px;
   }

   .slick-dots li button {
      background: #00a64f;
      border-radius: 50%;
   }

   .slick-dots li.slick-active button {
      background: #ed5a0c;
   }

   .slick-arrow {
      color: #ed5a0c;
      font-size: 24px;
      z-index: 1;

      &:hover {
         color: #ff7f3f;
      }
   }

   .slick-prev {
      left: 10px;
   }

   .slick-next {
      right: 10px;
   }
`

const PhotoImage = styled.img`
   width: 100%;
   height: 200px;
   object-fit: cover;
   border-radius: 8px;
   border: 2px solid #00a64f;
   transition: border-color 0.3s ease;

   &:hover {
      border-color: #ed5a0c;
   }

   @media (max-width: 768px) {
      height: 150px;
   }

   @media (max-width: 480px) {
      height: 120px;
   }
`

const SinglePhoto = styled.img`
   width: 100%;
   max-width: 300px;
   height: 200px;
   object-fit: cover;
   border-radius: 8px;
   border: 2px solid #00a64f;
   margin-top: 16px;
   transition: transform 0.3s ease, box-shadow 0.3s ease;

   &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      border-color: #ed5a0c;
   }

   @media (max-width: 768px) {
      height: 150px;
      max-width: 250px;
   }

   @media (max-width: 480px) {
      height: 120px;
      max-width: 100%;
   }
`

const ContactSection = styled.div`
   padding: 16px;
   text-align: center;
   background: #fff;
   border-radius: 12px;
   border-top: 4px solid #ed5a0c;
`

const TournamentAcademy = () => {
   const mockData = {
      banner:
         'https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      text: 'Добро пожаловать в Академию Футбола! Здесь мы готовим будущих чемпионов и проводим захватывающие турниры для юных талантов. Ознакомьтесь с нашими прошедшими событиями и присоединяйтесь к следующему сезону!',
      pastTournaments: [
         {
            name: 'Кубок Академии 2024',
            date: '15-17 мая 2024',
            location: 'Москва, Стадион "Юность"',
            description:
               'Турнир среди юниоров до 18 лет. 20 команд боролись за кубок, победу одержала команда "Спартак Юниор" со счетом 3:2 в финале.',
            photos: [
               'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
               'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
               'https://images.unsplash.com/photo-1601599963577-0959b89771b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
               'https://images.unsplash.com/photo-1512428813834-c7028b9af33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
               'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            ],
         },
         {
            name: 'Турнир "Золотой Мяч" 2023',
            date: '10-12 июня 2023',
            location: 'Санкт-Петербург, Арена "Петровский"',
            description:
               'Соревнование для игроков до 16 лет. Чемпионы — "Зенит Молодежь" с разгромным счетом 5:0 в финальном матче.',
            photos: [
               'https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
               'https://images.unsplash.com/photo-1512428813834-c7028b9af33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
               'https://images.unsplash.com/photo-1601599963577-0959b89771b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            ],
         },
         {
            name: 'Кубок Академии 2022',
            date: '20-22 августа 2022',
            location: 'Новосибирск, Стадион "Сибирь"',
            description:
               'Первый крупный турнир академии. Победу одержала команда "Динамо Юниор" в серии пенальти.',
            photos: [
               'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            ],
         },
      ],
   }

   return (
      <TournamentWrapper>
         <StyledBanner style={{ backgroundImage: `url(${mockData.banner})` }}>
            <Title style={{ color: '#fff', margin: 0 }}>Академия Футбола</Title>
         </StyledBanner>

         <TextContent>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
               autem animi distinctio numquam. Nulla ducimus quidem natus.
               Laborum temporibus assumenda eligendi quisquam repudiandae,
               cupiditate quia similique voluptate atque inventore dolor. Lorem
               ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos
               natus minima eius dignissimos animi eligendi? Facilis veritatis
               quibusdam repellendus debitis iste, laboriosam tempora quia sequi
               molestiae impedit quisquam corporis? Lorem ipsum dolor sit amet
               consectetur adipisicing elit. Distinctio veritatis quo quos ipsa
               dolorem quaerat necessitatibus voluptates quia adipisci! Nobis
               veniam odit adipisci porro a magni autem suscipit aliquid
               incidunt.
            </Paragraph>
         </TextContent>

         <PastTournamentsSection>
            <Title level={3} style={{ color: '#ed5a0c' }}>
               Прошедшие Футбольные Турниры
            </Title>
            {mockData.pastTournaments.map((tournament, index) => (
               <TournamentItem key={index}>
                  <Paragraph
                     strong
                     style={{ fontSize: '16px', color: '#00a64f' }}
                  >
                     {tournament.name}
                  </Paragraph>
                  <Paragraph style={{ fontSize: '14px', color: '#666' }}>
                     <strong>Дата:</strong> {tournament.date}
                     <br />
                     <strong>Место:</strong> {tournament.location}
                     <br />
                     {tournament.description}
                  </Paragraph>
                  {tournament.photos.length > 1 ? (
                     <PhotoCarousel
                        slidesToShow={Math.min(4, tournament.photos.length)}
                        dots={true}
                        arrows={true}
                        autoplay={false}
                        responsive={[
                           {
                              breakpoint: 768,
                              settings: {
                                 slidesToShow: Math.min(
                                    2,
                                    tournament.photos.length
                                 ),
                              },
                           },
                           {
                              breakpoint: 480,
                              settings: {
                                 slidesToShow: 1,
                              },
                           },
                        ]}
                     >
                        {tournament.photos.map((photo, photoIndex) => (
                           <div key={photoIndex}>
                              <PhotoImage
                                 src={photo}
                                 alt={`Фото с ${tournament.name} #${
                                    photoIndex + 1
                                 }`}
                              />
                           </div>
                        ))}
                     </PhotoCarousel>
                  ) : (
                     <SinglePhoto
                        src={tournament.photos[0]}
                        alt={`Фото с ${tournament.name}`}
                     />
                  )}
               </TournamentItem>
            ))}
         </PastTournamentsSection>

         <ContactSection>
            <Paragraph style={{ margin: 0, color: '#333' }}>
               Связь с организаторами:{' '}
               <a
                  href="mailto:academy@football.ru"
                  style={{ color: '#ed5a0c' }}
               >
                  academy@football.ru
               </a>
               <br />
               Телефон:
               <span style={{ color: '#00a64f' }}>+7 (495) 555-12-34</span>
            </Paragraph>
         </ContactSection>
      </TournamentWrapper>
   )
}

export default TournamentAcademy
