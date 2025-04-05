import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTeamsRating, getTournaments } from './ratingThunk'

interface TourStats {
   id: number | null
   team: number | null
   team_title: string
   team_logo: string
   played: number
   won: number
   drawn: number
   lost: number
   goals_for: number
   goals_against: number
   goal_difference: number
   points: number
   form_list: string[]
}

interface Team {
   id: number | null
   slug: string
   title: string
   tour_stats: TourStats[]
}

interface Teams {
   id: number
   title: string
   slug: string
}

interface RatingState {
   isLoading: boolean
   teams: Teams[]
   currentTeam: Team | null
   selectedRating: number | null // Новое поле для сохранения выбранного рейтинга
}

const initialState: RatingState = {
   isLoading: false,
   teams: [],
   currentTeam: null,
   selectedRating: null, // Инициализация нового поля
}

export const ratingSlice = createSlice({
   name: 'rating',
   initialState,
   reducers: {
      setSelectedRating(state, action: PayloadAction<number | null>) {
         state.selectedRating = action.payload // Сохранение выбранного рейтинга в состояние
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getTeamsRating.pending, (state) => {
            state.isLoading = true
         })
         .addCase(
            getTeamsRating.fulfilled,
            (state, { payload }: PayloadAction<Team>) => {
               state.currentTeam = payload
               state.isLoading = false
            }
         )
         .addCase(getTeamsRating.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(getTournaments.pending, (state) => {
            state.isLoading = true
         })
         .addCase(
            getTournaments.fulfilled,
            (state, { payload }: PayloadAction<Teams[]>) => {
               state.teams = payload
               state.isLoading = false
            }
         )
         .addCase(getTournaments.rejected, (state) => {
            state.isLoading = false
         })
   },
})

// Экспортируем action для использования в компонентах
export const { setSelectedRating } = ratingSlice.actions

export default ratingSlice.reducer
