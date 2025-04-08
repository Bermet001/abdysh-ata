import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAcademiaBanner, getAllData } from './TournamentAcademyThunk'

interface BannerData {
   banner: string
   id: number | null
   title: string
   title_below: string
   subtitle: string
   content: string
   title_turner: string
   banner_title: string
}

interface Images {
   id: number | null
   image: string
}

export interface AllTeamsData {
   id: number
   content: string
   academia_images: Images[]
}

interface AcademyState {
   first: BannerData[]
   allTeams?: AllTeamsData[]
   isLoading: boolean
}

const initialState: AcademyState = {
   first: [],
   allTeams: [],
   isLoading: false,
}

export const academySlice = createSlice({
   name: 'academy',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            getAcademiaBanner.fulfilled,
            (state, { payload }: PayloadAction<BannerData[]>) => {
               state.first = payload
               state.isLoading = false
            }
         )
         .addCase(getAcademiaBanner.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAcademiaBanner.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            getAllData.fulfilled,
            (state, { payload }: PayloadAction<AllTeamsData[]>) => {
               state.allTeams = payload
               state.isLoading = false
            }
         )
         .addCase(getAllData.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAllData.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export default academySlice.reducer
