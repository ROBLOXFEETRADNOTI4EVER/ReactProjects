import React, {useState} from "react"

function Counter(){
    
    let [count,SetCounter] = useState(0);


    const increse = () =>{
        SetCounter(count+ 1)
    }
    const decrese = () =>{
        SetCounter(count- 1)
    }
    const reset = () =>{
        SetCounter(count =  0)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increse}>Increse</button>
            <button onClick={decrese}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default Counter