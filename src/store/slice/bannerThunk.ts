import { axiosInstance } from '../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

interface Doctor {
   id: number
   name: string
}

interface GetDoctorsResponse {
   doctors: Doctor[]
}

interface GetDoctorResponse {
   doctor: Doctor
}

interface RejectError {
   message: string
}

const getBanners = createAsyncThunk<
   GetDoctorsResponse,
   void,
   { rejectValue: RejectError }
>('banners/getBanners', async (_, { rejectWithValue }) => {
   try {
      const response = await axiosInstance.get<GetDoctorsResponse>(
         'https://abdysh-backend.webtm.ru/api'
      )
      return response.data
   } catch (error) {
      const err = error as AxiosError
      return rejectWithValue({
         message: err.message || 'Ошибка при загрузке докторов',
      })
   }
})

const getBanner = createAsyncThunk<
   GetDoctorResponse,
   number,
   { rejectValue: RejectError }
>('banners/getBanner', async (id, { rejectWithValue }) => {
   try {
      const response = await axiosInstance.get<GetDoctorResponse>(
         `api/doctor/${id}`
      )
      return response.data
   } catch (error) {
      const err = error as AxiosError
      return rejectWithValue({
         message: err.message || 'Ошибка при загрузке доктора',
      })
   }
})

export const BANNER_THUNK = { getBanners, getBanner }
