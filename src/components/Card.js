import React, { useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';


function Card(props) {

    const info = props.movieInfo;
    const [favor, setFavor] = useState(false);

    function checkFavor() {
        if (favor) {
            return <BsHeartFill onClick={() => {
                setFavor(false)
            }} />
        } else {
            return <BsHeart onClick={() => {
                setFavor(true)
            }} />
        }
    }

    return (<div>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${info.backdrop_path}`} width="300px" height="300px" />

            <h2>{info.title}</h2>
        </div>
        <div>
            <h3>{info.vote_average}</h3>
            {checkFavor()}
        </div>

    </div>)

};

export default Card;