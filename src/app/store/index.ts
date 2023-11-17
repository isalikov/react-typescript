import { configureStore } from '@reduxjs/toolkit'

import env from './env'

export const store = configureStore({
  reducer: {
    env,
  },
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
