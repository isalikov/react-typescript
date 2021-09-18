import { Locale } from '@typings/i18'

export interface EnvState {
    lang: Locale
}

export enum EnvActionType {
    set_locale = 'ENV_SET_LOCALE',
}

export type EnvAction = {
    type: EnvActionType.set_locale
    payload: Locale
}

export const envState: EnvState = {
    lang: Locale.en,
}

const envReducer = (
    state: EnvState = envState,
    action: EnvAction
): EnvState => {
    switch (action.type) {
        case EnvActionType.set_locale:
            return {
                ...state,

                lang: action.payload,
            }

        default:
            return state
    }
}

export default envReducer
