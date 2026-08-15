const SECTIONS = { home: 1, about: 2, skills: 3, projects: 4 }

export default function Header({ activeSection, darkMode, onToggleDarkMode, onNavigate, progress }) {
    const stage = SECTIONS[activeSection] ?? 1
    const isComplete = stage === 4

    return (
        <div className="header">
            <nav className="header-nav">
                <button
                    type="button"
                    className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                    onClick={() => onNavigate('about')}
                >
                    About
                </button>
                <button
                    type="button"
                    className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                    onClick={() => onNavigate('skills')}
                >
                    Skills
                </button>
                <button
                    type="button"
                    className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                    onClick={() => onNavigate('projects')}
                >
                    Projects
                </button>
            </nav>

            <div className="loading-bar">
                <div className="loading-bar-fill" style={{ width: `${progress * 100}%` }}></div>
                {isComplete ? (
                    <span className="bar-text">COMPLETE!</span>
                ) : (
                    <span className="bar-text">LOADING...</span>
                )}
            </div>

            <button
                type="button"
                className="mode-icon"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                onClick={onToggleDarkMode}
            ></button>

            <div className="sound-icon" aria-hidden="true"></div>
        </div>
    )
}
