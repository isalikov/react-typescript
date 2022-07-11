import React, { useState } from 'react'

import css from './HelloWorld.sass'

type Props = {
    title: string
}

const HelloWorld: React.FC<Props> = ({ title }) => {
    const [value, setValue] = useState(title)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={css.container}>
            <input type="text" onChange={handleChange} value={value} />
            <span>{value}</span>
        </div>
    )
}

export default HelloWorld
