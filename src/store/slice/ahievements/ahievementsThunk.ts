import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getAchievements = createAsyncThunk(
   'achievement/getAchievements',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`teams/teams-stats/
`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getAchievement = createAsyncThunk(
   'achievement/getAchievement',
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(
            `achievements/ahievements/${slug}`
         )

         return data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getAchievements, getAchievement }
