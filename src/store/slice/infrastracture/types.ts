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
   tabs:any
   football_fields: any 
}

interface Infrastructure {
   id: number
   length: number
   title: string
   slug: string
   description: string
   region: string
   address: string
   weave: string
   hectare: string
   image: string
}

// interface InitialState {
//    isLoading: boolean
//    infrastractures?: Infrastructure[]
//    infrastracture?: Stadium | undefined | null
// }


export interface TabDetail {
   id: number
   title: string
   slug: string
   content: string
   type: string
}

export interface ServiceDetail {
   id: number
   title: string
   slug: string
   description: string
   [key: string]: any
}


 interface InitialState {
   isLoading: boolean
   infrastractures: Infrastructure[]
   infrastracture: Stadium | null
   tabDetail?: TabDetail | null
   serviceDetail?: ServiceDetail | null
}

export type { Stadium, InitialState, Infrastructure }
