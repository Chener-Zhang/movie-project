import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NEXT_PAGE, PRE_PAGE, RESET } from '../actions/pageChangeAction'
import Select from 'react-select'
import axios from 'axios'
import Card from '../components/Card';

//CSS
import '../styles/Home.css'

function HOME() {

    const isLogged = useSelector(state => state.LogReducer);
    const currentPage = useSelector(state => state.PageReducer);


    const [pageresult, setPageresult] = useState([]);
    const [cateResult, setCateresult] = useState('now_playing');
    const [dataLoad, setDataLoad] = useState(false);

    const dispatch = useDispatch();
    const api_key = 'dd32c1edcdcaa2ef3be79570c191e5ea';

    const options = [
        { value: 'now_playing', label: 'NowPlaying' },
        { value: 'top_rated', label: 'Top Rated' },
        { value: 'popular', label: 'Popular' },
        { value: 'upcoming', label: 'Upcoming' }
    ];

    console.log(isLogged);
    useEffect(() => {
        // Update the document title using the browser API
        // console.log(isLogged);

        console.log(`Current Page # : ${currentPage}`);
        console.log(`Current Cate : ${cateResult}`)

        fetchData();
        async function fetchData() {

            const key = currentPage + cateResult;
            const currentStorage = localStorage.getItem(key);


            //If no previous history, save it 
            if (currentStorage == null) {
                await axios.get(`https://api.themoviedb.org/3/movie/${cateResult}?`, {
                    params: {
                        api_key: api_key,
                        language: 'en-US',
                        page: currentPage
                    }
                })
                    .then(response => {
                        const data = response.data.results;
                        localStorage.setItem(key, JSON.stringify(data));
                        setPageresult(data);
                        setDataLoad(true);

                    })
                    .catch(error => {
                        console.warn(error);
                    })
            }
            //Retrive from histories
            else {
                const data = JSON.parse(localStorage.getItem(key));
                setPageresult(data);
                setDataLoad(true);
            }
        }


    }, [currentPage, cateResult]);

    return (
        <div>This is the home page

            <Select
                defaultValue={options[0]}
                onChange={(e) => {
                    setCateresult(e.value)
                    dispatch(RESET())
                }}
                options={options}
            />

            <h2>{currentPage}</h2>

            <button onClick={() => { if (!(currentPage <= 1)) { dispatch(PRE_PAGE()) } }}>
                Previous Page
            </button>

            <button onClick={() => dispatch(NEXT_PAGE())}>
                NEXT PAGE
            </button>

            {dataLoad ? <ul className='myList'>
                {pageresult.map(movie => {
                    return <li key={movie.id}>< Card movieInfo={movie} /></li>
                })}
            </ul> : null}

        </div>);
}

export default HOME;


