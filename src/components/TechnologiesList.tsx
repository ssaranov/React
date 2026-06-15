function TechnologiesList() {
    const Techs:string[] =[
        'TypeScript',
        'React',
        'Bootstrap'
    ]
  return (
    <div className="card mb-3">
        <div className="card-header">Технологии</div>
        <ul className="list-group list-group-flush">
             {Techs.map((Techs) => (
                <li className="list-group-item" key={Techs}>
                    {Techs}
                </li>
                ))}
                </ul>
     
    </div>
  )
}
export default TechnologiesList