import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { searchGlobal } from './globalSearchThunk'
import { DataState, InitialState } from './types'

const initialState: InitialState = {
   data: null,
   isLoading: false,
}

export const globalSearch = createSlice({
   name: 'global_search',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            searchGlobal.fulfilled,
            (state, { payload }: PayloadAction<DataState>) => {
               state.data = payload
               state.isLoading = false
            }
         )
         .addCase(searchGlobal.pending, (state) => {
            state.isLoading = true
         })
         .addCase(searchGlobal.rejected, (state) => {
            state.isLoading = false
         })
   },
})
