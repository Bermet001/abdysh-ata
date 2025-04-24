import { Flex, Table, Button } from 'antd';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
import { getTeamsRating } from '../../../store/slice/rating/ratingThunk';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import background1 from '../../../assets/images/backround-orange.png'; // Фон для главной страницы
import background2 from '../../../assets/images/banner-rating.png'; // Фон для других страниц

interface TeamData {
  key: string | number | null | undefined;
  team_title: string;
  team_logo: string;
  won: number;
  drawn: number;
  lost: number;
  goals_for: number;
  goals_against: number;
  goal_difference: number;
  points: number;
  form_list: string[];
  played: number;
}

const TournamentTable = () => {
  const { currentTeam } = useAppSelector((state) => state.rating);
  const dispatch = useAppDispatch();
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const defaultSlug = 'kyrygzskaya-premer-liga';
  const currentSlug = isHomePage ? defaultSlug : slug || defaultSlug;

  useEffect(() => {
    dispatch(getTeamsRating(currentSlug));
  }, [dispatch, currentSlug]);

  const columns: ColumnsType<TeamData> = [
    {
      title: '',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      render: (_text: string, _record: TeamData, index: number) => (
        <h3 className="text-content">{index + 1}</h3>
      ),
    },
    {
      title: '',
      dataIndex: 'team_logo',
      key: 'team_logo',
      render: (record: string) => (
        <Flex align="center">
          <div>
            <img
              src={record}
              alt="team logo"
              style={{
                objectFit: 'contain',
                width: '40px',
                height: '40px',
                maxHeight: '40px',
              }}
            />
          </div>
        </Flex>
      ),
    },
    {
      title: '',
      dataIndex: 'team_title',
      key: 'team_title',
      render: (text: string) => <h3 className="text-content">{text}</h3>,
    },
    {
      title: 'И',
      dataIndex: 'played',
      key: 'played',
      align: 'center',
      render: (text: number) => <h3 className="text-content">{text}</h3>,
    },
    {
      title: 'В',
      dataIndex: 'won',
      key: 'won',
      align: 'center',
      render: (text: number) => <h3 className="text-content">{text}</h3>,
    },
    {
      title: 'Н',
      dataIndex: 'drawn',
      key: 'drawn',
      align: 'center',
      render: (text: number) => <h3 className="text-content">{text}</h3>,
    },
    {
      title: 'П',
      dataIndex: 'lost',
      key: 'lost',
      align: 'center',
      render: (text: number) => <h3 className="text-content">{text}</h3>,
    },
    {
      title: 'З-П',
      dataIndex: 'goals_for',
      key: 'goals_for',
      align: 'center',
      render: (text: number) => <h3 className="text-content">{text}</h3>,
    },
    {
      title: 'ПП',
      dataIndex: 'goals_against',
      key: 'goals_against',
      align: 'center',
      render: (text: number) => <h3 className="text-content">{text}</h3>,
    },
    {
      title: '+/-',
      dataIndex: 'goal_difference',
      key: 'goal_difference',
      align: 'center',
      render: (text: number) => <h3 className="text-content">{text}</h3>,
    },
    {
      title: 'О',
      dataIndex: 'points',
      key: 'points',
      align: 'center',
      render: (text: number) => <h3 className="text-content">{text}</h3>,
    },
  ];

  const dataSource: TeamData[] =
    currentTeam?.tour_stats
      ?.map((team, index) => ({
        ...team,
        key: team.id || index.toString(),
      }))
      .slice(0, isHomePage ? 6 : undefined) || [];

  return (
    <StyledComponent $isHomePage={isHomePage}>
      <Flex vertical className="table">
        <Flex
          justify="space-between"
          align={isHomePage ? 'start' : 'center'}
          className="header"
        >
          <Flex vertical>
            <h1 className="main-title">Турнирная таблица</h1>
            <p className="sub-title">{currentTeam?.title}</p>
          </Flex>
          {isHomePage && (
            <StyledButton aria-hidden="true">
              <NavLink to="tournaments/kyrygzskaya-premer-liga">
                Узнать больше
              </NavLink>
            </StyledButton>
          )}
        </Flex>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          rowKey="id"
          scroll={{ x: 'max-content' }}
        />
      </Flex>
    </StyledComponent>
  );
};

export default TournamentTable;

const StyledComponent = styled.div<{ $isHomePage: boolean }>`
  padding: 75px;
  margin: 0 auto;
  margin-top: ${({ $isHomePage }) => ($isHomePage ? '30px' : '0')};
  background-image: ${({ $isHomePage }) =>
    $isHomePage ? `url(${background1})` : null};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }

  .header {
    margin-bottom: 20px;
  }

  .main-title {
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  .sub-title {
    color: white;
    font-size: 18px;
    font-weight: 300;
    background-color: #00a851;
    border-radius: 6px;
    padding: 8px 12px;
    width: max-content;
    margin: 10px 0 0;
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      padding: 6px 10px;
    }
  }

  .table {
    margin: 0 auto;
    max-width: 1600px;
  }

  .ant-table {
    background: transparent;
    width: 100%;
  }

  .ant-table-thead > tr > th {
    background: transparent;
    font-size: 14px;
    color: #fff;
    border: none;
    padding: 8px;
    text-align: center;
    &::before {
      width: 0 !important;
    }
    @media (max-width: 768px) {
      font-size: 12px;
      padding: 6px;
    }
    @media (max-width: 480px) {
      font-size: 10px;
      padding: 4px;
    }
  }

  .ant-table-tbody > tr > td {
    border: none;
    padding: 8px;
    font-size: 14px;
    background: transparent;
    transition: background-color 0.3s ease;
    @media (max-width: 768px) {
      font-size: 12px;
      padding: 6px;
    }
    @media (max-width: 480px) {
      font-size: 10px;
      padding: 4px;
    }
  }

  .ant-table-tbody > tr .text-content {
    background: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-weight: 700;
    color: #333;
    @media (max-width: 768px) {
      padding: 6px 10px;
    }
    @media (max-width: 480px) {
      padding: 4px 8px;
    }
  }

  .ant-table-tbody > tr:hover {
    background-color: transparent !important;
  }

  .ant-table-tbody > tr:hover .text-content {
    background: #00a851;
    color: white;
  }

  .ant-table-tbody > tr:hover td {
    background: transparent;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
    .header {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
    .header {
      margin-bottom: 10px;
    }
  }
`;

const StyledButton = styled(Button)`
  background: #00a851;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  height: auto;
  font-size: 16px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  align-self: flex-start;

  &:hover {
    background: #008f43;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;