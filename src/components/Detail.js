import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { RATE } from '../actions/rateAction';
import { useDispatch } from 'react-redux'
import Select from 'react-select'
//CSS
import '../styles/detail.css'
import Button from 'react-bootstrap/Button'

function Detail(props) {

    const [data, setData] = useState(null);
    const [rate, setRate] = useState(null);

    const movieId = props.match.params.id;
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

    }, [movieId]);


    function onClickHandler() {
        console.log(rate)
        if (rate !== null) {
            dispatch(RATE(data.id, rate));
        }
    }

    function showDetail() {
        return (<>
            <div className="wrapper">

                <div className='box1'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt={data.id} />
                </div>


                <div className='box2'>
                    <div >
                        <h2>{data.original_title}</h2><h4>Release data :{data.release_date}</h4>
                    </div>

                    <div >
                        <h4>Overview:<br />{data.overview}</h4>
                    </div>
                </div>



                <div className='box3'>
                    <h4>Genres:
                        <ul>
                            {data.genres.map(e => {
                                return <li key={e.id}>{e.name}</li>
                            })}
                        </ul>
                    </h4>
                    <br />
                    <h4>Production Companies:
                        <ul>
                            {data.production_companies.map(e => {
                                return (<li key={e.id}>
                                    {e.name}
                                    <img src={`https://image.tmdb.org/t/p/w500/${e.logo_path}`} width="50px" height="30" alt={e.id} />
                                </li>)
                            })}
                        </ul>
                    </h4>
                </div>

                <div className='box4'>
                    <div>
                        <h4 style={{
                            marginBottom: '2em'
                        }} >Average Rating:
                            {data.vote_average}
                        </h4>

                        <Select
                            defaultValue={options[0]}
                            onChange={(e) => {
                                setRate(e.value)
                            }}
                            options={options}

                        />

                        <Button variant="outline-primary" onClick={() => {
                            onClickHandler()
                        }} style={{
                            marginTop: '2em'
                        }}>Submit</Button>
                    </div>

                </div>

            </div>
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
