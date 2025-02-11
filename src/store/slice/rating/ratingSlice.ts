import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTeamsRating } from './ratingThunk'

interface Team {
   id: number | null
   team: number
   team_title: string
   team_logo: string
   played: number
   won: number
   drawn: number
   lost: number
   goals_for: number
   goals_against: number
   goal_difference: number
   points: number
   form_list: string[]
}

interface RatingState {
   isLoading: boolean
   teams: Team[]
   currentTeam: Team | null
}

const initialState: RatingState = {
   isLoading: false,
   teams: [],
   currentTeam: null,
}

export const ratingSlice = createSlice({
   name: 'rating',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            getTeamsRating.fulfilled,
            (state, { payload }: PayloadAction<Team[]>) => {
               state.teams = payload
               state.isLoading = false
               console.log(payload)
            }
         )
         .addCase(getTeamsRating.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getTeamsRating.rejected, (state) => {
            state.isLoading = false
         })
   },
})
