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
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`products/products/${slug}`)

         return data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const searchProduct = createAsyncThunk(
   'shop/search_product',
   async (text: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(
            `products/products/?search=${text}`
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

export const PRODUCT_THUNK = { getProducts, getProduct, searchProduct }
