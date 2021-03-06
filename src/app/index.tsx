import './stylus/base.styl'

import React from 'react'
import { render } from 'react-dom'

const App: React.FC<{}> = () => (
    <div>...</div>
)

export default function bootstrap() {
    render(<App />, document.querySelector('#root'))
}
