import { FC, ReactNode, Suspense as ReactSuspense } from 'react'
import Preloader from '../components/Preloader'

interface IProps {
   children: ReactNode
}

const Suspense: FC<IProps> = ({ children }) => {
   return <ReactSuspense fallback={<Preloader />}>{children}</ReactSuspense>
}

export default Suspense
