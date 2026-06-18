import { Link, useParams } from "react-router-dom"

function ProjectDetails() {
    const{id_project} = useParams();
  return (
    <div className="card p-4">
        <h2>Детали проекта</h2>
        <p>Id преокта:{id_project}</p>

        <p>Вся информация о проекте
        </p>
       <Link className="btn btn-secondaty" to="/project"></Link>
    </div>
  )
}
export default ProjectDetails