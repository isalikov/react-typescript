import React from 'react'

import { useIntl } from 'react-intl'

import { HelloWorld } from '@lib/components'
import { useTitle } from '@lib/hooks'

import css from './Demo.sass'

type Props = {}

const Demo: React.FC<Props> = () => {
    useTitle('Demo')

    const intl = useIntl()

    return (
        <div className={css.container}>
            <HelloWorld title={intl.formatMessage({ id: 'hello_world' })} />
        </div>
    )
}

export default Demo
