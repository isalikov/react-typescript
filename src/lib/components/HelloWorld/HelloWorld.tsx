import React from 'react'

import css from './HelloWorld.sass'

type Props = {
    title: string | React.ReactNode
}

const HelloWorld: React.FC<Props> = ({ title }) => {
    return <span className={css.container}>{title}</span>
}

export default HelloWorld
