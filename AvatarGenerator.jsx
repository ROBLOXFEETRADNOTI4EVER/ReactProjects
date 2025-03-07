import { useState } from "react"

import head1 from "./assets/head1.png"
import head2 from "./assets/head2.png"
import head3 from "./assets/head3.png"

function AvatarGenerator(){
 // to do creat a shuffle so i can switch betwen 2 images for first time use a vase as a test 
// first creat an image that i can swap its stages on
const [img, setImg] = useState([head1, head2, head3]);
let [index,setIndex] = useState(2)
 return(<>
 {img &&
 <button onClick={() => setIndex(i => (i + 1) % img.length)}>⬅️</button>} {img && <img src={img[index]} alt="ung" className="img img-fluid" style={{height:'8rem'}}/>} <button onClick={() => setIndex(i => (i - 1 + img.length) % img.length)}>➡️</button>
 
 </>)
}

export default AvatarGenerator