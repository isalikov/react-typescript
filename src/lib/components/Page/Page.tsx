import { ReactNode, useEffect } from 'react'

type Props = {
    title: string
    children?: ReactNode
    className?: string
}

const Page = ({ title, className, children }: Props) => {
    useEffect(() => {
        document.title = title
    }, [title])

    return <div className={className}>{children}</div>
}

export default Page
