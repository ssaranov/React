import { useEffect, useState } from "react";

interface Statistics{
    totalTasks:number;
    competedTasks:number;
    activeTasks:number;
}
function StatisticsPage() {
    const[Statistics, setStatisrics] = useState<Statistics | null>(null)

    useEffect(() => {
        const data: Statistics ={
            totalTasks:2,
            competedTasks:1,
            activeTasks:1
        };
        setStatisrics(data)
    },[]);

   if(Statistics === null){
  return (
    <div className="alert alert-info">Загрузка статистики</div>
  )
}
return(
    <div className="card p-4">
        <h2>Страница статистики</h2>
        <p>Всего задач{Statistics.totalTasks}</p>
        <p>Выполненые задачи{Statistics.competedTasks}</p>
        <p>Активные задачи {Statistics.activeTasks}</p>
    </div>
)
}
export default StatisticsPage