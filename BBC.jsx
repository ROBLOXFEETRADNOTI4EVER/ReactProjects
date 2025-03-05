import React,{use, useState} from "react";
function BBC(){
    const [name,setName] = useState("Balazs");
    const [quantity,setQuantity] = useState(0);
    const [comment,setComment] = useState();
    const [payment,setPayment] = useState("");
    const [shipping,setSomething] = useState("dilvery");

    function HandleNameChange(event){
        setName(event.target.value)
    }
    function HandleQuanittychange(event){
        setQuantity(event.target.value)
    }
    function HandleCommentonchange(event){
        setComment(event.target.value)
    }
    function HandlePaymentchange(event){
        setPayment(event.target.value)
    }
    function Handlesomething(event){
        setSomething(event.target.value);
    }
    return(
        <div>
            <input type="text" name="" id="" value={name} onChange={HandleNameChange} />
            <p>Name: {name}</p>
            <input type="number" name="" id="" value={quantity} onChange={HandleQuanittychange} />
            <p>Quantity: {quantity}</p>

            <textarea name="" id="" value={comment} onChange={HandleCommentonchange} placeholder="Enter diveleveryinsturctions"></textarea>
            <p>comment {comment}</p>

                <select value={payment} onChange={HandlePaymentchange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Giftcard">Giftcard</option>




                </select>
                <p>Payment: {payment}</p>
            <label >Pickup
            <input type="radio" value="Pickup"  checked={shipping === "Pickup"} onChange={Handlesomething}/>

            </label>
            <label >Dilevery
            <input type="radio" value="dilvery"  checked={shipping === "dilvery"}  onChange={Handlesomething} />

            </label>
            <p>Pakcage shipping option {shipping}</p>

        </div>
    );
}
export default BBC