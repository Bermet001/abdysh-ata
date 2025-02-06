import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BANNER_THUNK } from './bannerThunk'

interface Banner {
   id: number
   title: string
   image: string
   slug?: string
   subtitle: string
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
            (state, { payload }: PayloadAction<Banner[]>) => {
               state.banners = payload
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
            (state, { payload }: PayloadAction<Banner>) => {
               state.banner = payload
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

export { bannerSlice }
