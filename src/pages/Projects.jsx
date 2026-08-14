import { forwardRef } from 'react'
import ProjectBox from '../components/ProjectBox.jsx'

import computerImg from "../assets/computer-img-light.png";

const SKILLS = ['C++', 'Python', 'JavaScript', 'HTML/CSS', 'Java']
const TOOLS = ['Photoshop', 'Illustrator', 'InDesign', 'Canva']

const PROJECTS = [
    {
        id: 1, title: 'Misinformation and AI',
        image: computerImg,
        descp: 'hey temp descp heyheyheyhey',
        github: 'https://github.com/kliu-dev/misinformation-and-ai'
    },
    {
        id: 2,
        title: 'Hashtags for Change',
        image: computerImg,
        descp: 'temp',
        github: 'https://github.com/kliu-dev/hashtags-for-change'
    },
    {
        id: 3,
        title: 'Trade Analysis: Compressors',
        image: computerImg,
        descp: 'temp',
        github: 'https://github.com/kliu-dev/trade-air-compressors'
    },
    {
        id: 4,
        title:
            'Project 4',
        image: computerImg,
        descp: 'temp',
        github: 'temp'
    },
    {
        id: 5,
        title:
            'Project 5',
        image: computerImg,
        descp: 'temp',
        github: 'temp'
    }
]

const Projects = forwardRef(function Projects(_props, ref) {
    return (
        <section id="projects" data-section="projects" ref={ref} className="proj-container">
            {PROJECTS.map((project) => (
                <ProjectBox key={project.id} title={project.title}
                    image={project.image} descp={project.descp} github={project.github} />
            ))
            }
        </section>
    )
})

export default Projects
