import { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type FilterType = 'all' | 'completed' | 'active';

function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Изучить React',
      completed: false
    },
    {
      id: 2,
      title: 'TypeScript',
      completed: true
    }
  ]);

  const [newTask, setNewTask] = useState('');
  const [filterTasks, setFilterTasks] = useState<FilterType>('all'); 


  function addTask() {
    if (newTask.trim() === '') {
      return;
    }

    const task: Task = {
      id: Date.now(),
      title: newTask,
      completed: false
    };

    setTasks([...tasks, task]);
    setNewTask('');
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id: number) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

 
  const filteredTasks = tasks.filter(task => {
    if (filterTasks === 'completed') {
      return task.completed;
    }
    if (filterTasks === 'active') {
      return !task.completed;
    }
    return true; 
  });

  const totalTask = tasks.length;
  const completedTask = tasks.filter(task => task.completed).length;
  const activeFilter = tasks.filter(task => !task.completed).length;

  return (
    <div className="card p-3 mb-3">
      <h2>Задачи</h2>
      <div className="card p-3 mb-3">
        <input
          className="form-control"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <button className="btn btn-success mb-3" onClick={addTask}>
        Добавить задачку
      </button>

      
      <div className="mb-3">
        <button
          className={
            filterTasks === 'all'
              ? 'btn btn-secondary me-3'
              : 'btn btn-outline-secondary me-3'
          }
          onClick={() => setFilterTasks('all')}
        >
          Показать все задачи
        </button>
     
        <button
          className={
            filterTasks === 'active'
              ? 'btn btn-secondary me-3'
              : 'btn btn-outline-secondary me-3'
          }
          onClick={() => setFilterTasks('active')}
        >
          Показать все активные задачи
        </button>
     
        <button
          className={
            filterTasks === 'completed' 
              ? 'btn btn-secondary me-3'
              : 'btn btn-outline-secondary me-3'
          }
          onClick={() => setFilterTasks("completed")}
        >
          Показать все выполненные задачи
        </button>
      </div>

      <ul className="list-group">
        {filteredTasks.map(task => ( 
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className={task.completed ? 'text-decoration-line-through text-muted' : ''}>
              {task.title}
            </span>
            <span className="badge text-bg-secondary ms-2">
              {task.completed ? 'Выполнен' : 'Не выполнен'}
            </span>
            <div>
              <button
                className="btn btn-warning me-2"
                onClick={() => toggleCompleted(task.id)}
              >
                Изменить статус
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteTask(task.id)}
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3 text-muted small">
        Всего: {totalTask} | Готово {completedTask} | Не готово {activeFilter}
      </div>
    </div>
  );
}

export default ToDoList;
