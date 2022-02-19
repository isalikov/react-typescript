import React from 'react'
import { FormattedMessage as Message } from 'react-intl'

import { HelloWorld } from '@lib/components'
import { useTitle } from '@lib/hooks'

import css from './Demo.sass'

type Props = {}

const Demo: React.FC<Props> = () => {
    useTitle('Demo')

    return (
        <div className={css.container}>
            <HelloWorld title={<Message id="hello_world" />} />
        </div>
    )
}

export default Demo
