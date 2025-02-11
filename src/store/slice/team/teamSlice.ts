import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTeam, getPlayer, getAllTeams } from './teamThunk'
import { AllTeamsData, Coach, TeamData, TeamState } from './types'

const initialState: TeamState = {
   team: null,
   coaches: [],
   players: [],
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
            (state, { payload }: PayloadAction<Coach[]>) => {
               state.coaches = payload
               state.isLoading = false
            }
         )
         .addCase(getPlayer.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getPlayer.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const { actions, reducer } = teamSlice
