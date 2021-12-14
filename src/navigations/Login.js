import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGIN } from '../actions/userLoginAction'
import { useState } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

//CSS
import '../styles/LoginPage.css'
import Button from 'react-bootstrap/Button'

export default function Login() {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [loading, setLoading] = useState(false);
    const [authenicationStatus, setAuthenicationStatus] = useState(false);

    const isLogged = useSelector(state => state.LogReducer);
    const dispatch = useDispatch()
    const api_key = 'dd32c1edcdcaa2ef3be79570c191e5ea';
    let userSessionId = '';

    async function login() {
        const response = await axios
            .get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${api_key}`)
            .then(response => {
                setLoading(true);
                console.log(response.data)
                const param = `username=${userName}&password=${passWord}&request_token=${response.data.request_token}`
                return axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=dd32c1edcdcaa2ef3be79570c191e5ea&${param}`)
            })
            .then(response => {
                setLoading(true);
                console.log(response.data)
                const param = `request_token=${response.data.request_token}`
                return axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=dd32c1edcdcaa2ef3be79570c191e5ea&${param}`)
            }).catch(error => {
                setLoading(false);
                setAuthenicationStatus(true)
            })
            .then(response => {
                setLoading(true);
                const param = `session_id=${response.data.session_id}`
                userSessionId = response.data.session_id;

                return axios.get(`https://api.themoviedb.org/3/account?api_key=dd32c1edcdcaa2ef3be79570c191e5ea&${param}`)
            }).catch(error => {
                setLoading(false);
                setAuthenicationStatus(true)
            })
            .then(response => {
                setLoading(true);
                console.log(response.data)
                if (response.status === 200) {
                    setLoading(false);
                    setAuthenicationStatus(false)
                    dispatch(USER_LOGIN(userName, response.data.id, userSessionId))
                }
            }).catch(error => {
                setLoading(false);
                setAuthenicationStatus(true)
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
                    <Button variant="outline-primary" onClick={checkUserInfo}>LOGIN </Button>
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
            {authenicationStatus && <p className='loading'>Your login credentials could not be verified, please try again.</p>}

        </div>
    );
};
