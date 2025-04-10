import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getInfrastractures = createAsyncThunk(
   'infrastracture/getInfrastractures',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`infrastructure/infrastructure/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getInfrastracture = createAsyncThunk(
   'infrastracture/getInfrastracture',
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(
            `infrastructure/infrastructure/${slug}`
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

export { getInfrastractures, getInfrastracture }
