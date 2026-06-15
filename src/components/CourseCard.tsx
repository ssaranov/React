interface CourseCardProps{
    title:string;
    teacher:string;
    duration:string;
}

function CourseCard({title,teacher,duration}:CourseCardProps) {
  return (
    <div className="card mb-3">
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">Учитель {teacher}</p>
            <p className="card-text">Продолжительность {duration}</p>
        </div>
    </div>
  )
}
export default CourseCard