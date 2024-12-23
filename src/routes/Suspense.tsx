import { Loading3QuartersOutlined } from '@ant-design/icons'
import { FC, ReactNode, Suspense as ReactSuspense } from 'react'

interface IProps {
   children: ReactNode
}

const Suspense: FC<IProps> = ({ children }) => (
   <ReactSuspense fallback={<Loading3QuartersOutlined />}>
      {children}
   </ReactSuspense>
)

export default Suspense
