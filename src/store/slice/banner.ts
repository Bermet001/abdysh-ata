import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BANNER_THUNK } from './bannerThunk'

interface Banner {
   id: number
   title: string
   image: string
   description?: string
}

interface DoctorsState {
   banners: Banner[]
   banner: Banner | null
   isLoading: boolean
}

const initialState: DoctorsState = {
   banners: [],
   banner: null,
   isLoading: false,
}

const bannerSlice = createSlice({
   name: 'doctors',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            BANNER_THUNK.getBanners.fulfilled,
            (state, { payload }: PayloadAction<{ banners: Banner[] }>) => {
               state.banners = payload.banners
               state.isLoading = false
            }
         )
         .addCase(BANNER_THUNK.getBanners.pending, (state) => {
            state.isLoading = true
         })

         .addCase(BANNER_THUNK.getBanners.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            BANNER_THUNK.getBanner.fulfilled,
            (state, { payload }: PayloadAction<{ banner: Banner }>) => {
               state.banner = payload.banner
               state.isLoading = false
            }
         )
         .addCase(BANNER_THUNK.getBanner.pending, (state) => {
            state.isLoading = true
         })
         .addCase(BANNER_THUNK.getBanner.rejected, (state) => {
            state.isLoading = false
         })
   },
})

const DOCTORS_ACTIONS = bannerSlice.actions

export { bannerSlice, DOCTORS_ACTIONS }
