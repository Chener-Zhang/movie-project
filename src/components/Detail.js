import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import { RATE } from '../actions/rateAction';
import { useDispatch, useSelector } from 'react-redux'

function Detail(props) {

    const [data, setData] = useState(null);
    const [rate, setRate] = useState(null);
    const [rateHistory, setRatehistory] = useState(null);
    const isLogged = useSelector(state => state.LogReducer);

    const movieId = props.match.params.id;
    const api_key = 'dd32c1edcdcaa2ef3be79570c191e5ea';
    const dispatch = useDispatch();

    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' }
    ];
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=dd32c1edcdcaa2ef3be79570c191e5ea&language=en-US`)
            .then(res => {
                setData(res.data)
            })
            .catch(e => console.log(e))

    }, [rateHistory]);

 
    function onClickHandler() {
        console.log(rate)
        if (rate !== null) {
            dispatch(RATE(data.id, rate));
        }
    }

    function showDetail() {
        return (<>
            <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} width="400px" height="707px" alt={data.id} />

            <h1>{data.original_title}</h1>

            <h4>Release data :
                {data.release_date}
            </h4>

            <h4>Overview:
                {data.overview}
            </h4>

            <h4>Genres:
                <ul>
                    {data.genres.map(e => {
                        return <li key={e.id}>{e.name}</li>
                    })}
                </ul>
            </h4>

            <h4>Average Rating:
                {data.vote_average}
            </h4>

            <h4>Number : {rateHistory}</h4>

            <Select
                defaultValue={options[0]}
                onChange={(e) => {
                    setRate(e.value)
                }}
                options={options}
            />

            <button onClick={() => {
                onClickHandler()
            }}>Submit</button>

            <h4>Production Companies:
                <ul>
                    {data.production_companies.map(e => {
                        return
                        (<li key={e.id}>
                            {e.name}
                            <img src={`https://image.tmdb.org/t/p/w500/${e.logo_path}`} width="50px" height="30" alt={e.id} />
                        </li>)
                    })}
                </ul>
            </h4>
        </>
        );
    }
    return (
        <div>

            {data ? showDetail() : null}

        </div>
    )

}

export default Detail;
