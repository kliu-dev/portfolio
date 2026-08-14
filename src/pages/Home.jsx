import { forwardRef } from 'react';

const Home = forwardRef(function Home({ onStart }, ref) {
    return (
        <section id="home" data-section="home" ref={ref} className="container home">
            <div id="planet-1"></div>
            <div id="planet-2"></div>
            <div id="star-1"></div>
            <div id="star-2"></div>
            <div id="star-3"></div>
            <div id="star-4"></div>

            <div id="computer">
                <div id="intro-text">
                    <h1>
                        Hi, I'm <br />
                        <span className="large-word">Kaylee.</span><br />
                        <span className="small-word">Developer|Illustrator|Student</span>
                    </h1>
                </div>
                <button type="button" className="start-button" onClick={onStart}>
                    <div className="start-tri"></div>
                    <div className="start-text">
                        <span className="button-text">START</span>
                    </div>
                </button>
            </div>
        </section>
    )
})

export default Home
