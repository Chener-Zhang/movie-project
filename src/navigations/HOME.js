import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NEXT_PAGE, PRE_PAGE } from '../actions/pageChangeAction'
import axios from 'axios'
import Card from '../components/Card';

function HOME() {

    const isLogged = useSelector(state => state.LogReducer);
    const changePage = useSelector(state => state.PageReducer);
    const [pageresult, setPageresult] = useState([]);

    const dispatch = useDispatch();
    const api_key = 'dd32c1edcdcaa2ef3be79570c191e5ea';

    useEffect(async () => {
        // Update the document title using the browser API
        console.log(isLogged);
        console.log(`Current Page # : ${changePage}`);

        const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?", {
            params: {
                api_key: api_key,
                language: 'en-US',
                page: changePage
            }
        })
            .then(response => {
                const data = response.data.results
                setPageresult(data)
            })
            .catch(error => {
                console.warn(error);
            })
    }, [changePage]);

    //  <h2>hihi{pageresult[0].id}</h2> 

    return (<div>This is the home page
        {/* <Card/> */}
        <h2>{changePage}</h2>

        <div>
            {pageresult.map(movie => {
                console.log(movie)
            })}

        </div>


        <button onClick={() => {
            if (!(changePage <= 1)) {
                dispatch(PRE_PAGE())
            }

        }}
        >
            Previous Page
        </button>
        <button onClick={() => dispatch(NEXT_PAGE())}>
            NEXT PAGE
        </button>


    </div>);
}

export default HOME;