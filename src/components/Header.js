import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//CSS 
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'

function Header() {

    const isLogged = useSelector(state => state.LogReducer);
    function checkIfLog() {
        if (!isLogged.Boolean) {

            return <Nav.Link as={Link} to="/login">Login</Nav.Link>
        } else {
            //Add if login already code 
        }
    }

    return (
        <>
            <Nav className="row" variant="tabs" >
                <Nav.Item className='col-2'>
                    <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                </Nav.Item>

                <Nav.Item className='col-2'>
                    <Nav.Link as={Link} to="/favorite">Favorite</Nav.Link>
                </Nav.Item>

                <Nav.Item className='col-2'>
                    <Nav.Link as={Link} to="/Rated">Rated</Nav.Link>
                </Nav.Item>

                <Nav.Item className='col-6' style={{ textAlign: 'right' }}>
                    {checkIfLog()}
                </Nav.Item>
            </Nav>
        </>


    );
}

export default Header;