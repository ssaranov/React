import { useState } from "react"

function Counter(){
    const[count, setCount] = useState(0);

return(
    <div className="card p-3 mb-3">
        <h2>Кликер</h2>
        <p>Значение:{count}</p>
        <button className="btn btn-primary" onClick={() => setCount(count+1)}>Увеличить на 1</button>

    </div>
)
}
export default Counter;