import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NEXT_PAGE, PRE_PAGE } from '../actions/pageChangeAction'
import axios from 'axios'
import Card from '../components/Card';

//CSS
import '../styles/Home.css'

function HOME() {

    const isLogged = useSelector(state => state.LogReducer);
    const currentPage = useSelector(state => state.PageReducer);
    const [pageresult, setPageresult] = useState([]);

    const dispatch = useDispatch();
    const api_key = 'dd32c1edcdcaa2ef3be79570c191e5ea';

    useEffect(async () => {
        // Update the document title using the browser API
        console.log(isLogged);
        console.log(`Current Page # : ${currentPage}`);
        const currentStorage = localStorage.getItem(currentPage);
        
        //If no previous history, save it 
        if (currentStorage == null) {
            const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?", {
                params: {
                    api_key: api_key,
                    language: 'en-US',
                    page: currentPage
                }
            })
                .then(response => {
                    const data = response.data.results
                    localStorage.setItem(currentPage, JSON.stringify(data));
                    setPageresult(data)

                })
                .catch(error => {
                    console.warn(error);
                })
        } 
        //Retrive from histories
        else {
            const data = JSON.parse(localStorage.getItem(currentPage));
            setPageresult(data)
        }

    }, [currentPage]);

    //  <h2>hihi{pageresult[0].id}</h2> 

    return (<div>This is the home page
        {/* <Card/> */}
        <h2>{currentPage}</h2>
        <button onClick={() => {
            if (!(currentPage <= 1)) {
                dispatch(PRE_PAGE())
            }

        }}
        >
            Previous Page
        </button>
        <button onClick={() => dispatch(NEXT_PAGE())}>
            NEXT PAGE
        </button>
        <ul className='myList'>
            {pageresult.map(movie => {
                return <li key={movie.id}>< Card movieInfo={movie} /></li>
            })}
        </ul>





    </div>);
}

export default HOME;