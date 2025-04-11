import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAcademiaAdvantages, getHistory, getHistoryAcademy } from './historyThunk'

interface ClubHistory {
   id: number
   title: string
   subtitle: string
   banner: string
   content: TrustedHTML | string
   contend: TrustedHTML | string
   content_end: TrustedHTML | null | undefined | string
   image: string
}

interface Advantages {
   id: number
   title: string
   icon: string
   order: number
}

interface HistoryState {
   isLoading: boolean
   history: ClubHistory[]
   academyHistory: ClubHistory[]
   advanteges: Advantages[]
}

interface HistoryState {
   isLoading: boolean
   history: ClubHistory[]
}
const initialState: HistoryState = {
   isLoading: false,
   history: [],
   academyHistory: [],
   advanteges: [],
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
         .addCase(
            getHistoryAcademy.fulfilled,
            (state, { payload }: PayloadAction<ClubHistory[]>) => {
               state.academyHistory = payload
               state.isLoading = false
            }
         )
         .addCase(getHistoryAcademy.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getHistoryAcademy.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            getAcademiaAdvantages.fulfilled,
            (state, { payload }: PayloadAction<Advantages[]>) => {
               state.advanteges = payload
               state.isLoading = false
            }
         )
         .addCase(getAcademiaAdvantages.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAcademiaAdvantages.rejected, (state) => {
            state.isLoading = false
         })
   },
})
