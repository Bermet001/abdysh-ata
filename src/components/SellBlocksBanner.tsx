import { Button } from 'antd';
import styled from 'styled-components';

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

const TicketBanner = () => {
  return (
    <BannerContainer>
      <Title>Стань частью триумфа Абдыш-Ата!</Title>
      <Subtitle>
        Поддержи нашу команду на "Нитро Арене"! Купи билеты и почувствуй дух победы.
      </Subtitle>
      <StyledButton
        href="https://ticketon.kz"
        target="_blank"
      >
        Купить билеты
      </StyledButton>
    </BannerContainer>
  );
};

export default TicketBanner;