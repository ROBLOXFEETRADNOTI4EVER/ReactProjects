import React,{ useEffect, useState } from "react"

function Genders(){
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(() =>{
        window.addEventListener("resize",handleResize);
        // console.log("EVent listener added");

        return () =>{
            window.addEventListener("resize",handleResize);
            // console.log("EVent listener removed");


        }
    },[height,width]);
    useEffect(() =>{
        document.title = `size: ${width} x ${height}`
        // console.log("adeded");

        return () =>{
            document.title = `size: ${width} x ${height}`
            // console.log("removed");

        }
       },[width,height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }
    return(<>
    <div>
        <p>WIDTH : {width} HEIGHT: {height}</p>
    </div></>)
}
export default Genders