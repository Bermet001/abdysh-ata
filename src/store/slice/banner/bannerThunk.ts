import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getBanners = createAsyncThunk(
   'banner/getBanners',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance(`cms/slider/`)

         return response.data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getBanner = createAsyncThunk(
   'banner/getBanner',
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const response = await axiosInstance(`cms/slider/${slug}`)

         return response.data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export const BANNER_THUNK = { getBanners, getBanner }
