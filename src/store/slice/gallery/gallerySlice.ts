import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GALLERY_THUNK } from './galleryThunk'

export interface Photo {
   id: number | null
   title: string
   slug: string
   image_main: string
   date?: string
}

interface GalleryState {
   isLoading: boolean
   gallery: Photo[]
   currentPhoto: Photo | null
}

const initialState: GalleryState = {
   isLoading: false,
   gallery: [],
   currentPhoto: {
      id: null,
      title: '',
      slug: '',
      image_main: '',
   },
}

export const gallerySlice = createSlice({
   name: 'gallery',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            GALLERY_THUNK.getPhotos.fulfilled,
            (state, { payload }: PayloadAction<Photo[]>) => {
               state.gallery = payload
               state.isLoading = false
            }
         )
         .addCase(GALLERY_THUNK.getPhotos.pending, (state) => {
            state.isLoading = true
         })
         .addCase(GALLERY_THUNK.getPhotos.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            GALLERY_THUNK.getPhoto.fulfilled,
            (state, { payload }: PayloadAction<Photo>) => {
               state.currentPhoto = payload
               state.isLoading = false
            }
         )
         .addCase(GALLERY_THUNK.getPhoto.pending, (state) => {
            state.isLoading = true
         })
         .addCase(GALLERY_THUNK.getPhoto.rejected, (state) => {
            state.isLoading = false
         })
   },
})
