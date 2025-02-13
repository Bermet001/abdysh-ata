import { axiosInstance } from '../../../configs/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const getTeam = createAsyncThunk(
   'team/getTeam',
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`/teams/team/${slug}`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getAllTeams = createAsyncThunk(
   'team/getAllTeams',
   async (__, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`teams/team/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getPlayer = createAsyncThunk(
   'team/getCoaches',
   async (slug: string | undefined, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`teams/player/${slug}`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

const getOurTeam = createAsyncThunk(
   'team/getOurTeam',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance(`teams/our-teams/`)

         return data
      } catch (error) {
         const err = error as AxiosError

         return rejectWithValue({
            message: err.message,
         })
      }
   }
)

export { getTeam, getPlayer, getAllTeams, getOurTeam }
