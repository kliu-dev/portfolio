import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

// Watches a set of section elements and reports which one is currently
// most visible, plus a helper to smooth-scroll to any of them.
//
// Usage:
//   const { activeSection, sectionRefs, scrollToSection } = useActiveSection(['home', 'about', 'projects'])
//   <section ref={sectionRefs.home} data-section="home">
export function useActiveSection(sectionKeys) {
    const [activeSection, setActiveSection] = useState(sectionKeys[0])

    const refs = useRef(Object.fromEntries(sectionKeys.map((key) => [key, { current: null }])))
    const sectionRefs = refs.current

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
                if (visible) {
                    setActiveSection(visible.target.dataset.section)
                }
            },
            { threshold: [0.4, 0.5, 0.6] }
        )

        sectionKeys.forEach((key) => {
            if (sectionRefs[key].current) observer.observe(sectionRefs[key].current)
        })

        return () => observer.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const scrollToSection = useCallback(
        (key) => {
            sectionRefs[key].current?.scrollIntoView({ behavior: 'smooth' })
        },
        [sectionRefs]
    )

    return useMemo(
        () => ({ activeSection, sectionRefs, scrollToSection }),
        [activeSection, sectionRefs, scrollToSection]
    )
}
