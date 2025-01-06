import { coaches } from '../../../configs'
import CoachCard from './Coach'

const Сoaches = () => {
   return (
      <div>
         {coaches.map((item) => (
            <CoachCard key={item.id} {...item} />
         ))}
      </div>
   )
}

export default Сoaches
