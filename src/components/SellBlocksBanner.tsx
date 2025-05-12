import { Button } from 'antd';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store/store';
import { BANNER_THUNK } from '../store/slice/banner/bannerThunk';
import { FC, useEffect } from 'react';

interface Ticket {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

interface BannerState {
  ticket: Ticket[];
  isLoading: boolean;
  error?: string;
}

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  background: linear-gradient(135deg, #ed5a0c10 0%, #00a64f10 100%);
  border-radius: 12px;
  margin: 24px 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 24px 16px;
    margin: 16px 0;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #ed5a0c;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const StyledButton = styled(Button)`
  height: 48px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  background: #00a64f;
  border: none;
  color: #fff;
  padding: 0 32px;
  transition: all 0.3s ease;

  &:hover {
    background: #008c3f;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    height: 40px;
    font-size: 16px;
    padding: 0 24px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 70px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 80px;
    height: 50px;
  }
`;

const TicketBanner: FC = () => {
  const dispatch = useAppDispatch();
  const { ticket, isLoading: bannerLoading, error: bannerError } = useAppSelector(
    (state: { banner: BannerState }) => state.banner
  );
  const { contacts, isLoading: contactsLoading, error: contactsError } = useAppSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(BANNER_THUNK.getTickets());
  }, [dispatch]);

  const ticketData = ticket?.[0];
  const contactData = contacts?.[0];

  if (bannerLoading || contactsLoading) {
    return <BannerContainer>Loading...</BannerContainer>;
  }
  if (bannerError || contactsError) {
    return <BannerContainer>Error: {bannerError || contactsError}</BannerContainer>;
  }
  if (!ticketData || !contactData) {
    return null;
  }

  return (
    <BannerContainer>
      <LogoContainer>
        <Logo
          src={ticketData.image}
          alt="iTicket Logo"
          width={100}
          height={70}
          loading="lazy"
          onError={(e) => (e.currentTarget.src = '/path/to/fallback-logo.png')}
        />
        <Logo
          src={contactData.logo}
          alt="Abdy-Ata Logo"
          width={100}
          height={70}
          loading="lazy"
          onError={(e) => (e.currentTarget.src = '/path/to/fallback-logo.png')}
        />
      </LogoContainer>
      <Title>{ticketData.title}</Title>
      <Subtitle>{ticketData.subtitle}</Subtitle>
      <StyledButton
        href={ticketData.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Купить билеты на матч"
      >
        Купить билеты
      </StyledButton>
    </BannerContainer>
  );
};

export default TicketBanner;