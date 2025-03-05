function Clicky(){
    // let count = 0;

    // const handleclick = (name) =>{
    //     if(count < 3 ){
    //         count++
    //         console.log(`${name} you clicked me ${count} times`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`)
    //     }
    // }

    const handleEvent = (e) =>{ e.target.textContent = "OUCH"

    }

    return(
        <button onDoubleClick={(e) => handleEvent(e)}>
            Click me 🥕
        </button>
    );
}
export default Clicky