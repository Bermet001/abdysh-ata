import {
   FC,
   ReactNode,
   Suspense as ReactSuspense,
   useState,
   useEffect,
} from 'react'
import Preloader from '../components/Preloader'

interface IProps {
   children: ReactNode
}

const Suspense: FC<IProps> = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      if (isLoading) {
         setIsLoading(true)
      } else {
         const timer = setTimeout(() => {
            setIsLoading(false)
         }, 1000)

         return () => clearTimeout(timer)
      }
   }, [isLoading])

   return (
      <ReactSuspense
         fallback={<Preloader className={isLoading ? '' : 'loaded'} />}
      >
         {children}
      </ReactSuspense>
   )
}

export default Suspense
