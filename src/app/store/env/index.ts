import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Locale } from '@app/types/i18'

import initialState from './initialState'

export const envSlice = createSlice({
    initialState,
    name: 'env',
    reducers: {
        setLocaleAction: (state, action: PayloadAction<Locale>) => {
            return {
                ...state,
                locale: action.payload,
            }
        },
    },
})

export const { setLocaleAction } = envSlice.actions

export default envSlice.reducer
