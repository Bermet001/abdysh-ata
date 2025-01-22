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
   padding: 1.5rem 1.5rem;
   border: none;
   color: white;
   border-radius: 8px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 500;
   font-size: 1rem;

   svg {
      margin-left: 0.5rem;
   }

   @media (max-width: 768px) {
      padding: 1.2rem 1.2rem;
      font-size: 0.9rem;
   }

   @media (max-width: 660px) {
      padding: 0.7rem 1rem;
      font-size: 0.65rem;
   }

   &:hover {
      opacity: 0.9;
      transition: opacity 0.3s;
   }

   &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
   }
`
