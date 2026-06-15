interface TaskCardProps {
  title: string;
  priority: number;
  completed: string;
}

function TaskCard({ title, priority, completed }: TaskCardProps) {
  return (
    <div className="card mb-3">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">Приоритет {priority}</p>
      {completed === 'Ready'
        ? <span className="badge bg-success">{completed}</span>
        : <span className="badge bg-danger">{completed}</span>}
    </div>
  );
}

export default TaskCard;
