import { useState,createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();
export const AmountContext = createContext()

function ComponentA(){
    const [user,setUser] = useState("Balazs")
    let [numb,setNumb] = useState(0);

    return(
        
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <button onClick={() => setNumb(c => c + 1)}>+</button>
            <button onClick={() => setNumb(c => c - 1)}>-</button>
            <button onClick={() => setNumb(c => c = 0)}>Zero</button>

            <UserContext.Provider   value={user}>
                <AmountContext.Provider value={numb}>
                <ComponentB/>

                </AmountContext.Provider>
            </UserContext.Provider>
     

        </div>
                    
    );
}

export default ComponentA