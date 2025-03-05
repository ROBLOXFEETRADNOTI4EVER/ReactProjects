import PropTypes from 'prop-types';
import mypfp from './assets/mypfp.jpeg'
function UserGreeting({
    isLoggedin = false,
    username = "guest"
}){
    // if(props.isLoggedin){
    //     return(
    //         <h2>Welcome {props.username}</h2>
    //     );
    // }
    // else{
    //     return(
    //         <h2>Please log in to continue</h2>
    //     );
    // }
    return(isLoggedin ?   <>
    <h2>Welcome {username}</h2>
    <img src={mypfp} alt="profilepic" />
     </>:

    <h2>Please log in to continue</h2>);  
}
UserGreeting.prototype = {
    isLoggedin: PropTypes.bool,
    username: PropTypes.string
}


export default UserGreeting