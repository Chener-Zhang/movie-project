import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGIN } from '../actions/userLoginAction'
import { useState } from 'react';
import { Redirect } from 'react-router-dom'

//CSS
import '../styles/LoginPage.css'


export default function Login() {

    const [userName, setUserName] = useState('');
    const isLogged = useSelector(state => state.LogReducer);
    const dispatch = useDispatch()


    
    const userLogged = () => {
        if (!isLogged.Boolean) {
            return (
                <div className="loginStyle">
                    <h2>LOGIN</h2>
                    <h3> Username:
                        <input onChange={(e) => setUserName(e.target.value)} />
                    </h3>
                    <h3> Password:
                        <input />
                    </h3>
                    <button onClick={() =>
                        dispatch(USER_LOGIN(userName))
                    }>LOGIN </button>
                </div>)

        } else {
            return (<Redirect from="/login" to="/" />)
        }
    }
    return (
        <>
            {userLogged()}
        </>);
};
