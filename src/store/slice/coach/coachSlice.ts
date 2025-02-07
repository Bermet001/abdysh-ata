import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCoach, getCoaches } from './coachThunk'

interface Coach {
   id: number | null
   name: string
   image: string
   slug?: string
   position: string
   bio: string
   birth_date: string | null
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
      birth_date: '',
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
               console.log(payload)
               console.log(state.coach)
            }
         )
         .addCase(getCoach.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getCoach.rejected, (state) => {
            state.isLoading = false
         })
   },
})
