function ProjectsPage() {
    const projectList = [
  {
    id: 1,
    name: 'Разработка сайта',
    description: 'Создание сайта',
    status: 'в процессе'
  },
  {
    id: 2,
    name: 'Мобильное приложение',
    description: 'Разработка приложения',
    status: 'В палнаъ'
  },
  {
    id: 3,
    name: 'Интерфейс',
    description: 'интерфейс',
    status: 'Готово'
  }
];
  return (
    <div className="card p-4">
      <h2>Проекты</h2>
      <ul>
        {projectList.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span>Статус {project.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ProjectsPage