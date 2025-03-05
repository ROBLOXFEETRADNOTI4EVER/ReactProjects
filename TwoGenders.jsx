import React,{useState} from "react";
import Gigles from "./assets/Gigles.png";
import Approved from "./assets/Aproved.png";

function TwoGenders(){
    const [i,setI] = useState()

    return(
        <div>
            <h1 className="text-center">How many genders are there?</h1>
            <div className="d-flex justify-content-center ">
                <button onClick={() =>setI(Approved)} className="m-1 fs-2">2 </button> 
                <button onClick={() => setI(Gigles)} className="m-1 fs-2">2+</button>
            </div>
            <div className="d-flex justify-content-center ">
            <img src={i} alt="" className="text-center d-flex justify-content-center " style={{textAlign: "center"}} />
            </div>  
        </div>
    );
}

export default TwoGenders