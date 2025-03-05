import { useState } from "react";
function Clickbtn(){
    const [click, setClick] = useState(0);

 const increseclick = () => {
        setClick(prevClick => prevClick + 1);
    };

    const resetclick = () =>{
        setClick(prevClick => prevClick = 0)
    }
    return(
        <button onClick={increseclick} onDoubleClick={resetclick}>
            Click is {click}
        </button>
    );
}
export default Clickbtn