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
const getAllMatches = createAsyncThunk(
   'matches/geAllMatches',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`matches/matches/`)

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
const getMatchBanner = createAsyncThunk(
   'matches/getMatchBanner',
   async (__, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`/matches/banner`)

         return data
      } catch (error) {
         const err = error as AxiosError
         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getMatches, getMatch, getMatchBanner, getAllMatches }
