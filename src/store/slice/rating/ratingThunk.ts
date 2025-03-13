import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getTournaments = createAsyncThunk(
   'rating/getTournaments',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance('teams/tournamend/')

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)
const getTeamsRating = createAsyncThunk(
   'rating/getTeams',
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`teams/tournamend/${slug}`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getTeamsRating, getTournaments }
