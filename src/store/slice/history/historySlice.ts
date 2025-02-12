import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getHistory } from './historyThunk'

interface ClubHistory {
   id: number
   title: string
   subtitle: string
   banner: string
   content: TrustedHTML | string
   content_end: TrustedHTML | null | undefined | string
   image: string
}

interface HistoryState {
   isLoading: boolean
   history: ClubHistory[]
}

const initialState: HistoryState = {
   isLoading: false,
   history: [],
}

export const historySlice = createSlice({
   name: 'history',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            getHistory.fulfilled,
            (state, { payload }: PayloadAction<ClubHistory[]>) => {
               state.history = payload
               state.isLoading = false
            }
         )
         .addCase(getHistory.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getHistory.rejected, (state) => {
            state.isLoading = false
         })
   },
})
