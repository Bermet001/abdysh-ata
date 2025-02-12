import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAchievement, getAchievements } from './ahievementsThunk'

interface Achievement {
   id: number | null
   title: string
   season: string
   slug: string
   descriptions: string
   image: string
   date: string
}

interface AchievementsState {
   isLoading: boolean
   achievements: Achievement[]
   currentAchievement: Achievement | null
}

const initialState: AchievementsState = {
   isLoading: false,
   achievements: [
      {
         id: 0,
         title: '',
         season: '',
         slug: '',
         descriptions: '',
         image: '',
         date: '',
      },
   ],
   currentAchievement: {
      id: null,
      title: '',
      season: '',
      slug: '',
      date: '',
      descriptions: '',
      image: '',
   },
}

export const achievementsSlice = createSlice({
   name: 'achievements',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            getAchievements.fulfilled,
            (state, { payload }: PayloadAction<Achievement[]>) => {
               state.achievements = payload
               state.isLoading = false
            }
         )
         .addCase(getAchievements.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAchievements.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            getAchievement.fulfilled,
            (state, { payload }: PayloadAction<Achievement>) => {
               state.currentAchievement = payload
               state.isLoading = false
            }
         )
         .addCase(getAchievement.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAchievement.rejected, (state) => {
            state.isLoading = false
         })
   },
})
