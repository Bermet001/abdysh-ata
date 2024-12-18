import { Button as AntdButton, ButtonProps } from 'antd'
import { FC, forwardRef, ReactNode } from 'react'
import { LoadingOutlined } from '@ant-design/icons'

interface IProps extends ButtonProps {
   disabled: boolean
   onClick: () => void
   children?: ReactNode
   variant?: 'primary' | 'secondary' | 'default' 
   type?: 'button' | 'submit' | 'reset' | undefined 
   colorLoading?: string
   isLoading?: boolean
}

const Button: FC<IProps> = forwardRef<HTMLButtonElement, IProps>(
   (
      {
         disabled,
         onClick,
         children,
         variant,
         type = 'submit',
         colorLoading,
         isLoading,
         ...rest
      },
      ref
   ) => (
      <AntdButton
         disabled={disabled}
         onClick={onClick}
         variant={variant}
         type={isLoading ? 'button' : type}
         ref={ref}
         {...rest}
      >
         {isLoading ? (
            <LoadingOutlined style={{ color: colorLoading }} />
         ) : (
            <>{children}</>
         )}
      </AntdButton>
   )
)

export default Button
