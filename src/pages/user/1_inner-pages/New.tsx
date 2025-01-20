import { FC } from 'react'
import { Typography, Card, Flex } from 'antd'
import styled from 'styled-components'
import image from '../../../assets/images/background2.jpg'
import News from '../../../components/News'

const { Title, Paragraph } = Typography

const New: FC = () => {
   window.scrollTo(0, 0)

   return (
      <StyledContainer>
         <BackgroundContainer />

         <ContentCard>
            <Flex gap={20} vertical align="center">
               <Flex vertical>
                  <StyledTitle level={1}>Raul Neto leaves Barça</StyledTitle>

                  <Flex justify="space-between" className="date-info">
                     <Paragraph>
                        <a style={{ color: '#888', fontSize: '0.9em' }} href="">
                           fcabdyshata.com
                        </a>

                        <br />

                        <span style={{}}>04:59 PM THURSDAY 02 JAN</span>
                     </Paragraph>
                     <Paragraph className="sport-type">football</Paragraph>
                  </Flex>

                  <StyledParagraph>
                     Рауль Нето покинет «Абдыш-ата» после того, как клуб и игрок
                     достигли соглашения о расторжении контракта с игроком.
                     после недавней травмы бразильца. 27 декабря в игре в матче
                     против Нето получил травму левого подколенного сухожилия,
                     из-за которой он выбыл из строя. левого подколенного
                     сухожилия, из-за чего он выбыл из строя примерно на три
                     месяцев.
                  </StyledParagraph>

                  <StyledParagraph>
                     ФК «Абдыш-ата» хотел бы отметить профессионализм Рауля Нето
                     профессионализм Рауля Нето и его способность всегда всегда
                     поддерживать команду наилучшим образом. Медицинский
                     персонал клуба Медицинский персонал клуба также предложил
                     свою помощь игроку во время его восстановления.
                  </StyledParagraph>

                  <StyledTitle level={3}>Две досадные травмы</StyledTitle>

                  <StyledParagraph>
                     Бразилец присоединился к клубу 24 ноября. 24 ноября, чтобы
                     закрыть свою травму вместе с партнером по команде Нико
                     Лапровиттола. Он провел короткий матч против «Реала
                     Мадрид», а спустя несколько дней сыграл в Евролиге против
                     «Црвены Звезды», но получил вторую травму после предыдущей.
                     предыдущей.
                  </StyledParagraph>
               </Flex>
            </Flex>
         </ContentCard>

         <News />
      </StyledContainer>
   )
}

export default New

const StyledContainer = styled.main`
   margin-bottom: 40px;
`

const BackgroundContainer = styled.div`
   background-image: url(${image});
   background-size: cover;
   background-attachment: fixed;
   background-position: center;
   min-height: 50vh;
`

const ContentCard = styled(Card)`
   border-radius: 20px;
   max-width: 700px;
   margin: 0 auto;
   border: none;
   text-align: start;

   .date-info {
      width: 100%;
      border-bottom: 0.4px solid #ccc;
      margin-bottom: 30px;

      span {
         text-transform: uppercase;
         font-weight: 600;
         color: #04a54f;
         font-size: 0.9em;
      }

      .sport-type {
         text-transform: uppercase;
         font-size: 0.9em;
         font-weight: 600;
         color: #04a54f;
      }
   }
`

const StyledTitle = styled(Title)`
   text-align: start;
`

const StyledParagraph = styled(Paragraph)`
   font-size: 1rem;
   color: #8e8e8e;
   font-weight: 300;
`
