import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getAchievements = createAsyncThunk(
   'news/getNews',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`achievements/ahievements/
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
   'news/getNew',
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
