import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { store } from './store'

const bootstrap = () => {
    const selector = document.querySelector('#root')
    if (selector) {
        const root = createRoot(selector)

        root.render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        )
    } else {
        throw new Error(`Can't get document selector.`)
    }
}

export default bootstrap
