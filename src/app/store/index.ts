import { combineReducers, compose, createStore } from 'redux'

import env, { envState, EnvState } from './reducers/env'

export interface ReduxState {
    env: EnvState
}

const initialState: ReduxState = {
    env: envState,
}

const composeEnhancers =
    process.env.NODE_ENV !== 'production' // @ts-ignore
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose

const enhancers = composeEnhancers()
const reducers = combineReducers<ReduxState>({ env })

export default createStore(reducers, initialState, enhancers)
