import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Card from '../components/Card';


function Rated() {
    const [data, setData] = useState(null);
    const isLogged = useSelector(state => state.LogReducer);
    const api_key = 'dd32c1edcdcaa2ef3be79570c191e5ea';

    useEffect(() => {
        if (isLogged.Boolean) {
            axios.get(`https://api.themoviedb.org/3/account/${isLogged.userID}/rated/movies?`, {
                params: {
                    api_key: api_key,
                    language: 'en-US',
                    session_id: isLogged.sessionId
                }
            })
                .then(res => {
                    console.log("we got the rating is ")
                    setData(res.data.results)
                })
        }
    }, [])
    return (
        <div>
            {data ? <ul>
                {data.map(e => {
                    return <li key={e.id}>< Card movieInfo={e} /></li>
                })}
            </ul> : null}


        </div>
    );
}

export default Rated;

