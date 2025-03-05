import React,{useState,useEffect} from "react"
function CountBack(){
    const [time,setTime] = useState(new Date());
    useEffect(() =>{
        const intervalId = setInterval(() => {
            setTime(new Date());

        },1000);
        return() =>{
            clearInterval(intervalId);
        }
    },[time]);
    function FormatTime(){
        let hour = time.getHours();
        const minutes = time.getMinutes();
        const secounds = time.getSeconds();
        // const meridiem = hour >= 12? "PM" : "AM";
        // hour = hour % 12 ||  12;
        return `${padZero(hour)}:${padZero(minutes)}:${padZero(secounds)}`
    }
    function padZero(number){
        return (number < 10? "0" : "") + number
    }
    return( 
        <div className="group my-5">
            <div>
                <h1 className="text-center fs-1 fw-bolder">{FormatTime()}</h1>
            </div>
        </div>
    );
}
export default CountBack
