import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { ContactData } from '../../../pages/user/Contacts'

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
   async (contactData: ContactData, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            'settings/contact/',
            contactData
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

export const CONTACTS_THUNK = { getContacts, sendMessage }
