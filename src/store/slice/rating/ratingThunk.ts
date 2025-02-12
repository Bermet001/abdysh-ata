import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getTeamsRating = createAsyncThunk(
   'rating/getTeams',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance('teams/teams-stats/')

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getTeamsRating }
