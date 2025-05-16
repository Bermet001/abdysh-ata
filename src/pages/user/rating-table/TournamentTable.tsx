import { Flex, Table, Button } from 'antd';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useMemo } from 'react';
import { getTeamsRating } from '../../../store/slice/rating/ratingThunk';
import { NavLink, useLocation, useParams } from 'react-router-dom';

const TournamentTable = () => {
  const { currentTeam, isLoading } = useAppSelector((state) => state.rating);
  const dispatch = useAppDispatch();
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const currentSlug = isHomePage ? 'kyrygzskaya-premer-liga' : slug || 'kyrygzskaya-premer-liga';

  useEffect(() => {
    dispatch(getTeamsRating(currentSlug));
  }, [dispatch, currentSlug]);

  const columns: ColumnsType<any> = [
    { 
      dataIndex: 'index', 
      key: 'index', 
      align: 'center', 
      width: 50, 
      render: (_, __, i) => <h3 className="text-content">{i + 1}</h3> 
    },
    {
      dataIndex: 'team_logo',
      key: 'team_logo',
      width: 60,
      render: (logo: string) => (
        <Flex align="center" justify="center">
          <img src={logo} alt="team logo" width={40} height={40} loading="eager" style={{ objectFit: 'contain', aspectRatio: '1/1' }} />
        </Flex>
      ),
      responsive: ['md'] 
    },
    { 
      dataIndex: 'team_title', 
      key: 'team_title', 
      width: 200, 
      render: (text: string) => <h3 className="text-content">{text}</h3> 
    },
    { 
      title: 'И', 
      dataIndex: 'played', 
      key: 'played', 
      align: 'center', 
      width: 50, 
      render: (text: number) => <h3 className="text-content">{text}</h3> 
    },
    { 
      title: 'В', 
      dataIndex: 'won', 
      key: 'won', 
      align: 'center', 
      width: 50, 
      render: (text: number) => <h3 className="text-content">{text}</h3>,
      responsive: ['md'] 
    },
    { 
      title: 'Н', 
      dataIndex: 'drawn', 
      key: 'drawn', 
      align: 'center', 
      width: 50, 
      render: (text: number) => <h3 className="text-content">{text}</h3>,
      responsive: ['md'] 
    },
    { 
      title: 'П', 
      dataIndex: 'lost', 
      key: 'lost', 
      align: 'center', 
      width: 50, 
      render: (text: number) => <h3 className="text text-content">{text}</h3>,
      responsive: ['md'] 
    },
    { 
      title: 'З-П', 
      dataIndex: 'goals_for', 
      key: 'goals_for', 
      align: 'center', 
      width: 50, 
      render: (text: number) => <h3 className="text-content">{text}</h3>,
      responsive: ['md'] 
    },
    { 
      title: 'ПП', 
      dataIndex: 'goals_against', 
      key: 'goals_against', 
      align: 'center', 
      width: 50, 
      render: (text: number) => <h3 className="text-content">{text}</h3>,
      responsive: ['md'] 
    },
    { 
      title: '+/-', 
      dataIndex: 'goal_difference', 
      key: 'goal_difference', 
      align: 'center', 
      width: 50, 
      render: (text: number) => <h3 className="text-content">{text}</h3>,
      responsive: ['md'] 
    },
    { 
      title: 'О', 
      dataIndex: 'points', 
      key: 'points', 
      align: 'center', 
      width: 50, 
      render: (text: number) => <h3 className="text-content">{text}</h3> 
    },
  ];

  const dataSource = useMemo(
    () => (currentTeam?.tour_stats || []).map((team, i) => ({
      ...team,
      key: team.id || i.toString(),
      id: team.id,
    })),
    [currentTeam, isHomePage]
  );

  const skeletonData = Array(isHomePage ? 6 : 10).fill({}).map((_, i) => ({
    key: `skeleton-${i}`,
    team_title: ' ',
    team_logo: ' ',
    played: ' ',
    won: ' ',
    drawn: ' ',
    lost: ' ',
    goals_for: ' ',
    goals_against: ' ',
    goal_difference: ' ',
    points: ' ',
  }));

  return (
    <StyledComponent $isHomePage={isHomePage}>
      <Flex vertical className="table">
        <Flex justify="space-between" align={isHomePage ? 'start' : 'center'} className="header">
          <Flex vertical>
            <h1 className="main-title">{currentSlug === 'futbolnaya-akademiya' ? 'Академия' : 'Турнирная таблица'}</h1>
            <p className="sub-title">{currentTeam?.title || 'Загрузка...'}</p>
          </Flex>
          {isHomePage && (
            <StyledButton>
              <NavLink to="/tournaments/kyrygzskaya-premer-liga">Узнать больше</NavLink>
            </StyledButton>
          )}
        </Flex>
        <Table
          dataSource={isLoading ? skeletonData : dataSource}
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
  min-height: 676px;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: ${({ $isHomePage }) => ($isHomePage ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none')};

  .header { 
    margin-bottom: 20px; 
    min-height: 80px; 
  }
  .table { 
    margin: 0 auto; 
    max-width: 1600px; 
  }
  .ant-table { 
    background: #ffffff; 
    min-height: 200px; 
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    overflow: hidden;
  }

  .main-title {
    text-transform: uppercase;
    color: #333333;
    font-weight: 600;
    margin: 0;
    min-height: 40px;
    line-height: 40px;
  }

  .sub-title {
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    background: #6c757d;
    border-radius: 6px;
    padding: 8px 12px;
    width: max-content;
    margin: 10px 0 0;
    min-height: 34px;
  }

  .ant-table-thead > tr > th {
    background: #e9ecef;
    font-size: 14px;
    color: #333333;
    border-bottom: 1px solid #d9d9d9;
    padding: 12px;
    text-align: center;
    min-height: 40px;
    font-weight: 500;
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid #e9ecef;
    padding: 8px;
    font-size: 14px;
    background: #ffffff;
    transition: background-color 0.3s ease;
    min-height: 48px;
  }

  .ant-table-cell {
    &::before {
      display: none;
    }
  }

  .text-content {
    background: #f8f9fa;
    padding: 8px 12px;
    border-radius: 6px;
    font-weight: 600;
    color: #333333;
    min-width: 40px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .ant-table-tbody > tr:hover .text-content {
    background: #e9ecef;
    color: #333333;
  }

  .skeleton-row .text-content {
    background: #e9ecef;
    color: transparent;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.6; }
    100% { opacity: 1; }
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
    min-height: auto;
    .header { 
      margin-bottom: 15px; 
      min-height: 60px; 
      flex-direction: column; 
      align-items: flex-start; 
      gap: 10px; 
    }
    .main-title { 
      font-size: 24px; 
      min-height: 32px; 
      line-height: 32px; 
    }
    .sub-title { 
      font-size: 16px; 
      padding: 6px 10px; 
      min-height: 30px; 
    }
    .ant-table-thead > tr > th { 
      font-size: 12px; 
      padding: 6px; 
      min-height: 36px; 
    }
    .ant-table-tbody > tr > td { 
      font-size: 12px; 
      padding: 6px; 
      min-height: 44px; 
    }
    .text-content { 
      padding: 6px 10px; 
      min-height: 28px; 
      min-width: 36px; 
    }
    .ant-table-tbody > tr > td:nth-child(1) .text-content { 
      min-width: 30px; 
    }
    .ant-table-tbody > tr > td:nth-child(4) .text-content { 
      min-width: 30px; 
    }
    .ant-table-tbody > tr > td:nth-child(11) .text-content { 
      min-width: 30px; 
    }
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
    .header { 
      margin-bottom: 10px; 
      min-height: 50px; 
    }
    .main-title { 
      font-size: 20px; 
      min-height: 28px; 
      line-height: 28px; 
    }
    .sub-title { 
      font-size: 14px; 
      padding: 6px 10px; 
      min-height: 28px; 
    }
    .ant-table-thead > tr > th { 
      font-size: 10px; 
      padding: 4px; 
      min-height: 32px; 
    }
    .ant-table-tbody > tr > td { 
      font-size: 10px; 
      padding: 4px; 
      min-height: 40px; 
    }
    .text-content { 
      padding: 4px 8px; 
      min-height: 24px; 
      min-width: 32px; 
    }
    .ant-table-tbody > tr > td:nth-child(1) .text-content { 
      min-width: 24px; 
    }
    .ant-table-tbody > tr > td:nth-child(4) .text-content { 
      min-width: 24px; 
    }
    .ant-table-tbody > tr > td:nth-child(11) .text-content { 
      min-width: 24px; 
    }
  }
`;

const StyledButton = styled(Button)`
  background: #6c757d;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-weight: 600;
  padding: 10px 20px;
  font-size: 16px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #5a6268;
    color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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