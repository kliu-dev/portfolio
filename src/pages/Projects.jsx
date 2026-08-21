import ProjectBox from '../components/ProjectBox.jsx'
import { forwardRef } from 'react';

import misinfo from "../assets/proj_images/misinformation.png";
import portfolio from "../assets/proj_images/portfolio.png";
import hashtags from "../assets/proj_images/hashtags.png";
import trade from "../assets/proj_images/trade.png";

const PROJECTS = [
    {
        id: 1,
        title: 'Misinformation and AI',
        image: misinfo,
        descp: <>Social media has grown into a major chanel for news, but now
            more than ever, misinformation is difficult to detect and fast to
            spread. The goal of this project was
            to investigate how misinformation spreads and gains traction by
            studying a controversial case involving a doordasher. I
            handled all YouTube-related work.
            <br />
            <br />
            Built with <b>Python.</b> Used YouTube API to collect infromation
            for 100+ YouTube videos and 24k+ comments. Applied <b>VADER sentiment
                analysis, TF-IDF analysis,</b> and various data visualizations.
        </>,
        github: 'https://github.com/kliu-dev/misinformation-and-ai',
        height: '200px'
    },
    {
        id: 2,
        title: 'Trade Analysis: Compressors',
        image: trade,
        descp: <>Created under internship with Andersen Consulting Global Trade
            in São Paulo, Brazil. Collected, cleaned, and analyzed ComexStat trade data using
            Pandas to evaluate Brazil-China trade flows. Evaluated details
            including top importers, exporters, and price per unit calculated using
            US $FOB and quantity data. Directly compared China with Slovakia.
            Delivered polished report with visualizations and analysis.
            <br />
            <br />
            Built with <b>Python (Pandas)</b> in <b>Jupyter Notebook.</b>
        </>,
        github: 'https://github.com/kliu-dev/trade-air-compressors',
        height: '200px'
    },
    {
        id: 3,
        title: 'Portfolio',
        image: portfolio,
        descp: <>Functioning as a glimpse into my interests
            and the projects I have worked on, this portfolio includes
            functions like day/night mode, interactable buttons and links,
            and a scroll-synced loading bar.
            <br />
            <br />
            Drafted layout, created custom assets on Adobe Illustrator, and
            built the final site using <b>React, JavaScript, HTML/CSS, and
                Vite.</b> Deployed on GitHub Pages.</>,
        github: 'https://github.com/kliu-dev/portfolio',
        height: '250px'
    },
    {
        id: 4,
        title: 'Hashtags for Change',
        image: hashtags,
        descp: <>This project aimed to analyze how global awarenes of social
            and human rights events spread through hashtags and social media
            activity, as well as how digital awareness can drive real-world
            action. This portion of the project compares google trends search
            terms data to the ACLED database, running correlation & time lag
            analysis. After the proejct's completion, I reorganized the code
            into an easily usable format for any google trends files to compare
            with global events data. Built using Python and <b>uv</b> for
            dependencies management.</>,
        github: 'https://github.com/kliu-dev/hashtags-for-change',
        height: '200px'
    },
    // {
    //     id: 5,
    //     title: 'Python Chess GUI',
    //     image: misinfo,
    //     descp: 'temp',
    //     github: 'https://github.com/kliu-dev/py-chess',
    //     height: '200px'
    // }
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
