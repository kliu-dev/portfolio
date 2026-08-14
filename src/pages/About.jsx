import { forwardRef } from 'react';

const About = forwardRef(function About({ onViewProjects }, ref) {
    return (
        <section id="about" data-section="about" ref={ref} className="container about">
            <div id="about-box">
                <div className="window-parent">
                    <div className="top">About</div>
                    <div className="top">_ ■ x</div>
                </div>

                <div className="window-text">
                    yap yap yap
                </div>

                {/* <button type="button" id="start-button" onClick={onViewProjects}>
                    <div className="start-tri"></div>
                    <div className="start-text">
                        <span className="button-text">PROJECTS</span>
                    </div>
                </button> */}

                <button type="button" className="proj-button" onClick={onViewProjects}>
                    <div className="proj-tri"></div>
                    <div className="start-text">
                        <span className="button-text">PROJECTS</span>
                    </div>
                </button>
            </div>

            <div id="contact-box">
                <div className="window-parent">
                    <div className="top">Contact</div>
                    <div className="top">_ ■ x</div>
                </div>
                <div id="contact-text">
                    <div className="window-text">
                        The best way to contact me is through email! Feel free to reach out.
                        <br /><br />
                        My resume is available upon request.
                        <br />
                        <br />
                        <div id="email"><u>Email</u>: kayleeliu [at] <br></br>uchicago (dot) edu</div>
                    </div>
                </div>
                <div id="links-container">
                    <a
                        href="https://github.com/kliu-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="socials-box"
                        id="github"
                    ></a>
                    <a
                        href="https://www.linkedin.com/in/kaylee-l-00a333317"
                        target="_blank"
                        rel="noreferrer"
                        className="socials-box"
                        id="linkedin"
                    ></a>
                </div>
            </div>
        </section>
    )
})

export default About
