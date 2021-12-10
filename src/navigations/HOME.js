import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'
import Card from '../components/Card';

function HOME() {


    const isLogged = useSelector(state => state.LogReducer);
    const api_key = 'dd32c1edcdcaa2ef3be79570c191e5ea';

    useEffect(async () => {
        // Update the document title using the browser API
        console.log(isLogged);
        console.log('userEffect was trigger')
        const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?", {
            params: {
                api_key: api_key
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.warn(error);
            })

    });
    return (<div>This is the home page
        {/* <Card/> */}
    </div>);
}

export default HOME;