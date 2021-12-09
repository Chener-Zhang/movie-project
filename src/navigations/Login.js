import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGIN, USER_LOGOUT } from '../actions/userLoginAction'
import { useState } from 'react';



export default function Login() {
    
    const [userName, setUserName] = useState('');
    const isLogged = useSelector(state => state.LogReducer);
    const dispatch = useDispatch()

    console.log(isLogged)

    const userLogged = () => {
        if (!isLogged.Boolean) {
            return (
                <div>
                    <h3> Username:
                        <input onChange={(e) => setUserName(e.target.value)} />
                    </h3>

                    <h3> Password:
                        <input />
                    </h3>

                    <button onClick={() => dispatch(USER_LOGIN(userName))}>LOGIN </button>
                </div>)

        } else {
            return (
                <div>
                    <h1>Current user : {userName}</h1>
                    <button onClick={() => dispatch(USER_LOGOUT())}>Logout</button>
                </div>)

        }
    }

    return (
        <>
            {userLogged()}
        </>);
};
