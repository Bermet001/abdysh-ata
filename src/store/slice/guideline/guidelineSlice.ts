import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getManagmets } from './guidelineThunk'

interface IManagment {
   id: number
   name: string
   position: string
   image: string
   content: string
}

interface InitState {
   persons: IManagment[]
   isLoading: boolean
}

const initialState: InitState = {
   isLoading: false,
   persons: [],
}

export const guidelineSlice = createSlice({
   name: 'management',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            getManagmets.fulfilled,
            (state, { payload }: PayloadAction<IManagment[]>) => {
               state.persons = payload
               state.isLoading = false
            }
         )
         .addCase(getManagmets.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getManagmets.rejected, (state) => {
            state.isLoading = false
         })
   },
})
