import { useEffect, useState } from 'react'

const useDebounce = <T = unknown>(value, delay = 0): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(timeout)
    }, [value])

    return debouncedValue
}

export default useDebounce
