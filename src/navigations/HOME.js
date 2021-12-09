import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGIN } from '../actions/userLoginAction'
import { useState } from 'react';
import { Redirect } from 'react-router-dom'

function HOME() {
    const isLogged = useSelector(state => state.LogReducer);
    console.log(isLogged)
    return ( <div>This is the home page</div> );
}

export default HOME;