function User_greeting(props) {    
    if (props.isLoggedIn) {
        return(
            <h2>Welcome {props.username}</h2>
        ); 
    } else {
        return <h2>Please log in.</h2>;
    }
}

export default User_greeting;
