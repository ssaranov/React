import { useSearchParams } from "react-router-dom"
import ToDoList from "../components/ToDoList";


function TasksPage() {
    const[searchParams,setSearchParams] = useSearchParams();
    const filterTasks = searchParams.get('filter') ?? 'all';
  return (
    <div>
        <h2 className="mb-3">страница с задачками</h2>
        <div className="mb-3">
        <button
          className={
            filterTasks === 'all'
              ? 'btn btn-secondary me-3'
              : 'btn btn-outline-secondary me-3'
          }
          onClick={() => setSearchParams({filterTasks:'all'})}
        >
          Показать все задачи
        </button>
     
        <button
          className={
            filterTasks === 'active'
              ? 'btn btn-secondary me-3'
              : 'btn btn-outline-secondary me-3'
          }
          onClick={() => setSearchParams({filterTasks:'completed'})}
        >
          Показать все активные задачи
        </button>
     
        <button
          className={
            filterTasks === 'completed' 
              ? 'btn btn-secondary me-3'
              : 'btn btn-outline-secondary me-3'
          }
          onClick={() => setSearchParams({filterTasks:'active'})}
        >
          Показать все выполненные задачи
        </button>
      </div>
      <ToDoList></ToDoList>
    </div>
  )
}
export default TasksPage