import { useState,useEffect } from "react";

function PokemonApi(){

    

    let [pokemon_image,setPokemon_image] = useState("nothing    ")
    let [pokemonName,setPokemonName] = useState("pikachu")
    let [erormsg,setErrormsg] = useState("")
    useEffect(() =>{
   
        try {
            
        
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res =>{
                if(res.status === 404){
                    setErrormsg("Not found or server is down")
                    throw new Error("Not found");
                    
                }
                setErrormsg("")
                return res.json();
          
            }).then(data =>{
                if(data.sprites === undefined){
                    throw new Error("Nothing yet");
                    
                }
                
            setPokemon_image(data.sprites.other.showdown.front_default)                
            })
         } catch (error) {
                // console.error(error)
                console.log("IJij")
                console.log("nothing found yet")
            }
        
   

    },[pokemonName]);
    
    // function GetPokemon(){
    //     setPokemonName(document.querySelector("#Pokemon").value)
    // }

    return(
        <>
        <div className="d-flex justify-content-center">
                    <input type="text" value={pokemonName} id="Pokemon" className="input-group text-center" onChange={() => setPokemonName(document.querySelector("#Pokemon").value)} />
                    </div>
        <div className="d-flex justify-content-center">
            <h1 className="text-danger text-center "> {erormsg}</h1>
            {/* <button onClick={() => setPokemonName(document.querySelector("#Pokemon").value)}>Submit</button> */}
        </div>
        {/* <img src={pokemon_image} alt="Pokemon_image_after_fetching" className="img img-fluid"  style={{height: "15rem", width: "auto"}}/> */}
        <div className="d-flex justify-content-center">
        <img src={pokemon_image} alt="Pokemon_image_after_fetching" className="img img-fluid"  style={{height: "15rem", width: "auto"}}/>
                    </div>
        </>
    );
}
export default PokemonApi