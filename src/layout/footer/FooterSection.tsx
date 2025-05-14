import { Flex } from 'antd'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface Item {
   path?: string
   title?: string
   slug?: string
}

interface IPrors {
   title: string
   items?: Item[] | []
   prefix?: string
   isNav?: boolean
}

const FooterSection: FC<IPrors> = ({
   title,
   items = [],
   prefix = '',
   isNav = false,
}) => (
   <Flex
      className="column-footer"
      style={{ maxWidth: '195px' , minWidth: '200px', minHeight: '270px'}}
      vertical
      gap={8}
   >
      <p className="title">{title}</p>
      {isNav ? (
         <nav>
            <Flex vertical gap={12}>
               {items.map(({ path, title }) => (
                  <NavLink key={title} to={path || ''}>
                     {title}
                  </NavLink>
               ))}
            </Flex>
         </nav>
      ) : (
         <Flex vertical gap={12}>
            {items.map(({ slug, title }) => (
               <NavLink key={title} to={`${prefix}${slug}`}>
                  {title}
               </NavLink>
            ))}
         </Flex>
      )}
   </Flex>
)

export default FooterSection
