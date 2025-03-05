import profile_pic from './assets/mypfp.jpeg'
function Card(){
    return(
        <div className="card">
            <img src={profile_pic} alt="profilepicture" />
            <h2>Szabo Balazs</h2>
            <p>I'm a student and i program</p>
        </div>
    );
}

export default Card