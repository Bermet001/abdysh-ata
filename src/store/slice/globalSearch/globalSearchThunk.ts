import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { AxiosError } from 'axios'

const searchGlobal = createAsyncThunk(
   'search/search_global',
   async (text: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`search/?q=${text}`)

         return data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { searchGlobal }
