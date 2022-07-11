import React from 'react'

import { useIntl } from 'react-intl'

import { useLocale } from '@app/hooks'
import { Locale } from '@app/types/i18'

import { Page } from '@lib/components'

import css from './Home.scss'

type Props = {}

const Home: React.FC<Props> = () => {
    document.title = 'Home'

    const intl = useIntl()
    const { locale, setLocale } = useLocale()

    const title = intl.formatMessage({ id: 'home.title' })

    return (
        <Page className={css.container} title={title}>
            <span>{title}</span>

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
        </Page>
    )
}

export default Home
