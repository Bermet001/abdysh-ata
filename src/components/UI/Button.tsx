import React from 'react'
import { ReactNode } from 'react'
import { Button as AntdButton } from 'antd'

interface IProps {
   onClick?: () => void
   children: ReactNode
}

const Button: React.FC<IProps> = ({ onClick, children }) => {
   return <AntdButton onClick={onClick}>{children}</AntdButton>
}

export default Button
