export default function ProjectBox({ title, image, descp, github }) {
    console.log(image)
    return (
        <div className="project-box">
            <div className="window-parent">
                <div className="proj-title">{title}</div>
                <div className="proj-github">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        [GitHub]
                    </a>
                </div>
            </div>

            <div
                className="proj-image"
                style={{ backgroundImage: `url("${image}")` }}>
            </div>
            <div className="proj-descp">{descp}</div>
        </div >
    )
}

// style={{ "--project-image": `url(${image})` }}>

