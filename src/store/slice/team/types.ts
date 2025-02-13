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

interface Liga {
   id: number
   title: string
   image: string
}

interface Achievement {
   id: number
   title: string
   liga: Liga
   date: string
}

interface IPlayer {
   id: number
   name: string
   slug: string
   image: string
   bio_title: string
   bio: string
   instagram: string
   birth_date: string
   weight: string
   height: string
   debut: string
   position: string
   number: number
   team: Team
   achievements: Achievement[]
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
interface NavTeam {
   id: number | null
   title: string
   slug: string
   is_our_team: boolean
   logo: string
}

interface TeamState {
   team: Team | null
   coaches: Coach[]
   players: Player[]
   player: IPlayer
   allTeams: AllTeamsData[]
   isLoading: boolean
   headerTeam: NavTeam[] | []
}

export type { TeamState, AllTeamsData, TeamData, Coach, IPlayer, NavTeam }
