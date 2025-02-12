import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getNews = createAsyncThunk(
   'news/getNews',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`cms/news/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getNewsPageItem = createAsyncThunk(
   'news/getNewsPageItem',
   async (
      info: {
         page?: number
         screenWidth?: number
         search?: string
         category?: string
      },
      { rejectWithValue }
   ) => {
      try {
         const { page, screenWidth, search, category } = info

         const url =
            (category ? `&category=${category}` : '') +
            `cms/news/?page=${page}&page_size=${screenWidth}` +
            (search ? `&search=${search}` : '')

         const { data } = await axiosInstance(url)
         return data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getNew = createAsyncThunk(
   'news/getNew',
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`cms/news/${slug}`)

         return data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const searchNew = createAsyncThunk(
   'news/search_new',
   async (text: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`cms/news/?search=${text}`)

         return data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export const NEWS_THUNK = { getNew, getNews, getNewsPageItem, searchNew }
