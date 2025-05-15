interface Image {
   id: number
   image: string
}

interface Video {
   video: string
   id: number
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
   map_url: string
   videos: Video[]
   images: Image[]
   places: string
   opening: string
   football_fields: any 
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
   infrastracture?: Stadium | undefined | null
}

export type { Stadium, InitialState, Infrastructure }
