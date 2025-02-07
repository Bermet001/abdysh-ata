import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getCoaches = createAsyncThunk(
   'coach/getCoaches',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance('teams/coach/')

         return response.data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getCoach = createAsyncThunk(
   'coach/getCoach',
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const response = await axiosInstance(`teams/coach/${slug}`)

         return response.data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getCoaches, getCoach }
