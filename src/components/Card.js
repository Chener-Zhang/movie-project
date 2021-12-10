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

// adult: false
// backdrop_path: "/4gKxQIW91hOTELjY5lzjMbLoGxB.jpg"
// genre_ids: (3) [28, 53, 878]
// id: 763164
// original_language: "en"
// original_title: "Apex"
// overview: "Ex-cop Thomas Malone is serving a life sentence for a crime he didn’t commit. He is offered a chance at freedom if he can survive a deadly game of Apex, in which six hunters pay for the pleasure of hunting another human on a remote island. He accepts, and once he arrives, all hell breaks loose."
// popularity: 893.234
// poster_path: "/chTkFGToW5bsyw3hgLAe4S5Gt3.jpg"
// release_date: "2021-11-12"
// title: "Apex"
// video: false
// vote_average: 5.6
// vote_count: 265