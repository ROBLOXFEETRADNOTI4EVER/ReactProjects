import React,{useState} from "react"
function KKK(){

    let [count,setCount] = useState(0)
return(
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(c => c + 1)}>INcrement</button>
        <button onClick={() => setCount(c => c - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>


    </div>
);
}
export default KKK