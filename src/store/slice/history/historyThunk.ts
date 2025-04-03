import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getHistory = createAsyncThunk(
   'history/getHistory',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`about/histories/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getHistoryAcademy = createAsyncThunk(
   'history/getHistoryAcademy',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`teams/academia/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getHistory, getHistoryAcademy }
