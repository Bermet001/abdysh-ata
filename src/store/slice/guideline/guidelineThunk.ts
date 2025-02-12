import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getManagmets = createAsyncThunk(
   'managment/getManagment',
   async (__, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`/about/managements/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getManagmets }
