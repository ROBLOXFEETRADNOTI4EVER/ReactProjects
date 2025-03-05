import React,{useState} from "react";

function QrCodeGenerator(){
    
    let [range,setRange] = useState(700)
    let [text,setText] = useState("BalazsSzabo")
    function Handlechangerange(event){
        setRange(Number(event.target.value));
    }
    
    function Handletextchange(event){
        setText(String(event.target.value));
    }
    return(
        <>
        <h1 className="fw-bolder">{range}</h1>
        <label >Enter the size you want it to have</label>
        <input type="range" name="" id="" min={300} max={1010} value={range} onChange={Handlechangerange}/>
        <hr />
        <label >Enter Text or url you want it to contian</label>
        <input type="text" onChange={Handletextchange}/>
        <br/>
        <div className="img img-fluid d-flex justify-content-center">
        <img src={`https://api.apgy.in/qr/?data=${text}&size=${range}`} alt=""   />
        <button className="btn-primary btn-outline warning text-center" onClick={() => {    Handlechangerange({ target: { value: range } });    Handletextchange({ target: { value: text } });}}>Submit</button>

        </div>

        </>
    );
}
export default QrCodeGenerator