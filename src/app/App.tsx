import React from 'react'

import { IntlProvider } from 'react-intl'
import { Route, Routes } from 'react-router-dom'

import { useLocale } from '@app/hooks'

import css from './App.scss'
import { Home } from './routes'

const App = () => {
    const { locale, messages } = useLocale()

    return (
        <IntlProvider locale={locale} messages={messages}>
            <div className={css.container}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </IntlProvider>
    )
}

export default App
