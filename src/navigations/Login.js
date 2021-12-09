import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { USER_LOGIN, USER_LOGOUT } from '../actions/userLoginAction'

export default function Login() {

    const isLogged = useSelector(state => state.LogReducer);
    const dispatch = useDispatch()

    console.log(isLogged)

    const userLogged = () => {
        if (isLogged.Boolean) {
            return (
                <div>
                    <h3> Username:
                        <input />
                    </h3>

                    <h3> Password:
                        <input />
                    </h3>
                    <button onClick={() => dispatch(USER_LOGOUT())}>Logout</button>
                </div>
            )

        } else {
            return <button onClick={() => dispatch(USER_LOGIN())}>LOGIN </button>
        }
    }

    return (
        <>

            {userLogged()}


        </>);
};
