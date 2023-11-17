import { createSlice } from '@reduxjs/toolkit'

import { onSetLocaleAction } from './actions'
import initialState from './initialState'

export const envSlice = createSlice({
  initialState,
  name: 'env',
  reducers: {
    setLocaleAction: onSetLocaleAction,
  },
})

export const { setLocaleAction } = envSlice.actions

export default envSlice.reducer
