import ProjectBox from '../components/ProjectBox.jsx'
import { forwardRef } from 'react';

import misinfo from "../assets/proj_images/misinformation.png";
import hashtags from "../assets/proj_images/hashtags.png";

const PROJECTS = [
    {
        id: 1,
        title: 'Misinformation and AI',
        image: misinfo,
        descp: 'hey temp descp heyheyheyhey',
        github: 'https://github.com/kliu-dev/misinformation-and-ai',
        height: '200px'
    },
    {
        id: 2,
        title: 'Hashtags for Change',
        image: hashtags,
        descp: 'temp',
        github: 'https://github.com/kliu-dev/hashtags-for-change',
        height: '200px'
    },
    {
        id: 3,
        title: 'Trade Analysis: Compressors',
        image: misinfo,
        descp: 'temp',
        github: 'https://github.com/kliu-dev/trade-air-compressors',
        height: '200px'
    },
    {
        id: 4,
        title: 'Portfolio',
        image: misinfo,
        descp: 'temp',
        github: 'https://github.com/kliu-dev/portfolio',
        height: '200px'
    },
    {
        id: 5,
        title: 'Python Chess GUI',
        image: misinfo,
        descp: 'temp',
        github: 'https://github.com/kliu-dev/py-chess',
        height: '200px'
    }
]

const Projects = forwardRef(function Projects(_props, ref) {
    return (
        <section id="projects" data-section="projects" ref={ref} className="proj-container">
            {PROJECTS.map((project) => (
                <ProjectBox key={project.id} title={project.title}
                    image={project.image} descp={project.descp}
                    height={project.height} github={project.github} />
            ))
            }
        </section>
    )
})

export default Projects
