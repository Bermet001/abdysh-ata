import { Typography, Carousel } from 'antd'
import styled from 'styled-components'
import image1 from '../../assets/images/tournament-academy/IMG_2030 (1).jpg'
import image2 from '../../assets/images/tournament-academy/image.png'
import image22 from '../../assets/images/tournament-academy/IMG_2025.jpg'
import image222 from '../../assets/images/tournament-academy/IMG_2030.jpg'
import image2333 from '../../assets/images/tournament-academy/IMG_2033.jpg'
import image23 from '../../assets/images/tournament-academy/IMG_2050.jpg'
import image5 from '../../assets/images/tournament-academy/IMG_2080.jpg'
import image6 from '../../assets/images/tournament-academy/IMG_2080.jpg'
import image7 from '../../assets/images/tournament-academy/IMG_2092.jpg'
import image8 from '../../assets/images/tournament-academy/IMG_2352.jpg'
import image9 from '../../assets/images/tournament-academy/IMG_2353.jpg'
import image10 from '../../assets/images/tournament-academy/IMG_2354.jpg'
import image21 from '../../assets/images/tournament-academy/IMG_2356.jpg'
import image210 from '../../assets/images/tournament-academy/IMG_2358.jpg'
import image24 from '../../assets/images/tournament-academy/IMG_2361.jpg'
import image25 from '../../assets/images/tournament-academy/IMG_2362.jpg'
import image26 from '../../assets/images/tournament-academy/IMG_2363.jpg'
import image27 from '../../assets/images/tournament-academy/IMG_2369.jpg'
import { useAppSelector } from '../../store/store'
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
   padding: 30px;
   text-transform: uppercase;
   align-items: center;
   justify-content: center;
   color: #fff;
   font-size: 17px;
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

const Overlay = styled.div`
   border-radius: 12px;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 400px;
   background-color: rgba(0, 0, 0, 0.237);
   z-index: 1;

   @media (max-width: 768px) {
      height: 200px;
   }

   @media (max-width: 480px) {
      height: 150px;
   }
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
   const { contacts } = useAppSelector((state) => state.contacts)

   const contact = contacts.length > 0 ? contacts[0] : null

   const mockData = {
      banner: image10,
      text: 'Добро пожаловать в Академию Футбола! Здесь мы готовим будущих чемпионов и проводим захватывающие турниры для юных талантов. Ознакомьтесь с нашими прошедшими событиями и присоединяйтесь к следующему сезону!',
      pastTournaments: [
         {
            name: ' В 1954 году Абдыш Алымкулович был направлен на учебу в Высшую  партийную школу при ЦК КПСС в Москву, после окончания которой работал инструктором ЦК Компартии Киргизии. В 1957 году был избран секретарем по агитации и пропаганде Ошского обкома партии, а затем в ноябре 1958 года первым секретарем Советского райкома партии.',
            date: '15-17 мая 2024',
            location: 'Москва, Стадион "Юность"',
            description:
               'Турнир среди юниоров до 18 лет. 20 команд боролись за кубок, победу одержала команда "Спартак Юниор" со счетом 3:2 в финале.',
            photos: [image1, image2, image10, image21],
         },
         {
            name: '  В 1961 году был переведен в Тянь-Шанскую область и избран  председателем облисполкома. В 1962 году его переводят в Таласскую  область – первым секретарем обкома партии. В этой должности он проработал до 1966 года.',
            date: '10-12 июня 2023',
            location: 'Санкт-Петербург, Арена "Петровский"',
            description:
               'Соревнование для игроков до 16 лет. Чемпионы — "Зенит Молодежь" с разгромным счетом 5:0 в финальном матче.',
            photos: [image8, image210, image2333, image23, image22, image21],
         },
         {
            name: ' Герой Социалистического Труда, знаменитый Корчубек Акназаров вспоминал о нем: «Я был первым секретарем Ак-Талинского района. Мы строили дорогу до Нарына. Там я впервые встретился с Абдышем Алымкуловичем, он работал председателем Нарынского облисполкома. Сроки поджимали, рабочих и денег не хватало. Я обратился к нему с просьбой помочь, и он не отказал мне, более того, он прислал еще     60 рабочих. Объект мы сдали в срок. Потом наши пути много раз пересекались, но я его помню как самого умного, чуткого и доброго человека, которого я когда-либо знал. У него всегда было много идей, и все они были направлены на улучшение жизни людей».',
            date: '20-22 августа 2022',
            location: 'Новосибирск, Стадион "Сибирь"',
            description:
               'Первый крупный турнир академии. Победу одержала команда "Динамо Юниор" в серии пенальти.',
            photos: [
               image27,
               image26,
               image25,
               image24,
               image9,
               image7,
               image6,
               image5,
               image222,
            ],
         },
      ],
   }

   return (
      <TournamentWrapper>
         <StyledBanner style={{ backgroundImage: `url(${mockData.banner})` }}>
            <Overlay />
            <Title
               style={{
                  position: 'relative',
                  zIndex: 10,
                  color: '#fff',
                  margin: 0,
               }}
            >
               {' '}
               Tурнир, посвященный памяти абдыша альмикуловича, отличный способ
               сохранить и передать его наследие и вдохновить молодое поколение
               следовать его примеру.
            </Title>
         </StyledBanner>

         <TextContent>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
               Сакебаев Абдыш Алымкулович комсомольский, партийный и
               государственный деятель, выдающейся «Красный директор»
               Кыргызстана родился 8 ноября 1924 года в селе Сары-Жон Чуйской
               области. В 1939 году, после окончания сарыжонской средней школы,
               поступил во Фрунзенский педагогический техникум и в 1942 году
               начал свою трудовую деятельность в селе Тогуз-Булак, откуда его
               призвали в ряды Советской Армии. Демобилизовался он в 1946 году в
               звании капитана.
               <br />
               <br />
               В 1954 году Абдыш Алымкулович был направлен на учебу в Высшую
               партийную школу при ЦК КПСС в Москву, после окончания которой
               работал инструктором ЦК Компартии Киргизии. В 1957 году был
               избран секретарем по агитации и пропаганде Ошского обкома партии
               , а затем в ноябре 1958 года первым секретарем Советского райкома
               партии.
               <br />
               <br />
               В 1966 году Абдыш Алымкулович Сакебаев был назначен директором
               Кантского сахарного завода и до 1996 года оставался его
               бессменным руководителем.
               <br />
               <br />
               За эти 30 лет многое было сделано Абдышем Алымкуловичем для
               развития завода и Канта. Это ему принадлежит идея построить
               микрорайон городского типа в пригороде Канта, и в его
               строительстве он принимал самое активное участие. Завод продолжал
               расширяться. По его инициативе в 1976 году был введен в
               эксплуатацию цех по производству безалкогольных напитков, а в
               1983 – цех расфасовки сахара мощностью до 40 тонн в сутки, в 1987
               году открывает новые цеха по выпуску печенья и фасованной лапши.
               В 1991 на заводе работали около 500 человек.
               <br />
               <br />
               Он избирался членом ЦК Компартии Киргизии и депутатом Верховного
               Совета Киргизской ССР.
               <br />
               <br />
               Абдыш Алымкулович Сакебаев был яркой личностью. Где бы он не
               работал, оставлял после себя хороший след своей созидательной
               деятельностью.
               <br />
               <br />
               Сегодня в городе Кант, крупнейшая в стране Фирма безалкогольных
               напитков, улица, спортивный комплекс и ряд социальных объектов
               носят имя легендарного Абдыша Сакебаева.
               <br />
               <br />
            </Paragraph>
         </TextContent>

         <PastTournamentsSection>
            <Title level={3} style={{ color: '#ed5a0c' }}>
               АКЕБАЕВ АБДЫШ – КОМСОМОЛЬСКИЙ ВОЖАК 40-50-Х ГОДОВ.
            </Title>
            {mockData.pastTournaments.map((tournament, index) => (
               <TournamentItem key={index}>
                  <Paragraph
                     strong
                     style={{
                        fontSize: '16px',
                        //  color: '#00a64f'
                     }}
                  >
                     {tournament.name}
                  </Paragraph>
                  {/* <Paragraph style={{ fontSize: '14px', color: '#666' }}>
                     <strong>Дата:</strong> {tournament.date}
                     <br />
                     <strong>Место:</strong> {tournament.location}
                     <br />
                     {tournament.description}
                  </Paragraph> */}
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
                  {contact?.email}
               </a>
               <br />
               Телефон:
               <span style={{ color: '#00a64f' }}>{contact?.phone}</span>
            </Paragraph>
         </ContactSection>
      </TournamentWrapper>
   )
}

export default TournamentAcademy
