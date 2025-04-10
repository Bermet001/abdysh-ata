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
}

interface Infrastructure {
   id: number
   title: string
   slug: string
   description: string
   region: string
   address: string
   opening: string
   weave: string
   hectare: string
   image: string
}

interface InitialState {
   isLoading: boolean
   infrastractures?: Infrastructure[]
   infrastracture?: Stadium | null | undefined
}

export type { Stadium, InitialState, Infrastructure }
