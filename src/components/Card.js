import React, { useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux'
import { ADD_FAVOR, REMOVE_FAVOR } from '../actions/postFavorAction'
import { Link } from 'react-router-dom'


function Card(props) {

    const info = props.movieInfo;
    const [favor, setFavor] = useState(false);
    const isLogged = useSelector(state => state.LogReducer);

    const dispatch = useDispatch();
    function checkFavor(id) {
        if (isLogged.Boolean) {
            if (favor) {
                return <BsHeartFill onClick={() => {
                    setFavor(false)
                }} />
            } else {
                return <BsHeart onClick={() => {
                    dispatch(ADD_FAVOR(id));
                    setFavor(true)
                }} />
            }
        }
    }


    return (<div>
        <div>

            <img src={`https://image.tmdb.org/t/p/w500/${info.backdrop_path}`} width="300px" height="300px" alt={info.title} />

            <Link to={{ pathname: `/home/${info.id}` }} >
                {info.title}
            </Link>


        </div>
        <div>
            <h3>{info.vote_average}</h3>
            {checkFavor(info.id)}
        </div>
        <button onClick={() => {
            dispatch(REMOVE_FAVOR(info.id))
        }}>Delete</button>
    </div>)

};

export default Card;