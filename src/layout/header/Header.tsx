import { Affix, Button, Input, Flex, Drawer, Dropdown, Menu, MenuProps } from 'antd';
import { SearchOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Logo from '../../assets/images/main-logo.webp';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { ChangeEvent, useEffect, useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getAllTeams, getOurTeam } from '../../store/slice/team/teamThunk';
import { searchGlobal } from '../../store/slice/globalSearch/globalSearchThunk';
import { getInfrastractures } from '../../store/slice/infrastracture/infrastractureThunk';
import { getTournaments } from '../../store/slice/rating/ratingThunk';
import { getPartners } from '../../store/slice/partners/partnersThunk';

// Типизация для данных из Redux (пример, замените на свои типы)
interface Team {
  id: string;
  slug: string;
  title: string;
}

interface Infrastructure {
  id: string;
  slug: string;
  title: string;
}

interface Partner {
  link: string;
  image: string;
  title: string;
}

// Типизация для элементов меню
type MenuItem = Required<MenuProps>['items'][number];

interface StyledContainerProps {
  isScrolled: string;
}

const Header = () => {
  const { headerTeam, infrastractures, global_search: { data }, partners, rating: { teams } } =
    useAppSelector((state) => ({
      headerTeam: state.team.headerTeam as Team[] | undefined,
      infrastractures: state.infrastracture.infrastractures as Infrastructure[] | undefined,
      global_search: state.global_search as { data:any },
      partners: state.partner.partners as Partner[] | undefined,
      rating: state.rating as { teams:any },
    }));

  const [isScrolled, setIsScrolled] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useAppDispatch();
  const location = useLocation();

  // Мемоизация меню
  const menuItems: MenuItem[] = useMemo(
    () => [
      { key: '1', label: <NavLink to="/">Главная</NavLink> },
      {
        key: '2',
        label: 'Команды',
        children: headerTeam?.map(({ slug, title }) => ({
          key: slug, // Убедитесь, что slug — это string
          label: <StyledNavLink to={`/team/${slug}`}>{title}</StyledNavLink>,
        })) || [],
      },
      { key: '91', label: <NavLink to="/team/futbolnaya-akademiya">Академия</NavLink> },
      {
        key: '3',
        label: 'О клубе',
        children: [
          { key: '21', label: <StyledNavLink to="/history">История</StyledNavLink> },
          { key: '22', label: <StyledNavLink to="/guideline">Руководство</StyledNavLink> },
          { key: '23', label: <StyledNavLink to="/contacts">Контакты</StyledNavLink> },
        ],
      },
      { key: '4', label: <NavLink to="/match">Матчи</NavLink> },
      {
        key: '8',
        label: 'Инфраструктура',
        children: infrastractures?.map(({ slug, title }) => ({
          key: slug,
          label: <StyledNavLink to={`/infrastructure/${slug}`}>{title}</StyledNavLink>,
        })) || [],
      },
      {
        key: '5',
        label: <NavLink to="/rating">Турниры</NavLink>,
        children: teams?.map(({ slug, title }:any) => ({
          key: slug,
          label: <StyledNavLink to={`/tournaments/${slug}`}>{title}</StyledNavLink>,
        })) || [],
      },
      { key: '6', label: <NavLink to="/partners">Партнеры</NavLink> },
      { key: '7', label: <NavLink to="/trophy">Наши достижения</NavLink> },
    ],
    [headerTeam, infrastractures, teams]
  );

  // Мемоизация результатов поиска
  const searchResults: MenuItem[] = useMemo(
    () =>
      data
        ? [
            ...data.teams.map((team:any) => ({
              key: `team-${team.id}`,
              label: <StyledNavLink to={`/team/${team.slug}`}>{team.title}</StyledNavLink>,
            })),
            ...data.products.map((product:any) => ({
              key: `product-${product.id}`,
              label: <StyledNavLink to={`/shop/${product.slug}`}>{product.title}</StyledNavLink>,
            })),
            ...data.news.map((news:any) => ({
              key: `news-${news.id}`,
              label: <StyledNavLink to={`/news/${news.slug}`}>{news.title}</StyledNavLink>,
            })),
          ]
        : [],
    [data]
  );

  // Мемоизация навигации
  const navigations = useMemo(
    () => [
      { path: '/', title: 'Главная', id: '1' },
      {
        path: '#',
        title: 'Команды',
        id: '2',
        sub_nav: headerTeam?.map(({ slug, title, id }) => ({
          slug: `/team/${slug}`,
          title,
          id,
        })),
      },
      { path: '/team/futbolnaya-akademiya', title: 'Академия', id: '9' },
      {
        path: '/history',
        title: 'О клубе',
        id: '3',
        sub_nav: [
          { slug: '/history', title: 'История', id: '21' },
          { slug: '/guideline', title: 'Руководство', id: '22' },
          { slug: '/contacts', title: 'Контакты', id: '23' },
        ],
      },
      { path: '/match', title: 'Матчи', id: '4' },
      {
        path: '/infrastructure',
        title: 'Инфраструктура',
        id: '8',
        sub_nav: infrastractures?.map(({ slug, title, id }) => ({
          slug: `/infrastructure/${slug}`,
          title,
          id,
        })),
      },
      {
        path: '/tournaments',
        title: 'Турниры',
        id: '5',
        sub_nav: teams?.map(({ slug, title, id }:any) => ({
          slug: `/tournaments/${slug}`,
          title,
          id,
        })),
      },
      { path: '/partners', title: 'Партнеры', id: '6' },
      { path: '/trophy', title: 'Наши достижения', id: '7' },
    ],
    [headerTeam, infrastractures, teams]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    dispatch(getAllTeams());
    dispatch(getOurTeam());
    dispatch(getInfrastractures());
    dispatch(getTournaments());
    dispatch(getPartners());
  }, [dispatch]);

  const handleSearchClick = () => {
    setSearchVisible((prev) => !prev);
    setSearchQuery('');
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value) dispatch(searchGlobal(value));
    else setSearchVisible(false);
  };

  const handleMenuClick = () => {
    setSearchVisible(false);
    setDrawerVisible(false);
  };

  const isOnDifferentPage = location.pathname !== '/';

  return (
    <header style={{ position: 'fixed', top: 0, zIndex: 100, width: '100%', height: '50px' }}>
      <Affix style={{ backgroundColor: isOnDifferentPage || isScrolled ? '#fff' : 'transparent' }} offsetTop={0}>
        <StyledContainer gap={20} justify="space-between" align="center" isScrolled={isOnDifferentPage ? 'true' : isScrolled.toString()}>
          <Flex align="center" gap={15}>
            <NavLink to="/">
              <img src={Logo} width={50} height={50} alt="logo" loading="lazy" />
            </NavLink>
          </Flex>

          <Flex justify="space-between" gap={20} className="main-nav" align="center">
            {searchVisible ? (
              <>
                <StyledDropdown
                  menu={{ items: searchResults }}
                  trigger={['click']}
                  open={searchQuery.length > 0 && searchResults.length > 0}
                >
                  <StyledInput
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Поиск..."
                    autoFocus
                    style={{ border: 'none' }}
                  />
                </StyledDropdown>
                <CloseOutlined onClick={handleSearchClick} />
                <Button type="primary">Поиск</Button>
              </>
            ) : (
              <>
                <nav className="desktop-nav">
                  {navigations.map(({ path, title, id, sub_nav }) => (
                    <Dropdown
                      key={id}
                      menu={{
                        items: sub_nav?.map(({ slug, title, id }:any) => ({
                          key: id,
                          label: <StyledNavLink to={slug}>{title}</StyledNavLink>,
                        })) || [],
                      }}
                      trigger={['hover']}
                    >
                      <StyledNavLink to={path} onClick={handleMenuClick}>
                        {title}
                      </StyledNavLink>
                    </Dropdown>
                  ))}
                </nav>

                <Flex className="header-partners" align="center" gap={20}>
                  {partners?.slice(0, 3).map((item) => (
                    <a aria-label={`Партнер ${item.title}`} key={item.link} href={item.link}>
                      <img src={item.image} width={50} height={50} style={{objectFit:"contain"}} alt={`Партнер ${item.title}`} loading="lazy" />
                    </a>
                  ))}
                </Flex>

                <Button className="search-desktop" style={{ border: 'none' }} onClick={handleSearchClick}>
                  <SearchOutlined />
                </Button>
              </>
            )}

            <MenuOutlined className="mobile-menu" onClick={() => setDrawerVisible(true)} />
          </Flex>
        </StyledContainer>
      </Affix>

      <StyledDrawer placement="right" closable onClose={() => setDrawerVisible(false)} open={drawerVisible}>
        <Menu onClick={handleMenuClick} mode="inline" items={menuItems} />
        <Flex wrap style={{ padding: '24px' }} align="center" gap={20}>
          {partners?.slice(0, 3).map((item) => (
            <a aria-label={`Партнер ${item.title}`} key={item.link} href={item.link}>
              <img width={60} height={50} style={{objectFit:"contain"}} src={item.image}  alt={`Партнер ${item.title}`} loading="lazy" />
            </a>
          ))}
        </Flex>
      </StyledDrawer>
    </header>
  );
};

export default Header;

// Стили остаются без изменений
const StyledContainer = styled(Flex)<StyledContainerProps>`
  padding: 5px 30px;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: ${({ isScrolled }) => (isScrolled === 'true' || window.location.pathname !== '/' ? 'black' : 'white')};

  .search-desktop svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #000;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 15px;

    > a {
      color: ${({ isScrolled }) => (isScrolled === 'true' ? 'black' : 'white')};
      font-weight: 500;
    }
  }

  .main-nav {
    width: 100%;
  }

  .mobile-menu {
    display: none;
  }

  @media (max-width: 1360px) {
    .desktop-nav a {
      font-size: 13px;
    }
  }

  @media (max-width: 1170px) {
    .main-nav {
      width: auto;
    }
    .desktop-nav,
    .header-partners,
    .search-desktop {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
  }

  @media (max-width: 768px) {
    padding: 5px 20px;
    .mobile-menu svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  height: 40px;
  border-radius: 4px;

  @media (max-width: 1170px) {
    display: none;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 10px 0;
  }
  .ant-drawer-header-title {
    flex-direction: row-reverse !important;
  }

  span {
    color: #2d2d2d;
    padding: 15px 20px;
    display: block;
    font-weight: bold;
    font-size: 20px;
  }

  .ant-menu-item-only-child .mobile_navigations {
    font-weight: 600;
    font-size: 18px;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: green;
  }
`;

const StyledDropdown = styled(Dropdown)`
  width: 100% !important;
  border-radius: 6px !important;

  .ant-dropdown-menu {
    border-radius: 6px !important;
  }

  .ant-dropdown-menu-item {
    padding: 10px 16px;
    border-bottom: 1px solid #f0f0f0;
    transition: color 0.3s;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &:hover {
    color: #ed5a0c;
  }
`;