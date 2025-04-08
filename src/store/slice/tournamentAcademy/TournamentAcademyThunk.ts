import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getAcademiaBanner = createAsyncThunk(
   'academia/getAcademiaBanner',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`matches/academia-banner`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getAllData = createAsyncThunk(
   'academia/getAllData',
   async (__, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`matches/academia/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getAcademiaBanner, getAllData }
