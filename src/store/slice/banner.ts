import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BANNER_THUNK } from './bannerThunk'

interface Banner {
   id: number
   title: string
   image: string
   description?: string
}

interface BannerState {
   banners: Banner[]
   banner: Banner | null
   isLoading: boolean
}

const initialState: BannerState = {
   banners: [],
   banner: null,
   isLoading: false,
}

const bannerSlice = createSlice({
   name: 'banner',
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

const BANNERS_ACTIONS = bannerSlice.actions

export { bannerSlice, BANNERS_ACTIONS }
