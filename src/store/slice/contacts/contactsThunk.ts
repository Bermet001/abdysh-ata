import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { ContactData } from '../../../pages/user/Contacts'
import { notification } from 'antd'

const getContacts = createAsyncThunk(
   'contacts/getContacts',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`settings/settings/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const sendMessage = createAsyncThunk(
   'contacts/sendContactData',
   async (
      { values, reset }: { values: ContactData; reset: () => void },
      { rejectWithValue }
   ) => {
      try {
         const { data } = await axiosInstance.post('settings/contact/', values)

         notification.success({
            message: 'Сообщение отправлено!',
            description: 'Ваше сообщение было успешно отправлено.',
         })

         reset()
         return data
      } catch (error) {
         const err = error as AxiosError

         notification.error({
            message: 'Что-то пошло не так!',
            description: 'Попробуйте еще раз.',
         })

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export const CONTACTS_THUNK = { getContacts, sendMessage }
