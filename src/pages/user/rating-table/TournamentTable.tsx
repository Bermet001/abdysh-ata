import { Flex, Table, Button } from 'antd';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useMemo } from 'react';
import { getTeamsRating } from '../../../store/slice/rating/ratingThunk';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import background1 from '../../../assets/images/backround-orange-_1_-_1_.webp';

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
    { dataIndex: 'index', key: 'index', align: 'center', width: 50, render: (_, __, i) => <h3 className="text-content">{i + 1}</h3> },
    {
      dataIndex: 'team_logo',
      key: 'team_logo',
      width: 60,
      render: (logo: string) => (
        <Flex align="center" justify="center">
          <img src={logo} alt="team logo" width={40} height={40} loading="eager" style={{ objectFit: 'contain', aspectRatio: '1/1' }} />
        </Flex>
      ),
    },
    { dataIndex: 'team_title', key: 'team_title', width: 200, render: (text: string) => <h3 className="text-content">{text}</h3> },
    { title: 'И', dataIndex: 'played', key: 'played', align: 'center', width: 50, render: (text: number) => <h3 className="text-content">{text}</h3> },
    { title: 'В', dataIndex: 'won', key: 'won', align: 'center', width: 50, render: (text: number) => <h3 className="text-content">{text}</h3> },
    { title: 'Н', dataIndex: 'drawn', key: 'drawn', align: 'center', width: 50, render: (text: number) => <h3 className="text-content">{text}</h3> },
    { title: 'П', dataIndex: 'lost', key: 'lost', align: 'center', width: 50, render: (text: number) => <h3 className="text-content">{text}</h3> },
    { title: 'З-П', dataIndex: 'goals_for', key: 'goals_for', align: 'center', width: 50, render: (text: number) => <h3 className="text-content">{text}</h3> },
    { title: 'ПП', dataIndex: 'goals_against', key: 'goals_against', align: 'center', width: 50, render: (text: number) => <h3 className="text-content">{text}</h3> },
    { title: '+/-', dataIndex: 'goal_difference', key: 'goal_difference', align: 'center', width: 50, render: (text: number) => <h3 className="text-content">{text}</h3> },
    { title: 'О', dataIndex: 'points', key: 'points', align: 'center', width: 50, render: (text: number) => <h3 className="text-content">{text}</h3> },
  ];

  const dataSource = useMemo(
    () => (currentTeam?.tour_stats || []).map((team, i) => ({
      ...team,
      key: team.id || i.toString(),
      id: team.id,
    })).slice(0, isHomePage ? 6 : undefined),
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
            <h1 className="main-title">Турнирная таблица</h1>
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
          rowClassName={isLoading ? 'skeleton-row' : ''}
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
  background-image: ${({ $isHomePage }) => ($isHomePage ? `url(${background1})` : 'none')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 676px;

  .header { margin-bottom: 20px; min-height: 80px; }
  .table { margin: 0 auto; max-width: 1600px; }
  .ant-table { background: transparent; min-height: 200px; }

  .main-title {
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    margin: 0;
    min-height: 40px;
    line-height: 40px;
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
    min-height: 34px;
  }

  .ant-table-thead > tr > th {
    background: transparent;
    font-size: 14px;
    color: #fff;
    border: none;
    padding: 8px;
    text-align: center;
    min-height: 40px;
  }

  .ant-table-tbody > tr > td {
    border: none;
    padding: 8px;
    font-size: 14px;
    background: transparent;
    transition: background-color 0.3s ease;
    min-height: 48px;
  }

  .ant-table-cell{
    &::before{
      display:none
    }
  }

  .text-content {
    background: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-weight: 700;
    color: #333;
    min-width: 40px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-table-tbody > tr:hover .text-content {
    background: #00a851;
    color: white;
  }

  .skeleton-row .text-content {
    background: #e5e5e5;
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
    .header { margin-bottom: 15px; min-height: 60px; }
    .main-title { font-size: 24px; min-height: 32px; line-height: 32px; }
    .sub-title { font-size: 16px; padding: 6px 10px; min-height: 30px; }
    .ant-table-thead > tr > th { font-size: 12px; padding: 6px; min-height: 36px; }
    .ant-table-tbody > tr > td { font-size: 12px; padding: 6px; min-height: 44px; }
    .text-content { padding: 6px 10px; min-height: 28px; min-width: 36px; }
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
    .header { margin-bottom: 10px; min-height: 50px; }
    .main-title { font-size: 20px; min-height: 28px; line-height: 28px; }
    .sub-title { font-size: 14px; padding: 6px 10px; min-height: 28px; }
    .ant-table-thead > tr > th { font-size: 10px; padding: 4px; min-height: 32px; }
    .ant-table-tbody > tr > td { font-size: 10px; padding: 4px; min-height: 40px; }
    .text-content { padding: 4px 8px; min-height: 24px; min-width: 32px; }
  }
`;

const StyledButton = styled(Button)`
  background: #00a851;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  font-size: 16px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

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