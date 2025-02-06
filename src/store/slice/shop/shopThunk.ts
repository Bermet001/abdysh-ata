import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getProducts = createAsyncThunk(
   'shop/getProducts',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`products/products/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getProduct = createAsyncThunk(
   'shop/getProduct',
   async (slug: string, { rejectWithValue }) => {
      try {
         const response = await axiosInstance(`products/products/${slug}`)

         return response.data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export const PRODUCT_THUNK = { getProducts, getProduct }
