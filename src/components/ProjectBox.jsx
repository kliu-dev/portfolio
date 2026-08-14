export default function ProjectBox({ title, image, descp, github }) {
    return (
        <div className="project-box">
            <div className="window-parent">
                <div className="proj-title">{title}</div>
                <div className="proj-github">
                    <a href={image}>
                        GitHub
                    </a>
                </div>
            </div>

            <div className="proj-image">{image}</div>
            <div className="proj-descp">{descp}</div>
        </div>
    )
}
