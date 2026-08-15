import { useState, useEffect, useCallback } from 'react'

export function useLoadingBar(startRef, endRef) {
    const [progress, setProgress] = useState(0)

    const handleScroll = useCallback(() => {
        const startElem = startRef.current
        const endElem = endRef.current
        if (!startElem || !endElem) {
            return
        }

        const startTop = startElem.getBoundingClientRect().top + window.scrollY
        const endTop = endElem.getBoundingClientRect().top + window.scrollY

        const totalDistance = endTop - startTop
        if (totalDistance <= 0) {
            setProgress(1)
            return
        }

        const scrolled = window.scrollY - startTop
        const clamped = Math.min(Math.max(scrolled / totalDistance, 0), 1)

        setProgress(clamped)
    }, [startRef, endRef])

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [handleScroll])

    return progress
}
