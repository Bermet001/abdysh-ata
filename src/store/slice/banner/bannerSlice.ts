import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BANNER_THUNK } from './bannerThunk'

interface Banner {
   id: number | null
   title: string
   image: string
   slug?: string
   subtitle: string
}

interface Ticket{
   id:number
   title:string
   subtitle:string
   link:string
   image:string
}

interface BannerState {
   banners: Banner[]
   banner: Banner
   isLoading: boolean
   ticket:Ticket[]
}

const initialState: BannerState = {
   banners: [],
   banner: {
      id: null,
      title: '',
      image: '',
      slug: '',
      subtitle: '',
   },
   ticket:[],
   isLoading: false,
}

export const bannerSlice = createSlice({
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
         .addCase(
            BANNER_THUNK.getTickets.fulfilled,
            (state, { payload }: PayloadAction<Ticket[]>) => {
               state.ticket = payload
               state.isLoading = false
            }
         )
         .addCase(BANNER_THUNK.getTickets.pending, (state) => {
            state.isLoading = true
         })
         .addCase(BANNER_THUNK.getTickets.rejected, (state) => {
            state.isLoading = false
         })
   },
})
