import React from 'react'

import { useIntl } from 'react-intl'

import { useLocale } from '@app/hooks'
import { Locale } from '@app/types/i18'

import { useTitle } from '@lib/hooks'

import css from './Home.scss'

type Props = {}

const Home: React.FC<Props> = () => {
    useTitle('Home')

    const intl = useIntl()
    const { locale, setLocale } = useLocale()

    return (
        <div className={css.container}>
            <span>{intl.formatMessage({ id: 'home.title' })}</span>

            <div className={css.actions}>
                <label className={css.label} htmlFor={Locale.en}>
                    <input
                        type="radio"
                        id={Locale.en}
                        checked={locale === Locale.en}
                        onChange={() => setLocale(Locale.en)}
                    />
                    <span>English</span>
                </label>

                <label className={css.label} htmlFor={Locale.es}>
                    <input
                        type="radio"
                        id={Locale.es}
                        checked={locale === Locale.es}
                        onChange={() => setLocale(Locale.es)}
                    />
                    <span>Española</span>
                </label>
            </div>
        </div>
    )
}

export default Home
