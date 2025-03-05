import React, {useState} from "react"

function MyComponent(){
    const [name, setName] = useState("Guest");
    let [age, setAge] = useState(0);
    let [Isemployed, setIsemployed] = useState(false)
    const updateName = () =>{
        setName("Balazs");  
    }
    const updateAge = () =>{
        setAge(age+= 1); 

    }
    const toogleEmployedStatus = () =>{
        // if(Isemployed){
        //     setIsemployed(false)
        // }
        // else{
        //     setIsemployed(true)
        // }
        setIsemployed(!Isemployed) // good code
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>SetName</button>
            <p>age: {age}</p>
            <button onClick={updateAge}>Setage</button>

            <p>Is employed: {Isemployed ? "Yes":"No"}</p>
            <button onClick={toogleEmployedStatus}>Togle status</button>
        </div>
    );
}
export default MyComponent
