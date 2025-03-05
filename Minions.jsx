import React,{useState} from "react";
import Retard from "./assets/retard_minion.webp"
import nudeRetard from "./assets/retardNude_minion.png"
function Minions(){

    let [r,setR] = useState(Retard)
    function changeretard(element){
        if(r === Retard){
            setR(element.target.src = nudeRetard)

        }
        if(r === nudeRetard){
            setR(element.target.src = Retard)
        }
    }
    return(
        <>
        <div className="container group-row row row-cols">
        <div className="card d-flex" >
                <img src={r} alt="" onDoubleClick={changeretard} className="img img-fluid" style={{height: "18rem", width: "auto", userSelect: "none"}}/>
        </div>
        <div className="card d-flex" >
                <img src={r} alt="" onClickCapture={changeretard} className="img img-fluid" style={{height: "18rem", width: "auto"}}/>
        </div>
        <div className="card d-flex" >
                <img src={r} alt="" onDrag={changeretard} className="img img-fluid" style={{height: "18rem", width: "auto"}}/>
        </div>
        </div>
        </>
    );
}

export default Minions