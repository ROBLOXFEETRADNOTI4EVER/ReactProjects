import { useEffect, useRef, useState } from "react"

function StopWatch(){

    const [isRunning,setIsRunning] = useState(null);
    const [elapsedTime,setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startimeRef = useRef(0);
    useEffect(() =>{
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startimeRef.current)
            }, 10);
        }
        return () => { 
            clearInterval(intervalIdRef.current)
        }
    },[isRunning]);

    function start()
    {
        setIsRunning(true)
        startimeRef.current = Date.now() - elapsedTime
        // console.log(startimeRef.current)
    }
    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false)
    }
    function formatTime(){
    let  hours =  Math.floor((elapsedTime / (1000 * 60 * 60)));
    let minutes = Math.floor((elapsedTime / (1000 * 60) % 60));
    let seconds = Math.floor((elapsedTime / (1000) % 60));
    let milliseconds = Math.floor((elapsedTime % 1000 / 10))
    
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");


    return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }
    return(<>
        <div>
            <div className="text-center fs-1 fw-bolder text-light">{formatTime()}</div>
            <div className="text-center">
                <button onClick={start} className="btn btn-outline-light p-5 m-1 text-success">Start</button>
                <button onClick={stop}  className="btn btn-outline-light p-5 m-1 text-danger">Stop</button>
                <button onClick={reset} className="btn btn-outline-light p-5 m-1 text-warning">Reset</button>

            </div>
        </div>
        </>)
}
export default StopWatch