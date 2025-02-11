interface Team {
   id: number
   title: string
   slug: string
   is_our_team: boolean
   logo: string
}

interface Coach {
   id: number
   name: string
   slug: string
   image: string
   position: string
   bio: string
   team: Team
}

interface Player {
   id: number
   name: string
   slug: string
   image: string
   position: string
   number: number
   team: Team
}

interface TeamData {
   team: Team
   coaches: Coach[]
   players: Player[]
}

interface AllTeamsData {
   id: number | null
   title: string
   logo: string
   slug: string
   is_our_team: boolean
}

interface TeamState {
   team: Team | null
   coaches: Coach[]
   players: Player[]
   allTeams: AllTeamsData[]
   isLoading: boolean
}

export type { TeamState, AllTeamsData, TeamData, Coach }
