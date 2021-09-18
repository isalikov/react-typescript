import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

import { useLocale } from '@app/store/hooks'

import css from './App.scss'
import { Demo } from './routes'

const App: React.FC = () => {
    const { locale, messages } = useLocale()

    return (
        <IntlProvider locale={locale} messages={messages}>
            <div className={css.container}>
                <Switch>
                    <Route exact path="/">
                        <Demo />
                    </Route>

                    <Redirect to="/" />
                </Switch>
            </div>
        </IntlProvider>
    )
}

export default App
