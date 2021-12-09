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
    const [loading, setLoading] = useState(false);

    const isLogged = useSelector(state => state.LogReducer);
    const dispatch = useDispatch()


    async function login() {
        console.warn(userName, passWord);

        const response = await fetch("https://api.themoviedb.org/3/authentication/token/new?api_key=dd32c1edcdcaa2ef3be79570c191e5ea")
            .then(res => res.json())
            .then(result => {
                setLoading(true);
                const param = `username=${userName}&password=${passWord}&request_token=${result.request_token}`
                return fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=dd32c1edcdcaa2ef3be79570c191e5ea&${param}`, { method: 'POST' })
            })
            .then(res => res.json())
            .then(token => {
                setLoading(true);
                const param = `request_token=${token.request_token}`
                return fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=dd32c1edcdcaa2ef3be79570c191e5ea&${param}`, { method: 'POST' })
            })
            .then(res => res.json())
            .then(sessionID => {
                setLoading(true);
                if (sessionID.success) {
                    setLoading(false);
                    dispatch(USER_LOGIN(userName, sessionID.session_id));
                } else {
                }
            })
            
        return response;
    }

    const checkUserInfo = () => {
        if (userName === "" || passWord === "") {
            console.log('it empty')
        }
        login();
    }




    const userLogged = () => {
        //If the user does not login, then ask to login

        if (!isLogged.Boolean) {
            return (

                <div className="loginStyle">
                    <h2>LOGIN</h2>
                    <input onChange={(e) => setUserName(e.target.value)} placeholder="UserName" />
                    <input type="password" onChange={(e) => setPassWord(e.target.value)} placeholder="Passwords" />
                    <button onClick={checkUserInfo}>LOGIN </button>
                </div>)

        }
        //If already login, then redirect to home page
        else {
            return (<Redirect from="/login" to="/home" />)
        }
    }



    return (
        <div>
            {userLogged()}
            <div className='loading'>{loading ? "Loading..." : null}</div>

        </div>
    );
};
