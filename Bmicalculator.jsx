import { useState } from "react"

function Bmicalculator(){

    let [weight,setWeight] = useState();
    let [height,setHeigth] = useState();
    let [bmi,setBmi] = useState();
    let [weightlcass,setWeightclass] = useState();
  function  handleWeghtChange(event){
    setWeight(event.target.value)
  }

  function  HandleHeightChange(event){
    setHeigth(event.target.value)
  }
    function handlebmicalculation(){
       setBmi( (weight / ((height * height) / 10000))   .toFixed(2))
       const realbmi = (weight / ((height * height) / 10000))   .toFixed(2)
       const bmiValue = parseFloat(realbmi);
       setWeight("");
       setHeigth("");

       if (bmiValue < 18.5) {
        setWeightclass("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setWeightclass("Normal weight");
    } else {
        setWeightclass("Overweight");
    }

    }
    return(<>
        <h1 className="text-center my-5 text-white">BMI calculator</h1>
        <div className="text-center">
        <input onChange={handleWeghtChange} value={weight} type="text" className="rounded-pill form-control my-2" placeholder="Enter your current weight in kgs" />
        <input value={height} onChange={HandleHeightChange} type="text" className="rounded-pill form-control" placeholder="Enter your current height in cm" />
        <h1 className="text-light">{bmi} {weightlcass}</h1>
      <br/>
        <button onClick={handlebmicalculation} className="btn btn-outline-light">Submit</button>
        </div>  


    </>)
}

export default Bmicalculator