import { useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import en from '@app/i18/en'
import { AppDispatch, RootState } from '@app/store'
import { setLocaleAction } from '@app/store/env'
import { I18, Locale } from '@app/types/i18'

const getMessages = (locale: Locale): I18 => {
    switch (locale) {
        case Locale.en:
            return en

        default:
            return en
    }
}

const useLocale = () => {
    const dispatch = useDispatch<AppDispatch>()
    const locale = useSelector<RootState, Locale>((state) => state.env.locale)
    const messages = useMemo(() => getMessages(locale), [locale])

    const setLocale = (payload: Locale) => {
        dispatch(setLocaleAction(payload))
    }

    return {
        locale,
        messages,
        setLocale,
    }
}

export default useLocale
