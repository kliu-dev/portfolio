import React from 'react'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import { useDarkMode } from './hooks/useDarkMode.js'
import { useActiveSection } from './hooks/useActiveSection.js'

const SECTIONS = ['home', 'about', 'skills', 'projects']

export default function App() {
    const [darkMode, toggleDarkMode] = useDarkMode()
    const { activeSection, sectionRefs, scrollToSection } = useActiveSection(SECTIONS)

    return (
        <>
            <Header activeSection={activeSection} darkMode={darkMode}
                onToggleDarkMode={toggleDarkMode} onNavigate={scrollToSection} />

            <main>
                <Home ref={sectionRefs.home} onStart={() => scrollToSection('about')} />
                <About ref={sectionRefs.about} onViewProjects={() => scrollToSection('projects')} />
                <Skills ref={sectionRefs.skills} />
                <Projects ref={sectionRefs.projects} />
            </main>
        </>
    )
}
