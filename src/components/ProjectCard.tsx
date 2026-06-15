interface ProjectCardProps{
    title:string;
    description:string;
    status:string
}
function ProjectCard({title,description,status}:ProjectCardProps)  {
  return (
    <div className="card mb-3">
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">Описание: {description}</p>
            <p className="card-text">Статус: {status}</p>
        </div>
    </div>
  )
}
export
 default ProjectCard    