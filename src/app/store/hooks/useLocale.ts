import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { I18, Locale } from '@typings/i18'

import en from '@app/i18/en'

import { EnvAction, EnvActionType } from '@app/store/reducers/env'
import { ReduxState } from '@app/store'

type UseLocale = {
    setLocale: (locale: Locale) => void
    locale: Locale
    messages: I18
}

const getMessages = (locale: Locale): I18 => {
    switch (locale) {
        case Locale.en:
            return en

        default:
            return en
    }
}

const useLocale = (): UseLocale => {
    const dispatch = useDispatch()

    const locale = useSelector<ReduxState, Locale>((state) => state.env.lang)
    const messages = useMemo(() => getMessages(locale), [locale])
    const setLocale = (payload) => {
        dispatch<EnvAction>({
            type: EnvActionType.set_locale,
            payload,
        })
    }

    return {
        locale,
        messages,
        setLocale,
    }
}

export default useLocale
