import React,{useState} from "react"
function Timer(){
     
    let [time,setTime] = useState(500)
    let [currenttime,setCurrentime] = useState()
    function HandleTimer(element){
        setTime(element.target.value)
    }
 
     return(<>
     <div>
        <h2>{currenttime}</h2>
        <h5>{time} Hour</h5>
        <input type="range" value={time} min={0} max={999} onChange={HandleTimer} />
        <button>Start timer</button>
     </div>
     </>)
     
}
export default Timer