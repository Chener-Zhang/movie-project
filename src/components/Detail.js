import axios from 'axios';
import React, { useState, useEffect } from 'react';


function Detail(props) {

    const [data, setData] = useState(null);
    const movieId = props.match.params.id;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=dd32c1edcdcaa2ef3be79570c191e5ea&language=en-US`)
            .then(res => {
                setData(res.data)
            })
            .catch(e => console.log(e))
    }, []);

    function showDetail() {
        return (<>
            <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} width="400px" height="707px" alt={data.id} />
            <h1>{data.original_title}</h1>
            <h4>Release data :
                <h3>{data.release_date}</h3>
            </h4>
            <h4>Overview:
                <h3>{data.overview}</h3>
            </h4>
            <h4>Genres:
                <ul>
                    {data.genres.map(e => {
                        console.log(e)
                        return <li key={e.id}>{e.name}</li>
                    })}
                </ul>
            </h4>
            <h4>Average Rating:
                <h3>{data.vote_average}</h3>
            </h4>
            {/* your rate here */}
            <h4>Production Companies:
                <ul>
                    {data.production_companies.map(e => {
                        return <li key={e.id}>
                            {e.name}
                            <img src={`https://image.tmdb.org/t/p/w500/${e.logo_path}`} width="50px" height="30" alt={e.id} />
                        </li>
                    })}
                </ul>
            </h4>
        </>);
    }
    return (
        <div>
            {console.log(data)}
            {data ? showDetail() : null}

        </div>
    )

}

export default Detail;
