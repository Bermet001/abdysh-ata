import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getMatches = createAsyncThunk(
   'matches/getMatches',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`matches/last-four-matches/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getMatch = createAsyncThunk(
   'matches/getMatch',
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const slug = 'abdysh-ata-vs-kara-balta-2024-09-11'
         const { data } = await axiosInstance(`/matches/matches/${slug}`)

         return data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getMatches, getMatch }
