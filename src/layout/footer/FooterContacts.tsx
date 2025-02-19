import {
   EnvironmentOutlined,
   MailOutlined,
   PhoneOutlined,
} from '@ant-design/icons'
import { Flex } from 'antd'
import { FC } from 'react'

interface IContact {
   phone?: string
   email?: string
   address?: string
}
interface IProps {
   contact: IContact
}

const FooterContacts: FC<IProps> = ({ contact }) => (
   <Flex className='column-footer' style={{ maxWidth: '195px' }} vertical gap={20}>
      <p className="title">Контакты</p>
      <Flex gap={10} vertical>
         <a aria-label="номер телефона" href={`tel:${contact.phone}`}>
            <PhoneOutlined /> <p>{contact.phone}</p>
         </a>
         <a aria-label="email" href={`mailto:${contact.email}`}>
            <MailOutlined /> <p>{contact.email}</p>
         </a>
         <a aria-label="адрес" href="#">
            <EnvironmentOutlined /> <p>{contact.address}</p>
         </a>
      </Flex>
   </Flex>
)

export default FooterContacts
