import { createSlice } from '@reduxjs/toolkit'
import { PRODUCT_THUNK } from './shopThunk'

const initialState = {
   isLoading: false,
   products: [],
   product: null,
}

export const ShopSlice = createSlice({
   name: 'shop',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(PRODUCT_THUNK.getProducts.fulfilled, (state, { payload }) => {
            state.products = payload.resilts
            state.isLoading = false
         })

         .addCase(PRODUCT_THUNK.getProducts.pending, (state) => {
            state.isLoading = true
         })

         .addCase(PRODUCT_THUNK.getProducts.rejected, (state) => {
            state.isLoading = false
         })
   },
})
