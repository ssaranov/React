import { Link, useParams } from "react-router-dom"

function TaskDetailsPage() {
    const{id} = useParams();
  return (
    <div className="card p-4">
        <h2>Детали задачи</h2>
        <p>Id задачи:{id}</p>

        <p>Вся информация о задачке
        </p>
       <Link className="btn btn-secondaty" to="/tasks"></Link>
    </div>
  )
}
export default TaskDetailsPage