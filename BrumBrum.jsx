import React,{useState} from "react";

function BrumBrum(){
    let [car,setCar] = useState({year : 2023, make: "Toyota", model: "Corrola"});

    function HandleYearchange(event){
        setCar(c => ({...car , year : event.target.value}));
    }
    function HandleMakechange(event){
        setCar(c => ({...car , make : event.target.value}));

    }
    function HandleModelchange(event){
        setCar(c => ({...car , model : event.target.value}));

    }
    return(
    <div>
        <p>Your favorite car is {car.year} , {car.make} , {car.model}</p>
        <input type="number" value={car.year} onChange={HandleYearchange}/>
            <br/>
            <input type="text" value={car.make} onChange={ HandleMakechange}/>
            <br/>
            <input type="text" value={car.model} onChange={HandleModelchange}/>
            <br/>
    </div>
    );
}

export default BrumBrum