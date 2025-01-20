import { Button as AntdButton } from 'antd'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
   children: ReactNode
   type?: 'default' | 'primary' | 'dashed' | 'text' | 'link'
}

const Button: FC<IProps> = ({ children, type = 'primary' }) => {
   return <StyledButton type={type}>{children}</StyledButton>
}

export default Button

const StyledButton = styled(AntdButton)`
   padding: 23px 25px;
   border: none;
   color: white;
   border-radius: 8px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 500;

   svg {
      margin-left: 5px;
   }
`
