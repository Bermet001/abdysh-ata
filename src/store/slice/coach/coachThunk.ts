import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getCoaches = createAsyncThunk(
   'coach/getCoaches',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance('teams/coach/')

         return data
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
         const { data } = await axiosInstance(`teams/coach/${slug}`)

         return data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getSchedules = createAsyncThunk(
   'schedules/getSchedules',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`/teams/schedules/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getCoaches, getCoach, getSchedules }
