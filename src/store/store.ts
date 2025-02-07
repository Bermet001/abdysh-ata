import { configureStore } from '@reduxjs/toolkit'
import { bannerSlice } from './slice/banner/bannerSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ShopSlice } from './slice/shop/shopSlice'
import { contactSlice } from './slice/contacts/contactsSlice'
import { partnerSlice } from './slice/partners/partnersSlice'

export const store = configureStore({
   reducer: {
      [bannerSlice.name]: bannerSlice.reducer,
      [ShopSlice.name]: ShopSlice.reducer,
      [contactSlice.name]: contactSlice.reducer,
      [partnerSlice.name]: partnerSlice.reducer,
   },
})

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<
   ReturnType<typeof store.getState>
> = useSelector
