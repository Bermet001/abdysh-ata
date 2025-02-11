interface Image {
   id: number
   image: string
}

interface Stadium {
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
   videos: string[]
   images: Image[]
}

interface Infrastructure {
   id: number
   title: string
   slug: string
   description: string
   region: string
   address: string
   weave: string
   hectare: string
   image: string
}

interface InitialState {
   isLoading: boolean
   infrastractures?: Infrastructure[]
   infrastracture?: Stadium | null
}

export type { Stadium, InitialState, Infrastructure }
