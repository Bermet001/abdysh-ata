import { axiosInstance } from '../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

// Определяем типы данных
interface Banner {
   id: number
   title: string
   image: string
   description?: string
}

interface GetBannersResponse {
   banners: Banner[]
}

interface GetBannerResponse {
   banner: Banner
}

// Типизация ошибки
interface RejectError {
   message: string
}

// Получение списка баннеров
const getBanners = createAsyncThunk<
   GetBannersResponse,
   void,
   { rejectValue: RejectError }
>('banner/getBanners', async (_, { rejectWithValue }) => {
   try {
      const response = await axiosInstance.get<GetBannersResponse>(
         'https://abdysh-backend.webtm.ru/api/banner/getBanners'
      )
      return response.data
   } catch (error) {
      const err = error as AxiosError
      return rejectWithValue({
         message: err.message || 'Ошибка при загрузке баннеров',
      })
   }
})

const getBanner = createAsyncThunk<
   GetBannerResponse,
   number,
   { rejectValue: RejectError }
>('banner/getBanner', async (id, { rejectWithValue }) => {
   try {
      const response = await axiosInstance.get<GetBannerResponse>(
         `https://abdysh-backend.webtm.ru/api/banner/${id}`
      )
      return response.data
   } catch (error) {
      const err = error as AxiosError
      return rejectWithValue({
         message: err.message || 'Ошибка при загрузке баннера',
      })
   }
})

export const BANNER_THUNK = { getBanners, getBanner }
