interface StudentCardProps{
    name:string;
    age:number;
    group:string;
    speciality:string;
    city:string

}

function StudentCard(props:StudentCardProps) {
  return (
      <div className="card mb-3">
        <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">Возраст {props.age}</p>
            <p className="card-text">Группа {props.group}</p>
            <p className="card-text">специ {props.speciality}</p>
             <p className="card-text">Город {props.city}</p>
            
        </div>
    </div>
  )
}
export default StudentCard