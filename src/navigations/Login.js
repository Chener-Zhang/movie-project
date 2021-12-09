import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGIN } from '../actions/userLoginAction'
import { useState } from 'react';
import { Redirect } from 'react-router-dom'

//CSS
import '../styles/LoginPage.css'



export default function Login() {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const isLogged = useSelector(state => state.LogReducer);
    const dispatch = useDispatch()


    async function login() {
        console.warn(userName,passWord)
        const response  = await fetch()
    }
    const checkUserInfo = () => {
        console.log('button click')

        if (userName == "" || passWord == "") {
            console.log('it empty')
        }

        // dispatch(USER_LOGIN(userName))
    }


    const userLogged = () => {
        if (!isLogged.Boolean) {
            return (
                <div className="loginStyle">
                    <h2>LOGIN</h2>

                    <input onChange={(e) => setUserName(e.target.value)} placeholder="UserName" />
                    <input onChange={(e) => setPassWord(e.target.value)} placeholder="Passwords" />

                    <button onClick={checkUserInfo}>LOGIN </button>
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
