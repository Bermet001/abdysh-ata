import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getPhotos = createAsyncThunk(
   'gallery/getPhotos',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`cms/gallery/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getPhoto = createAsyncThunk(
   'gallery/getPhoto',
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`cms/gallery/${slug}`)

         return data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export const GALLERY_THUNK = { getPhotos, getPhoto }
