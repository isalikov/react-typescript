import { configureStore } from '@reduxjs/toolkit'

import env from './env'

export const store = configureStore({
    reducer: {
        env,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
