import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTeam, getPlayer, getAllTeams, getOurTeam } from './teamThunk'
import { AllTeamsData, IPlayer, NavTeam, TeamData, TeamState } from './types'

const initialState: TeamState = {
   team: null,
   headerTeam: [],
   coaches: [],
   players: [],
   player: {
      id: 0,
      name: '',
      slug: '',
      image: '',
      bio_title: '',
      bio: '',
      instagram: '',
      birth_date: '',
      weight: '0',
      height: '0',
      debut: '',
      position: '',
      number: 0,
      team: {
         id: 0,
         title: '',
         slug: '',
         is_our_team: false,
         logo: '',
      },
      achievements: [],
   },
   allTeams: [],
   isLoading: false,
}

export const teamSlice = createSlice({
   name: 'team',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            getTeam.fulfilled,
            (state, { payload }: PayloadAction<TeamData>) => {
               state.team = payload.team
               state.coaches = payload.coaches
               state.players = payload.players
               state.isLoading = false
            }
         )
         .addCase(getTeam.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getTeam.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            getAllTeams.fulfilled,
            (state, { payload }: PayloadAction<AllTeamsData[]>) => {
               state.allTeams = payload
               state.isLoading = false
            }
         )
         .addCase(getAllTeams.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAllTeams.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            getPlayer.fulfilled,
            (state, { payload }: PayloadAction<IPlayer>) => {
               state.player = payload
               state.isLoading = false
            }
         )
         .addCase(getPlayer.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getPlayer.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            getOurTeam.fulfilled,
            (state, { payload }: PayloadAction<NavTeam[]>) => {
               state.headerTeam = payload
               state.isLoading = false
               console.log(payload, 'fadshj;fk')
            }
         )
         .addCase(getOurTeam.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getOurTeam.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const { actions, reducer } = teamSlice
