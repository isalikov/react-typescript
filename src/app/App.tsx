import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

import { useLocale } from '@app/store/hooks'

import css from './App.sass'
import { Demo } from './routes'

const App: React.FC = () => {
    const { locale, messages } = useLocale()

    return (
        <IntlProvider locale={locale} messages={messages}>
            <div className={css.container}>
                <Routes>
                    <Route path="/" element={<Demo />} />
                </Routes>
            </div>
        </IntlProvider>
    )
}

export default App
