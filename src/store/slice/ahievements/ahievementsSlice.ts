import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   getAchievement,
   getAchievements,
   getAchievementsBanner,
} from './ahievementsThunk'
import { Banner } from '../interface'

interface Achievement {
   id: number | null
   title: string
   season: string
   slug: string
   descriptions: string
   image: string
   images: string[] | null
   date: string
   content: string | null
}

interface AchievementsState {
   isLoading: boolean
   achievements: Achievement[]
   currentAchievement: Achievement | null
   banner: Banner[]
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
         images: null,
         content: null,
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
      images: null,
      content: null,
   },
   banner: [],
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
         .addCase(
            getAchievementsBanner.fulfilled,
            (state, { payload }: PayloadAction<Banner[]>) => {
               state.banner = payload
               state.isLoading = false
            }
         )
         .addCase(getAchievementsBanner.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAchievementsBanner.rejected, (state) => {
            state.isLoading = false
         })
   },
})
