import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

export default function Login() {

    const isLogged = useSelector(state =>state.LogReducer);
    
    console.log(isLogged)
    return (<>
        <h3> Username:
            <input />
        </h3>

        <h3> Password:
            <input />
        </h3>
        <button>LOGIN </button>

    </>);
};
