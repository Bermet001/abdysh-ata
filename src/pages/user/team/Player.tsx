import { Flex, Image } from 'antd';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { getCoach } from '../../../store/slice/coach/coachThunk';
import { getPlayer } from '../../../store/slice/team/teamThunk';
import star from '../../../assets/images/start.webp';

const Profile: FC = () => {
  const { type, slug } = useParams<{ type: 'coach' | 'player'; slug: string | undefined }>();
  const { coach } = useAppSelector((state) => state.coach);
  const { player } = useAppSelector((state) => state.team);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (slug && type) {
      if (type === 'coach') {
        dispatch(getCoach(slug));
      } else if (type === 'player') {
        dispatch(getPlayer(slug));
      }
    }
    window.scrollTo(0, 0);
  }, [dispatch, slug, type]);

  // Normalize data based on type
  const data = type === 'coach' ? coach : player;
  const normalizedData = {
    image: data?.image || '',
    name: data?.name || 'Имя не указано',
    position: data?.position || 'Не указано',
    number: type === 'player' ? (data as any)?.number || '' : '',
    birth_date: data?.birth_date || 'Не указано',
    bio_title: type === 'coach' ? '' : (data as any)?.bio_title || '',
    bio: data?.bio || '',
    team: {
      logo: type === 'coach' ? (data as any)?.team_image || '' : (data as any)?.team?.logo || '',
      title: type === 'coach' ? 'Команда' : (data as any)?.team?.title || 'Не указано',
    },
    instagram: type === 'player' ? (data as any)?.instagram || '' : '',
    weight: type === 'player' ? (data as any)?.weight || '' : '',
    height: type === 'player' ? (data as any)?.height || '' : '',
    debut: type === 'player' ? (data as any)?.debut || '' : '',
    achievements: (type === 'coach' ? (data as any)?.achievement : (data as any)?.achievements) || [],
    schedules: type === 'coach' ? (data as any)?.schedules || [] : [],
  };

  const formatDay = (day: string): string => {
    const days: { [key: string]: string } = {
      monday: 'Понедельник',
      tuesday: 'Вторник',
      wednesday: 'Среда',
      thursday: 'Четверг',
      friday: 'Пятница',
      saturday: 'Суббота',
      sunday: 'Воскресенье',
    };
    return days[day.toLowerCase()] || day;
  };

  const formatTime = (start: string | null, end: string | null): string => {
    const startTime = start ? start.slice(0, 5) : 'Не указано';
    const endTime = end ? end.slice(0, 5) : 'Не указано';
    return `${startTime} - ${endTime}`;
  };

  const formatAchievementDate = (date: string): string => {
    if (!date) return 'Дата не указана';
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      const years = date.split('-');
      if (years.length === 2) {
        return `Год: ${years[0]}-${years[1]}`;
      }
      return `Год: ${date}`;
    }
    return `Год: ${parsedDate.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long' })}`;
  };

  return (
    <StyledContainer>
      <Flex vertical className="main-box">
        <Flex className="content" align="end">
          <Flex vertical className="main-info">
            <PlayerImage loading="lazy" src={normalizedData.image} alt={normalizedData.name} />
            <PlayerCard>
              <PlayerDetails>
                <PlayerPosition>{normalizedData.position}</PlayerPosition>
                <PlayerName>
                  {normalizedData.number && <PlayerNumber>{normalizedData.number}</PlayerNumber>}
                  <span className="name">{normalizedData.name}</span>
                </PlayerName>
              </PlayerDetails>
            </PlayerCard>
          </Flex>
          <PlayerInfo>
            {normalizedData.bio_title && (
              <h3 className="player-title">{normalizedData.bio_title}</h3>
            )}
            <PlayerBio dangerouslySetInnerHTML={{ __html: normalizedData.bio }} />
            <h3 className="player-title">Команда</h3>
            <PlayerBio style={{ display: 'flex', alignItems: 'center' }}>
              {normalizedData.team.logo && (
                <Image
                  loading="lazy"
                  width={200}
                  src={normalizedData.team.logo}
                  alt="логотип команды"
                />
              )}
              {/* <span>{normalizedData.team.title}</span> */}
            </PlayerBio>
            {normalizedData.instagram && (
              <PlayerBio>insta: {normalizedData.instagram}</PlayerBio>
            )}
            {normalizedData.schedules.length > 0 && (
              <>
                <h3 className="player-title">Расписание</h3>
                <PlayerBio>
                  {normalizedData.schedules.map((schedule: any) => (
                    <ScheduleItem key={schedule.id}>
                      <span>{formatDay(schedule.day)}: </span>
                      <span>{formatTime(schedule.start_time, schedule.end_time)}</span>
                      <span> ({schedule.group || 'Не указано'}, {schedule.location || 'Не указано'})</span>
                    </ScheduleItem>
                  ))}
                </PlayerBio>
              </>
            )}
            <DetailsContainer className="characteristics-container" justify="space-between" wrap gap={15}>
              <Flex vertical gap={5}>
                <DetailLabel>Дата рождения</DetailLabel>
                <DetailValue>{normalizedData.birth_date}</DetailValue>
              </Flex>
              {normalizedData.weight && (
                <Flex vertical gap={5}>
                  <DetailLabel>Вес</DetailLabel>
                  <DetailValue>{normalizedData.weight} кг</DetailValue>
                </Flex>
              )}
              {normalizedData.height && (
                <Flex vertical gap={5}>
                  <DetailLabel>Рост</DetailLabel>
                  <DetailValue>{normalizedData.height} см</DetailValue>
                </Flex>
              )}
              {normalizedData.debut && (
                <Flex vertical gap={5}>
                  <DetailLabel>Дебют в клубе</DetailLabel>
                  <DetailValue>{normalizedData.debut}</DetailValue>
                </Flex>
              )}
            </DetailsContainer>
          </PlayerInfo>
        </Flex>
        <Flex vertical className="accomplishments">
          <h2 className="main-title">Достижения</h2>
          {normalizedData.achievements.length > 0 ? (
            <ol className="honours-list">
              {normalizedData.achievements.map((item: any) => (
                type === 'coach' ? (
                  <CoachAchievementItem key={item.id}>
                    <Flex gap={10} align="center">
                      <img loading="lazy" src={star} alt="star" width={20} height={20} />
                      <Flex vertical>
                        <AchievementTitle>{item.title}</AchievementTitle>
                        <AchievementDate>{formatAchievementDate(item.date)}</AchievementDate>
                      </Flex>
                    </Flex>
                  </CoachAchievementItem>
                ) : (
                  <Flex key={item.id} gap={40}>
                    <img loading="lazy" src={star} alt="star" width={20} height={20} />
                    <li className="text-honour">{item.title}</li>
                  </Flex>
                )
              ))}
            </ol>
          ) : (
            <PlayerBio>Достижения отсутствуют</PlayerBio>
          )}
        </Flex>
      </Flex>
    </StyledContainer>
  );
};

export default Profile;

const StyledContainer = styled.main`
  background: linear-gradient(to bottom, #23a356, #18191b);
  padding: 90px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0;
    padding-top: 60px;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main-box {
    background-color: white;
    padding: 0 20px;
    padding-top: 20px;
    padding-bottom: 30px;
    border-radius: 3px;
    width: 100%;
    margin: 0 auto;
    max-width: 1600px;

     @media (max-width: 500px) {
      padding: 0;

     }
  }
  .content {
    background-color: white;
    margin-bottom: 50px;
    position: relative;
    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: start;
      gap: 20px;
    }
    .main-info {
      position: relative;
    }
  }
  .honours-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .text-honour {
    line-height: 28px;
    font-weight: normal;
    font-size: 20px;
    color: #474747;
  }
`;

const PlayerImage = styled.img`
  width: 400px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const slideInRight = keyframes`
  from { transform: translateX(10px) }
  to { opacity: 1; transform: translateX(0) }
`;

const PlayerInfo = styled.div`
  margin-left: 40px;
  background-color: #ebf1ed;
  padding: 20px;
  border-radius: 10px;
  max-width: 850px;
  width: 100%;
  backdrop-filter: blur(10px);
  color: black;
  animation: ${slideInRight} 0.7s ease-in;
  animation-delay: 0.2s;
  @media (max-width: 1200px) {
    margin-left: 0;
  }
  .player-title {
    font-size: 25px;
    width: 80%;
    font-weight: normal;
    margin-bottom: 20px;
    color: #249a53;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

const slideInLeft = keyframes`
  from { transform: translateY(30px) }
  to { opacity: 1; transform: translateY(0) }
`;

const PlayerCard = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -20px;
  left: 10%;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  background-color: rgba(28, 28, 28, 0.963);
  color: white;
  width: 350px;
  opacity: 0;
  animation: ${slideInLeft} 0.6s ease-in-out forwards;
  animation-delay: 0.2s;
  @media (max-width: 768px) {
    width: 80%;
    left: 10%;
  }
`;

const PlayerDetails = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const PlayerPosition = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #808490;
`;

const PlayerName = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: end;
  color: #fff;
  gap: 7px;
  justify-content: center;
  .name {
    color: #acafb9;
    font-size: 17px;
    font-weight: 500;
  }
`;

const PlayerNumber = styled.div`
  font-size: 35px;
  color: #808490;
  line-height: 1;
`;

const PlayerBio = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: #333;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DetailsContainer = styled(Flex)`
  margin-bottom: 20px;
  padding: 20px 10px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin-top: 40px;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const DetailLabel = styled.span`
  font-size: 15px;
`;

const DetailValue = styled.span`
  color: #3b3b3b;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ScheduleItem = styled.div`
  font-size: 16px;
  margin: 5px 0;
  color: #333;
  line-height: 1.5;
`;

const CoachAchievementItem = styled.li`
  background-color: #f5f5f5;
  border-left: 4px solid #23a356;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const AchievementTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

const AchievementDate = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 2px;
`;