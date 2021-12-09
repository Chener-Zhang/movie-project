import React from 'react';
import { Link } from 'react-router-dom'

//CSS 
import '../styles/HomePage.css'

function Header() {
    return (<>
        <div className="container">
            <ul className="Header" >
                <Link to="/"><li>HOME</li></Link>
                <Link to="/favorite"><li>Favorite</li></Link>
                <Link to="/rated"><li>Rated</li></Link>
            </ul>

            <Link className = "login" to="/login">Login</Link>
        </div>
    </>


    );
}

export default Header;