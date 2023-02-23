import { PropsWithChildren, useEffect } from 'react'

type Props = {
    title: string
    className?: string
}

const Page = ({ title, className, children }: PropsWithChildren<Props>) => {
    useEffect(() => {
        document.title = title
    }, [title])

    return <div className={className}>{children}</div>
}

export default Page
