import { Link, NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import TasksPage from "./Pages/TasksPage"
import NotFoundPage from "./Pages/NotFoundPage"
import StatisticsPage from "./Pages/StatisticsPage"
import AboutPage from "./Pages/AboutPage"
import TaskDetailsPage from "./Pages/TaskDetailsPage"
import ContactsPage from "./Pages/ContactsPage"
import HelpPage from "./Pages/HelpPage"
import ProjectsPage from "./Pages/ProjectsPage"
import TimerPage from "./Pages/TimerPage"

function App() {
  return (
    <div className="container mt-4">
      <header className="mb-4">
        <h1>Приложение ToDo на React </h1>

        <nav className="nav nav-pills">
          <NavLink className={({isActive}) =>isActive ? "nav-link active" : "nav-link"} to="/">
          Главная</NavLink>
           <NavLink className={({isActive}) =>isActive ? "nav-link active" : "nav-link"} to="/tasks">
          задачи</NavLink>
           <NavLink className={({isActive}) =>isActive ? "nav-link active" : "nav-link"} to="/statistics">
          статистика</NavLink>
           <NavLink className={({isActive}) =>isActive ? "nav-link active" : "nav-link"} to="/contact">
           Контакты</NavLink>
           <NavLink className={({isActive}) =>isActive ? "nav-link active" : "nav-link"} to="/help">
           /help</NavLink>
           <NavLink className={({isActive}) =>isActive ? "nav-link active" : "nav-link"} to="/project">
           Проекты</NavLink>
           <NavLink className={({isActive}) =>isActive ? "nav-link active" : "nav-link"} to="/timer">
           Таймер</NavLink>
           <NavLink className={({isActive}) =>isActive ? "nav-link active" : "nav-link"} to="/about">
           о нас</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/tasks" element={<TasksPage></TasksPage>}></Route>
        <Route path="/statistics" element={<StatisticsPage></StatisticsPage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
         <Route path="/tasks/:id" element={<TaskDetailsPage></TaskDetailsPage>}></Route>
         <Route path="/contact" element={<ContactsPage></ContactsPage>}></Route>
          <Route path="/help" element={<HelpPage></HelpPage>}></Route>
          <Route path="/project" element={<ProjectsPage></ProjectsPage>}></Route>
          <Route path="/project/:id" element={<TaskDetailsPage></TaskDetailsPage>}></Route>
          <Route path="/timer" element={<TimerPage></TimerPage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>

      </Routes>
    </div>
  )
}
export default App