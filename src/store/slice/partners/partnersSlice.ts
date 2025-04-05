import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getPartners, getPartnersBanner } from './partnersThunk'
interface Partner {
   id: number
   title: string
   image: string
   link: string
}

interface PartnerState {
   partners: Partner[]
   isLoading: boolean
   banner: string
}

const initialState: PartnerState = {
   partners: [],
   isLoading: false,
   banner: '',
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
               console.log(payload)

               state.isLoading = false
            }
         )
         .addCase(getPartners.pending, (state) => {
            state.isLoading = true
         })

         .addCase(getPartners.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            getPartnersBanner.fulfilled,
            (state, { payload }: PayloadAction<string>) => {
               state.banner = payload
               console.log(payload)

               state.isLoading = false
            }
         )
         .addCase(getPartnersBanner.pending, (state) => {
            state.isLoading = true
         })

         .addCase(getPartnersBanner.rejected, (state) => {
            state.isLoading = false
         })
   },
})
