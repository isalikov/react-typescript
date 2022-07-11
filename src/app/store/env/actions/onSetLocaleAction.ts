import { PayloadAction } from '@reduxjs/toolkit'

import { EnvState } from '@app/store/env/types'
import { Locale } from '@app/types/i18'

const onSetLocaleAction = (state: EnvState, action: PayloadAction<Locale>) => {
    return {
        ...state,
        locale: action.payload,
    }
}

export default onSetLocaleAction
