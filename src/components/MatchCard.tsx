import { FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from 'antd';

interface Team {
  id: number;
  title: string;
  slug: string;
  is_our_team: boolean;
  logo: string;
}

interface Match {
  home_team: Team;
  away_team: Team;
  home_score: number;
  away_score: number;
  date: string;
  slug: string;
}

const MatchCard: FC<Match> = ({
  home_team,
  away_team,
  date,
  home_score,
  away_score,
  slug,
}) => {
  // Мемоизация форматирования даты
  const formattedDate = useMemo(() => {
    const dateObj = new Date(date);
    return `${dateObj.toLocaleDateString('ru-RU')} ${dateObj.toLocaleTimeString('ky-KG', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })}`;
  }, [date]);

  return (
    <NavLink to={`/match/${slug}`} aria-label={`Матч ${home_team.title} против ${away_team.title}`}>
      <MatchCardContainer vertical align="center">
        <Time>{formattedDate}</Time>
        <Flex className="main-info" align="center" justify="space-between">
          <Team vertical align="center" justify="center">
            <img
              src={home_team.logo}
              alt={`${home_team.title} logo`}
              width={50}
              height={50}
              loading="lazy"
            />
          </Team>
          <Flex className="count-down" vertical align="center" justify="center">
            <p>
              {home_score} : {away_score}
            </p>
          </Flex>
          <Team vertical align="center" justify="center">
            <img
              src={away_team.logo}
              alt={`${away_team.title} logo`}
              width={50}
              height={50}
              loading="lazy"
            />
          </Team>
        </Flex>
      </MatchCardContainer>
    </NavLink>
  );
};

export default MatchCard;

const MatchCardContainer = styled(Flex)`
  background-color: #fff;
  color: #000;
  padding: 20px;
  text-align: center;
  min-width: 230px;
  max-width: 310px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;

  .main-info {
    min-height: 120px;
    padding: 15px;
    width: 100%;
  }

  img {
    height: auto;
    max-width: 50px;
  }

  .count-down p {
    font-size: 28px;
    font-weight: bold;
    margin: 10px 0;
  }

  @media (max-width: 1200px) {
    .count-down p {
      font-size: 26px;
    }
  }

  @media (max-width: 1000px) {
    padding: 10px;
    min-width: 200px;
    .main-info {
      padding: 0 15px;
      min-height: 110px;
    }
    img {
      max-width: 40px;
    }
  }

  @media (max-width: 768px) {
    max-width: 210px;
    .count-down p {
      font-size: 20px;
    }
    img {
      max-width: 35px;
    }
  }

  @media (max-width: 470px) {
    max-width: 160px;
    min-width: 150px;
    .main-info {
      padding: 5px;
      min-height: 60px;
    }
    img {
      max-width: 30px;
    }
    .count-down p {
      font-size: 18px;
    }
  }
`;

const Team = styled(Flex)`
  margin: 10px 0;
  height: 50px;

  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

const Time = styled.h3`
  margin: 10px 0;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;