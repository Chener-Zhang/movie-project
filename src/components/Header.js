import React from 'react';
import {Link } from 'react-router-dom'


function Header() {
    return (<>
        <h2>This is the header</h2>
        <ul>
            <Link to = "/"><li>HOME</li></Link>
            <Link to = "/favorite"><li>Favorite</li></Link>
            <Link to = "/rated"><li>Rated</li></Link>
            <Link to = "/login"><li>Login</li></Link>
        </ul>
    
    </>


    );
}

export default Header;