import React from 'react';
import { AiFillHeart } from 'react-icons/ai';


export class Card extends React.Component {

    render() {
        const info = this.props.movieInfo;
        return (<div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${info.backdrop_path}`} width="300px" height="300px" />

                <h2>{info.title}</h2>
            </div>
            <div>
                <h3>{info.vote_average}</h3>
                <AiFillHeart />
            </div>

        </div>)
    };
};

export default Card;