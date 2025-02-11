import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getMatches } from './matchesThunk'

interface Team {
   id: number
   title: string
   slug: string
   is_our_team: boolean
   logo: string
}

interface Liga {
   id: number
   title: string
   image: string
}

export interface Match {
   id: number
   title: string
   slug: string
   home_team: Team
   away_team: Team
   liga: Liga
   home_score: number
   away_score: number
   date: string
   location: string
   status: string
   status_display: string
   stream_link: string | null
}

interface MatchesState {
   isLoading: boolean
   matches: Match[]
   currentMatch: Match | null
}

const initialState: MatchesState = {
   isLoading: false,
   matches: [],
   currentMatch: null,
}

export const MatchesSlice = createSlice({
   name: 'matches',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            getMatches.fulfilled,
            (state, { payload }: PayloadAction<Match[]>) => {
               state.matches = payload
               state.isLoading = false
            }
         )
         .addCase(getMatches.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getMatches.rejected, (state) => {
            state.isLoading = false
         })
   },
})
