import { configureStore } from '@reduxjs/toolkit'
import { bannerSlice } from './slice/banner/bannerSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ShopSlice } from './slice/shop/shopSlice'
import { contactSlice } from './slice/contacts/contactsSlice'
import { partnerSlice } from './slice/partners/partnersSlice'
import { coachSlice } from './slice/coach/coachSlice'
import { historySlice } from './slice/history/historySlice'
import { NewsSlice } from './slice/news/newsSlice'
import { gallerySlice } from './slice/gallery/gallerySlice'
import { teamSlice } from './slice/team/teamSlice'
import { achievementsSlice } from './slice/ahievements/ahievementsSlice'
import { MatchesSlice } from './slice/matches/mathesSlice'
import { infrastractureSlice } from './slice/infrastracture/infrastractureSlice'
import { ratingSlice } from './slice/rating/ratingSlice'
import { globalSearch } from './slice/globalSearch/globalSearchSlice'
import { guidelineSlice } from './slice/guideline/guidelineSlice'

export const store = configureStore({
   reducer: {
      [bannerSlice.name]: bannerSlice.reducer,
      [ShopSlice.name]: ShopSlice.reducer,
      [contactSlice.name]: contactSlice.reducer,
      [partnerSlice.name]: partnerSlice.reducer,
      [coachSlice.name]: coachSlice.reducer,
      [historySlice.name]: historySlice.reducer,
      [NewsSlice.name]: NewsSlice.reducer,
      [gallerySlice.name]: gallerySlice.reducer,
      [teamSlice.name]: teamSlice.reducer,
      [achievementsSlice.name]: achievementsSlice.reducer,
      [MatchesSlice.name]: MatchesSlice.reducer,
      [infrastractureSlice.name]: infrastractureSlice.reducer,
      [ratingSlice.name]: ratingSlice.reducer,
      [globalSearch.name]: globalSearch.reducer,
      [guidelineSlice.name]: guidelineSlice.reducer,
   },
})

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<
   ReturnType<typeof store.getState>
> = useSelector
