import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getPartners } from './partnersThunk'
interface Partner {
   id: number
   title: string
   image: string
   link: string
}

interface PartnerState {
   partners: Partner[]
   isLoading: boolean
}

const initialState: PartnerState = {
   partners: [],
   isLoading: false,
}

export const partnerSlice = createSlice({
   name: 'partner',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            getPartners.fulfilled,
            (state, { payload }: PayloadAction<Partner[]>) => {
               state.partners = payload
               state.isLoading = false
            }
         )
         .addCase(getPartners.pending, (state) => {
            state.isLoading = true
         })

         .addCase(getPartners.rejected, (state) => {
            state.isLoading = false
         })
   },
})
