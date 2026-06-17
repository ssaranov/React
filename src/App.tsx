import './App.css'
import Counter from './components/Counter'
import CourseCard from './components/CourseCard'
import Footer from './components/Footer'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import SkillsList from './components/SkillsList'
import StudentCard from './components/StudentCard'
import TaskCard from './components/TaskCard'
import TechnologiesList from './components/TechnologiesList'
import ToDoList from './components/ToDoList'

function App() {
 
  return (
    <div className='container mt-4'>
      <Header></Header>

      <StudentCard
        name="Alex"
        age={18}
        group='11A'
        speciality='Физмат'
        city='Москва'
      />
      <CourseCard
      title='React:Основы'
      teacher='Я'
      duration='3ч'
      />
      <SkillsList/>
      <ProjectCard
      title='Ваш проект'
      description='Описание'
      status='Готово'
      />
      <TechnologiesList></TechnologiesList>
      <TaskCard
      title="Name"
      priority={1}
      completed='Ready'
      />
      <TaskCard
      title="Name"
      priority={1}
      completed='NotReady'
      />
      <Counter></Counter>
      <ToDoList></ToDoList>
      <Footer/>
    </div>
  )
}

export default App
