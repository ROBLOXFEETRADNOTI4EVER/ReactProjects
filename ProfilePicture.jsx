function ProfilePicture(){
    const imageurl = './src/assets/mypfp.jpeg'


    const handleclick = (e) =>{
        e.target.style.display = "none"
    }
    return(
        <>
        
        <img src={imageurl} alt="profilepicutre" onDoubleClick={(e) =>handleclick(e)} />
        </>
    );
}
export default ProfilePicture