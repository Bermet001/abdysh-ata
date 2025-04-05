import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   getAllMatches,
   getMatch,
   getMatchBanner,
   getMatches,
} from './matchesThunk'
import { Banner } from '../interface'

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
   allMatches: Match[]
   match: Match | null
   banner: Banner[]
}

const initialState: MatchesState = {
   isLoading: false,
   matches: [],
   allMatches: [],
   match: null,
   banner: [],
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
         .addCase(
            getAllMatches.fulfilled,
            (state, { payload }: PayloadAction<Match[]>) => {
               state.allMatches = payload
               state.isLoading = false
            }
         )
         .addCase(getAllMatches.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAllMatches.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            getMatch.fulfilled,
            (state, { payload }: PayloadAction<Match>) => {
               state.match = payload
               state.isLoading = false
            }
         )
         .addCase(getMatch.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getMatch.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            getMatchBanner.fulfilled,
            (state, { payload }: PayloadAction<Banner[]>) => {
               state.banner = payload
               state.isLoading = false
            }
         )
         .addCase(getMatchBanner.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getMatchBanner.rejected, (state) => {
            state.isLoading = false
         })
   },
})
