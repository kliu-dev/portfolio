import { useState, useEffect } from 'react'

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark') setDarkMode(true)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode((d) => !d)

    return [darkMode, toggleDarkMode]
}
