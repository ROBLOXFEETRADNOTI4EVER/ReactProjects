/**
 * useEffect() = React Hook that tells React DO SOME CODE WHEN (Pick one);
 *              this Component re-renders
 *              This component mounts (mount is to add something to the dom)
 *              THe state of a value
 *  useEffect(function, [deoendencies])
 * 1, useEffect(() => {}) // runs after every re-render
 * 2, useEffect(() => {}, [])  // runs only on mounnt
 * 3. useEffect(() => {}, [value]) // runs on mount + when value changes
 * 
 * // Uses
 * 1# Event Listeners
 * 2# Dom manipulation
 * 3# Subrisbtions (real time upadtes)
 * 4# Fetching Data from an ai;
 * 5# clean up when a comonent unmounts
 */

import React,{useState,useEffect} from "react";

function UseEffectHook(){

    const [count,setCount] = useState(0);
    const [color,setColor] = useState("orange")

    useEffect(() =>{
        document.title = `count: ${count}, color ${color}`;
        // return () => {
        //     // SOME CLEAN CODE
        // }
    },[count,color]); // if the dependencies are emtpy [] then it runs after mounth so it won't update 
    // if the [count] continas count the variable then it say current count and it runs on mount and when value changes

    function changeColor(){
        setColor(c => c === "orange" ? "rebeccapurple": "orange");
    }
    return(<>
    <p style={{color: color}} className="fs-5 fw-bolder" >Count: {count}</p>
    <button onClick={() => setCount(c => c + 1 )}> Add</button> used the useState
    <button onClick={() => setCount(c => c - 1)}> Substract</button> {/* used the useEffect */} <br />
    <button onClick={changeColor}>Change Color</button>

    </>);
}

export default UseEffectHook