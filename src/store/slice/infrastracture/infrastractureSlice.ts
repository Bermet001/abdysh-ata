import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getInfrastractures, getInfrastracture, getTabDetail, getTabServiceDetail } from './infrastractureThunk'
import { Infrastructure, InitialState, ServiceDetail, Stadium, TabDetail } from './types'

export const initialState: InitialState = {
   isLoading: false,
   infrastractures: [],
   infrastracture: null,
   tabDetail: null,
   serviceDetail: null,
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

         .addCase(getTabDetail.fulfilled, (state, { payload }: PayloadAction<TabDetail>) => {
   state.tabDetail = payload
   state.isLoading = false
})
.addCase(getTabDetail.pending, (state) => {
   state.isLoading = true
})
.addCase(getTabDetail.rejected, (state) => {
   state.isLoading = false
})

.addCase(getTabServiceDetail.fulfilled, (state, { payload }: PayloadAction<ServiceDetail>) => {
   state.serviceDetail = payload
   state.isLoading = false
})
.addCase(getTabServiceDetail.pending, (state) => {
   state.isLoading = true
})
.addCase(getTabServiceDetail.rejected, (state) => {
   state.isLoading = false
})

   },
})
