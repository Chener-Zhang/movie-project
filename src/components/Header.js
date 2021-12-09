import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//CSS 
import '../styles/HomePage.css'
function Header() {

    const isLogged = useSelector(state => state.LogReducer);
    console.log(isLogged);
    function checkIfLog() {
        if (!isLogged.Boolean) {
            return <Link className="login" to="/login">Login</Link>
        } else {
            //Add if login already code 
        }
    }

    return (<>
        <div className="container">
            <ul className="Header" >
                <Link to="/"><li>HOME</li></Link>
                <Link to="/favorite"><li>Favorite</li></Link>
                <Link to="/rated"><li>Rated</li></Link>
            </ul>
            {checkIfLog()}

        </div>
    </>


    );
}

export default Header;