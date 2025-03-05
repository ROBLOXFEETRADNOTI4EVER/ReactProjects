import ComponentD from "./ComponentD";
import { useContext } from "react";
import { UserContext, AmountContext } from "./ComponentA";
function ComponentC(){

    const user = useContext(UserContext);
    const numb = useContext(AmountContext);
    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>Hello {user} numb is {numb}</h2>
            <ComponentD/>
        </div>
    );
}

export default ComponentC