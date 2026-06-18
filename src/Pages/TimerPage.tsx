import { useEffect, useState } from "react"

function TimerPage() {
    const[time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timerId = setInterval(() =>{
            setTime(
                new Date().toLocaleTimeString()
            );
        },1000);

        return() => {
            clearInterval(timerId);
        };
    },[]);
  return (
    <div className="card p-4">
        <h2>Таймер</h2>

        <p className="fs-3">
            Время:
        </p>

        <h1 className="display-4 text-primary">
            {time}
        </h1>
    </div>
  )
}
export default TimerPage