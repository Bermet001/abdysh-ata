interface Infrastructure {
   id: number
   title: string
   description: string
   region: string
   slug: string
   address: string
   weave: string
   hectare: string
   image: string
   map_url: string | null
}

interface Team {
   id: number
   title: string
   slug: string
   logo: string
   is_our_team: boolean
}

interface Product {
   id: number
   title: string
   slug: string
   image: string
   description: string
   price: number
   old_price: number
   category: number
}

interface News {
   id: number
   title: string
   slug: string
   content: string
   image: string
   date: string
   category: number
}

interface Achievement {
   id: number
   title: string
   slug: string
   descriptions: string
   season: string
   image: string
}

interface CategoryNews {
   id: number
   title: string
   slug: string
}

interface DataState {
   infrastructures: Infrastructure[]
   matches: unknown[]
   teams: Team[]
   products: Product[]
   category_news: CategoryNews[]
   news: News[]
   achievements: Achievement[]
}

interface InitialState {
   data: DataState | null
   isLoading: boolean
}

export type { InitialState, DataState }
