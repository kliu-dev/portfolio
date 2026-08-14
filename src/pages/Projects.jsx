import { forwardRef } from 'react'
import ProjectBox from '../components/ProjectBox.jsx'

const SKILLS = ['C++', 'Python', 'JavaScript', 'HTML/CSS', 'Java']
const TOOLS = ['Photoshop', 'Illustrator', 'InDesign', 'Canva']

const PROJECTS = [
    { id: 1, title: 'Project 1', image: 'temp', decsp: 'temp', github: 'temp' },
    { id: 2, title: 'Project 2', image: 'temp', decsp: 'temp', github: 'temp' },
    { id: 3, title: 'Project 3', image: 'temp', decsp: 'temp', github: 'temp' },
    { id: 4, title: 'Project 4', image: 'temp', decsp: 'temp', github: 'temp' },
    { id: 5, title: 'Project 5', image: 'temp', decsp: 'temp', github: 'temp' }
]

const Projects = forwardRef(function Projects(_props, ref) {
    return (
        <section id="projects" data-section="projects" ref={ref} className="proj-container">
            {PROJECTS.map((project) => (
                <ProjectBox key={project.id} title={project.title}
                    image={project.image} decsp={project.descp} github={project.github} />
            ))
            }
        </section>
    )
})

export default Projects
