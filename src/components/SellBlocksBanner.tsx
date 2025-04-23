import { Button } from 'antd';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store/store';
import { BANNER_THUNK } from '../store/slice/banner/bannerThunk';
import { useEffect } from 'react';

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
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: 0.15;
    z-index: 0;
  }

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
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  max-width: 600px;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const StyledButton = styled(Button)`
  height: 48px;
  font-size: 20px;
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
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Logo = styled.img`
  height: 50px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const TicketBanner = () => {
  const { ticket } =useAppSelector(state=>state.banner)
  const { contacts } =useAppSelector(state=>state.contacts)
  const dispatch = useAppDispatch()

  useEffect(()=>{
   dispatch(BANNER_THUNK.getTickets())
  },[])

  const contact = contacts.length > 0 ? contacts[0] : null
  const tickets = ticket.length > 0 ? ticket[0] : null
  
  return (
    <BannerContainer>
      <LogoContainer>
        <Logo src={tickets?.image} alt="iTicket Logo" />
        <Logo src={contact?.logo} alt="Abdy-Ata Logo" />
      </LogoContainer>
      <Title>{tickets?.title}</Title>
      <Subtitle> {tickets?.subtitle} </Subtitle>
      <StyledButton href={tickets?.link} target="_blank">
        Купить билеты
      </StyledButton>
    </BannerContainer>
  );
};

export default TicketBanner;