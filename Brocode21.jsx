import { useRef, useState, useEffect, use } from "react"
function Brocode21(){

    // let [number,setNumber] = useState(0);
    // const ref = useRef(0);
    const inputRef = useRef(null);
    const backgroundref = useRef(null);
    /**
     * Use ref returns a ref object with a single current property initialy set to the inital value you provided   
     */
    function random() {
        const colors = ["bg-dark", "bg-info", "bg-light", "bg-success", "bg-warning", "bg-danger"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    

    function handleclickagain(){
        backgroundref.current.className = random()
 
    }
    function handleclick(){
        inputRef.current.focus();
        inputRef.current.className = "bg-info rounded-pill input    "
    }
    useEffect(()=>{
        console.log("Component renders ")
        console.log(inputRef)

    });
    return(<>
    {/* <button onClick={() => setNumber(c => c +1)}>Click me </button> */}
        {/* <h1>clicked {number} times </h1> */}

    {/* <button onClick={() => {ref.current = ref.current + 1; console.log(ref.current)}}>Click me </button> */}

<button onClick={handleclick}>CLick me</button>

    <input type="text" ref={inputRef}/>

    <br/>
    <button onClick={handleclickagain}>Change background color to a random color</button>

    <p className="fw-bolder" ref={backgroundref}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore blanditiis vitae doloremque laudantium dolore rerum, eius iusto quos accusamus tenetur, facilis reiciendis beatae unde consequatur suscipit voluptas. At, ad.
    Aspernatur, distinctio quibusdam nulla optio ipsam quis aliquid. Obcaecati veritatis aspernatur quam delectus. Nesciunt natus et voluptas hic itaque, esse alias soluta. Aperiam recusandae voluptate soluta consectetur nam obcaecati reiciendis.
    Doloremque a delectus, aliquam adipisci natus velit praesentium. Facere, illum temporibus aut repudiandae soluta maiores nisi ipsum! Alias animi deleniti, nisi laudantium eveniet error laboriosam. Ab tenetur non cum quod!
    Dolor animi deleniti aliquid iusto facilis laudantium magnam vitae voluptatem minima, enim quo repudiandae obcaecati, necessitatibus voluptatum blanditiis nulla. Consectetur incidunt, perferendis tenetur aliquam iure quia hic inventore voluptate voluptates!</p>
    </>)
}
export default Brocode21