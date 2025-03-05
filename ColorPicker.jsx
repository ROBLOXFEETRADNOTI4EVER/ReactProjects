import React, {useState} from "react";

function ColorPicker(){
    const [color,setColor] = useState("blue")

    function handleColor(event){
        setColor(event.target.value)
    }
    return(
        <div>
            <p>Pick a color</p>
            <input type="color"  onChange={handleColor} />
            <p>color: {color}</p>
        </div>
    );
}
export default ColorPicker