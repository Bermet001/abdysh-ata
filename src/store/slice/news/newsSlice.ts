import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NEWS_THUNK } from './newsThunk'

interface Category {
   id: number | null
   title: string
   slug: string
}
interface Categories {
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
   total_page: number
   news: News[]
   allNews: News[]
   categories: Categories[]
   currentNews: News | null
}

const initialState: ShopState = {
   isLoading: false,
   news: [],
   total_page: 0,
   allNews: [],
   categories: [],
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
            (
               state,
               {
                  payload,
               }: PayloadAction<{ results: News[]; total_page: number }>
            ) => {
               state.news = payload.results
               state.total_page = payload.total_page
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

         .addCase(
            NEWS_THUNK.allCategories.fulfilled,
            (state, { payload }: PayloadAction<Categories[]>) => {
               state.categories = payload
               state.isLoading = false
            }
         )
         .addCase(NEWS_THUNK.allCategories.pending, (state) => {
            state.isLoading = true
         })
         .addCase(NEWS_THUNK.allCategories.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            NEWS_THUNK.getCategorizedNew.fulfilled,
            (state, { payload }: PayloadAction<{ results: News[] }>) => {
               state.allNews = payload.results
               state.isLoading = false
            }
         )
         .addCase(NEWS_THUNK.getCategorizedNew.pending, (state) => {
            state.isLoading = true
         })
         .addCase(NEWS_THUNK.getCategorizedNew.rejected, (state) => {
            state.isLoading = false
         })
   },
})
