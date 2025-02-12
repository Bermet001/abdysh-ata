import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NEWS_THUNK } from './newsThunk'

interface Category {
   id: number | null
   title: string
   slug: string
}

export interface News {
   id: number | null
   title: string
   slug: string
   category: Category
   image: string
   content: string
   date: string
}

interface ShopState {
   isLoading: boolean
   news: News[]
   allNews: News[]
   currentNews: News | null
}

const initialState: ShopState = {
   isLoading: false,
   news: [],
   allNews: [],
   currentNews: {
      id: null,
      title: '',
      slug: '',
      content: '',
      category: {
         id: null,
         title: '',
         slug: '',
      },
      image: '',
      date: '',
   },
}

export const NewsSlice = createSlice({
   name: 'news',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            NEWS_THUNK.getNews.fulfilled,
            (state, { payload }: PayloadAction<{ results: News[] }>) => {
               state.news = payload.results
               state.isLoading = false
            }
         )
         .addCase(NEWS_THUNK.getNews.pending, (state) => {
            state.isLoading = true
         })
         .addCase(NEWS_THUNK.getNews.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            NEWS_THUNK.getNewsPageItem.fulfilled,
            (state, { payload }: PayloadAction<{ results: News[] }>) => {
               state.allNews = payload.results
               state.isLoading = false
            }
         )
         .addCase(NEWS_THUNK.getNewsPageItem.pending, (state) => {
            state.isLoading = true
         })
         .addCase(NEWS_THUNK.getNewsPageItem.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            NEWS_THUNK.getNew.fulfilled,
            (state, { payload }: PayloadAction<News>) => {
               state.currentNews = payload
               state.isLoading = false
            }
         )
         .addCase(NEWS_THUNK.getNew.pending, (state) => {
            state.isLoading = true
         })
         .addCase(NEWS_THUNK.getNew.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            NEWS_THUNK.searchNew.fulfilled,
            (state, { payload }: PayloadAction<{ results: News[] }>) => {
               state.allNews = payload.results
               state.isLoading = false
            }
         )
         .addCase(NEWS_THUNK.searchNew.pending, (state) => {
            state.isLoading = true
         })
         .addCase(NEWS_THUNK.searchNew.rejected, (state) => {
            state.isLoading = false
         })
   },
})
