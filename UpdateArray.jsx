import React,{useState} from "react";
function UpdateArray(){
    const [food,setFood] = useState(["apple","orange","banana"])

    function AddFood(event){
        event.preventDefault(); 

        const newFood = document.getElementById("foodInput").value.trim()
        document.getElementById("foodInput").value = " ";
        if (newFood === "") return; 
        setFood(f => [...f, newFood])
    }

    function HandleRemovefood(index){
        setFood(food.filter((_,i) => i !== index));  // if you use a _ it means the element is ignored
    }
    
    return(
        <>
        <div>
            <form onSubmit={AddFood}>
            <p>List of food</p>
            <ul>
                {food.map((fod, index) => 
                <li key={index} onClick={() => HandleRemovefood(index)} style={{cursor:'pointer'}}> 
                
                {fod}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={AddFood} type="submit">Add food</button>
            </form>
        </div>
        
        </>
    );
}
export default UpdateArray