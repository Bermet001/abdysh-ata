import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { FC, memo } from 'react';
import styled from 'styled-components';

interface IContact {
  phone?: string;
  email?: string;
  address?: string;
}

interface IProps {
  contact: IContact;
}

const FooterContacts: FC<IProps> = memo(({ contact }) => {
  if (!contact.phone && !contact.email && !contact.address) {
    return null;
  }

  return (
    <StyledContainer vertical gap={20} className="column-footer">
      <Title className="title">Контакты</Title>
      <Flex gap={12} vertical>
        {contact.phone && (
          <ContactLink href={`tel:${contact.phone}`} aria-label="Номер телефона">
            <PhoneOutlined className="contact-icon" />
            <ContactText>{contact.phone}</ContactText>
          </ContactLink>
        )}
        {contact.email && (
          <ContactLink href={`mailto:${contact.email}`} aria-label="Email">
            <MailOutlined className="contact-icon" />
            <ContactText>{contact.email}</ContactText>
          </ContactLink>
        )}
        {contact.address && (
          <ContactLink
            href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
            aria-label="Адрес"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvironmentOutlined className="contact-icon" />
            <ContactText>{contact.address}</ContactText>
          </ContactLink>
        )}
      </Flex>
    </StyledContainer>
  );
});

FooterContacts.displayName = 'FooterContacts';

export default FooterContacts;

const StyledContainer = styled(Flex)`
  max-width: 195px;
  width: 100%; 

  @media (max-width: 768px) {
    max-width: 100%;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
  color: #fff; /* Предполагаемый цвет для футера, согласованный с проектом */

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff; 
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #00a851; 
  }

  .contact-icon {
    font-size: 16px;
    margin-right: 8px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    .contact-icon {
      font-size: 14px;
      margin-right: 6px;
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;
    .contact-icon {
      font-size: 12px;
      margin-right: 4px;
    }
  }
`;

const ContactText = styled.p`
  margin: 0;
  line-height: 1.5; /* Улучшает читаемость */
`;