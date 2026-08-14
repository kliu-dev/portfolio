import { forwardRef } from 'react'

const Skills = forwardRef(function Skills(_props, ref) {
    return (
        <section id="skills" data-section="skills" ref={ref} className="skills-container">
            <div className="window-parent">
                <div className="top">Skills.exe</div>
                <div className="top">_ ■ x</div>
            </div>
            <div className="window-text">
                <b>Development:</b> Python, Git/GitHub, Javascript, HTML, CSS,
                Node.js, React, C++
                <br />
                <br />
                <b>Design:</b> Adobe Photoshop, Illustrator, InDesign
            </div>
        </section>
    )
})

export default Skills
