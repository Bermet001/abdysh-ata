import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getPartners = createAsyncThunk(
   'partners/getPartners',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`partners/partners/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)
const getPartnersBanner = createAsyncThunk(
   'partners/getPartnersBanner',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`partners/banner/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getPartners, getPartnersBanner }
