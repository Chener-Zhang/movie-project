import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NEXT_PAGE, PRE_PAGE } from '../actions/pageChangeAction'
import axios from 'axios'
import Card from '../components/Card';

function HOME() {

    const isLogged = useSelector(state => state.LogReducer);
    const changePage = useSelector(state => state.PageReducer);
    const dispatch = useDispatch();
    const api_key = 'dd32c1edcdcaa2ef3be79570c191e5ea';

    useEffect(async () => {
        // Update the document title using the browser API
        console.log(isLogged);
        console.log(changePage);
        const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?", {
            params: {
                api_key: api_key
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.warn(error);
            })

    });


    return (<div>This is the home page
        {/* <Card/> */}
        <h2>{changePage}</h2>

        <button onClick={() => dispatch(NEXT_PAGE())}>
            NEXT PAGE
        </button>
        <button onClick={() => dispatch(PRE_PAGE())}>
            Previous Page
        </button>

    </div>);
}

export default HOME;