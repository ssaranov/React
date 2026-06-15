function SkillsList() {
    const skils:string[] = [
        'html',
        'Css',
        'TypeScript',
        'React'
    ]
  return (
   <div className="card mb-3">
    <div className="card-header">Умения</div>
        <ul className="list-group list-group-flush">
            {skils.map((skils) => (
                <li className="list-group-item" key={skils}>
                    {skils}
                </li>
            ))}
        </ul>
        </div>
  )
}
export default SkillsList