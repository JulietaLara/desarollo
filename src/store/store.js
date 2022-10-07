import { configureStore } from '@reduxjs/toolkit'
import { auth } from '../Firebase/config'
import { authSlice } from './slices/auth/AuthSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer 
    },
})