import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CONTACTS_THUNK } from './contactsThunk'

interface Contacts {
   id: number
   title: string
   logo: string
   phone: string
   email: string
   address: string
   telegram: string
   instagram: string
   whatsapp: string
   location: string
}

const initialState = {
   isLoading: false,
   contacts: [] as Contacts[],
   error: null as string | null,
}

export const contactSlice = createSlice({
   name: 'contacts',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            CONTACTS_THUNK.getContacts.fulfilled,
            (state, { payload }: PayloadAction<Contacts[]>) => {
               state.contacts = payload
               state.isLoading = false
               state.error = null
            }
         )
         .addCase(CONTACTS_THUNK.getContacts.pending, (state) => {
            state.isLoading = true
         })

         .addCase(CONTACTS_THUNK.getContacts.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            CONTACTS_THUNK.sendMessage.fulfilled,
            (state, { payload }: PayloadAction<Contacts>) => {
               state.contacts.push(payload)
               state.isLoading = false
               state.error = null
            }
         )
         .addCase(CONTACTS_THUNK.sendMessage.pending, (state) => {
            state.isLoading = true
         })
         .addCase(CONTACTS_THUNK.sendMessage.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const { actions, reducer } = contactSlice
