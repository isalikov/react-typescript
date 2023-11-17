import React from 'react'

import { useLocale, useTranslate } from '@app/hooks'
import { Locale } from '@app/types/i18'

import { Page } from '@lib/components'

import css from './Home.css'

const Home = () => {
  const { translate } = useTranslate()
  const { locale, setLocale } = useLocale()

  const title = translate('home.title')

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
          <span>{translate('lang.en')}</span>
        </label>

        <label className={css.label} htmlFor={Locale.es}>
          <input
            type="radio"
            id={Locale.es}
            checked={locale === Locale.es}
            onChange={() => setLocale(Locale.es)}
          />
          <span>{translate('lang.es')}</span>
        </label>
      </div>
    </Page>
  )
}

export default Home
