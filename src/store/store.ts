import { configureStore } from '@reduxjs/toolkit'
import { bannerSlice } from './slice/banner/bannerSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ShopSlice } from './slice/shop/shopSlice'
import { contactSlice } from './slice/contacts/contactsSlice'
import { partnerSlice } from './slice/partners/partnersSlice'
import { coachSlice } from './slice/coach/coachSlice'
import { historySlice } from './slice/history/historySlice'

export const store = configureStore({
   reducer: {
      [bannerSlice.name]: bannerSlice.reducer,
      [ShopSlice.name]: ShopSlice.reducer,
      [contactSlice.name]: contactSlice.reducer,
      [partnerSlice.name]: partnerSlice.reducer,
      [coachSlice.name]: coachSlice.reducer,
      [historySlice.name]: historySlice.reducer,
   },
})

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<
   ReturnType<typeof store.getState>
> = useSelector
