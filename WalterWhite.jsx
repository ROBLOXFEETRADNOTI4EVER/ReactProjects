import React,{useState} from "react";
import Walter from "./assets/walter.webp";
import Jessie from "./assets/jessie.webp"

function WalterWite(){

    const [imagge,setImagge] = useState(Jessie);

    function Handleimagechange(){
        if(imagge == Walter){
           setImagge(Jessie)
        }
        else if(imagge == Jessie){
            setImagge(Walter)
        }

    }
    return(
        <div>
<img 
  src={imagge} alt=""  onDoubleClick={Handleimagechange} draggable="false"  style={{ userSelect: "none"  ,height: "18rem", width: "18rem"}} />
        </div>
    );
}
export default WalterWite