import React,{useState} from "react";

function ArrayOfObjects(){
    const [cars,setCars] = useState([])
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");

    function HandleaddCar(){
        
        const newCar = {year: carYear, model: carModel, make: carMake}
        setCars(c => [...c,newCar])

        setCarYear(new Date().getFullYear())

        setCarMake("");
        setCarModel("");
    }
    function handleremovecar(index){
        setCars(c=> c.filter((_,i) => i !== index));  // if you use a _ it means the element is ignored


    }
    function handleYearChange(event){
        setCarYear(parseInt(event.target.value, 10) || new Date().getFullYear());
    }

    function Handlemakechange(event){
        setCarMake(event.target.value)

    }
    function HandleModelChange(event){
        setCarModel(event.target.value)

    }

    return(
        <div>
            <h1>List Of car objects</h1>
        <ul>
        {cars.map((car, index) => (
    <li key={index} onClick={() => handleremovecar(index)}>
        {car.year}, {car.make}, {car.model}
    </li>
))}        </ul>
        
        <input type="number" value={carYear} onChange={handleYearChange} />
        <br/>
        <input type="text" value={carMake} onChange={Handlemakechange} placeholder=">Enter Car Make<" />
        <br/>
        <input type="text" value={carModel} onChange={HandleModelChange} placeholder="Enter car Model"/>        <br/>
        <button onClick={HandleaddCar}>Addcar</button>
        </div>
    );
}
export default ArrayOfObjects