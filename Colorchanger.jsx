import React,{useState} from "react";
function ColorChanger(){
    const [red,setRed] = useState(115)
        function Handleredchange(event){
            setRed(event.target.value)
        }
        const [green,setGreen] = useState(115)
        function Handlegreenchange(event){
            setGreen(event.target.value)
        }
        const [blue,setBlue] = useState(115)
        function HandleBluechange(event){
            setBlue(event.target.value)
        }
        function randomize(){
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
              }
              setRed(getRandomInt(255));
              setGreen(getRandomInt(255));
              setBlue(getRandomInt(255));

        }
        function copysomething(){
    const copyText = `rgb(${red}, ${green}, ${blue})`;
    console.log(copyText); 
    navigator.clipboard.writeText(copyText);
        }    
    return(<>
    
    <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, padding: "20px" }}>
        <div className="d-flex justify-content-center">
    <button onClick={copysomething} >Copy current color {red},{blue},{green}</button>
    </div>

                <div className="group row text-center">
        <p className="text-center"></p>
        <h1 style={{userSelect: "none"}}>Color Red {red} </h1>
        <input type="range" onChange={Handleredchange} value={red} min={0} max={255} />
        <h1 style={{userSelect: "none"}}>Color Green {green}</h1>
        <input type="range" onChange={Handlegreenchange} value={green} min={0} max={255}/>
        <h1 style={{userSelect: "none"}}>Color Blue {blue}</h1>
        <input type="range" onChange={HandleBluechange} value={blue} min={0} max={255}/>
        <button className="btn-success" onClick={randomize}>Randomize</button>
        </div>
    </div>
    </>);
}
export default ColorChanger