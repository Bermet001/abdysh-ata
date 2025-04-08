import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCoach, getCoaches } from './coachThunk'

export interface Schedule {
   id: number
   coach: number
   coach_name: string
   group: string
   monday_start: string
   monday_end: string
   tuesday_start: string
   tuesday_end: string
   wednesday_start: string
   wednesday_end: string
   thursday_start: string
   thursday_end: string
   friday_start: string
   friday_end: string
   saturday_start: string
   saturday_end: string
   sunday_start: string
   sunday_end: string
   location: string
}

interface Coach {
   id: number | null
   name: string
   image: string
   slug?: string
   position: string
   bio: string
   birth_date: string | null
   schedules: Schedule[]
   team_image: string
}

interface CoachState {
   coaches: Coach[]
   coach: Coach
   isLoading: boolean
}

const initialState: CoachState = {
   coaches: [],
   coach: {
      id: null,
      name: '',
      image: '',
      slug: '',
      bio: '',
      position: '',
      birth_date: null,
      schedules: [],
      team_image: '',
   },
   isLoading: false,
}

export const coachSlice = createSlice({
   name: 'coach',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            getCoaches.fulfilled,
            (state, { payload }: PayloadAction<Coach[]>) => {
               state.coaches = payload
               state.isLoading = false
            }
         )
         .addCase(getCoaches.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getCoaches.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            getCoach.fulfilled,
            (state, { payload }: PayloadAction<Coach>) => {
               state.coach = payload
               state.isLoading = false
            }
         )
         .addCase(getCoach.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getCoach.rejected, (state) => {
            state.isLoading = false
         })
      // .addCase(
      //    getSchedules.fulfilled,
      //    (state, { payload }: PayloadAction<Schedule[]>) => {
      //       // state.schedules = payload
      //       state.isLoading = false
      //    }
      // )
      // .addCase(getSchedules.pending, (state) => {
      //    state.isLoading = true
      // })
      // .addCase(getSchedules.rejected, (state) => {
      //    state.isLoading = false
      // })
   },
})

export const { actions, reducer } = coachSlice
