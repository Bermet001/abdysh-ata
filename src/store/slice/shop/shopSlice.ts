import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PRODUCT_THUNK } from './shopThunk'

interface Category {
   id: number | null
   title: string
   slug: string
}

interface ProductColor {
   id: number
   color: string
   image: string
}

interface ProductSize {
   id: number
   size: string
}

interface ProductAttribute {
   id: number
   key: string
   value: string
}

export interface Product {
   id: number | null
   title: string
   slug: string
   category: Category
   image: string
   price: number
   old_price: number
   description: string
   product_color: ProductColor[]
   product_size: ProductSize[]
   product_attribute: ProductAttribute[]
}
interface Categories {
   id: number | null
   title: string
   slug: string
}

interface ShopState {
   isLoading: boolean
   products: Product[]
   categories: Categories[]
   product: Product | null
}

const initialState: ShopState = {
   isLoading: false,
   products: [],
   categories: [],
   product: {
      id: null,
      title: '',
      slug: '',
      old_price: 0,
      category: {
         id: null,
         title: '',
         slug: '',
      },
      image: '',
      price: 0,
      description: '',
      product_color: [],
      product_size: [],
      product_attribute: [],
   },
}

export const ShopSlice = createSlice({
   name: 'shop',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            PRODUCT_THUNK.getProducts.fulfilled,
            (state, { payload }: PayloadAction<{ results: Product[] }>) => {
               state.products = payload.results
               state.isLoading = false
            }
         )
         .addCase(PRODUCT_THUNK.getProducts.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PRODUCT_THUNK.getProducts.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            PRODUCT_THUNK.getProduct.fulfilled,
            (state, { payload }: PayloadAction<Product>) => {
               state.product = payload
               state.isLoading = false
            }
         )
         .addCase(PRODUCT_THUNK.getProduct.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PRODUCT_THUNK.getProduct.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            PRODUCT_THUNK.searchProduct.fulfilled,
            (state, { payload }: PayloadAction<{ results: Product[] }>) => {
               state.products = payload.results
               state.isLoading = false
            }
         )
         .addCase(PRODUCT_THUNK.searchProduct.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PRODUCT_THUNK.searchProduct.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            PRODUCT_THUNK.allCategories.fulfilled,
            (state, { payload }: PayloadAction<Categories[]>) => {
               state.categories = payload
               state.isLoading = false
            }
         )
         .addCase(PRODUCT_THUNK.allCategories.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PRODUCT_THUNK.allCategories.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            PRODUCT_THUNK.getCategorizedProduct.fulfilled,
            (state, { payload }: PayloadAction<{ results: Product[] }>) => {
               state.products = payload.results
               state.isLoading = false
            }
         )
         .addCase(PRODUCT_THUNK.getCategorizedProduct.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PRODUCT_THUNK.getCategorizedProduct.rejected, (state) => {
            state.isLoading = false
         })
   },
})
