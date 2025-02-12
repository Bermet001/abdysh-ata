import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getInfrastractures, getInfrastracture } from './infrastractureThunk'
import { Infrastructure, InitialState, Stadium } from './types'

export const initialState: InitialState = {
   isLoading: false,
   infrastractures: [],
   infrastracture: null,
}

export const infrastractureSlice = createSlice({
   name: 'infrastracture',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            getInfrastractures.fulfilled,
            (state, { payload }: PayloadAction<Infrastructure[]>) => {
               state.infrastractures = payload
               state.isLoading = false
            }
         )
         .addCase(getInfrastractures.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getInfrastractures.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            getInfrastracture.fulfilled,
            (state, { payload }: PayloadAction<Stadium>) => {
               state.infrastracture = payload
               state.isLoading = false
            }
         )
         .addCase(getInfrastracture.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getInfrastracture.rejected, (state) => {
            state.isLoading = false
         })
   },
})
