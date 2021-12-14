import React, { useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux'
import { ADD_FAVOR } from '../actions/postFavorAction'
import { Link } from 'react-router-dom'


//CSS
import Nav from 'react-bootstrap/Nav'

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

    return (

        <div className='card' style={
            {
                width: "90%",
            }
        }>

            <div className="card-body">
                <img src={`https://image.tmdb.org/t/p/w500/${info.backdrop_path}`} className="card-img-top" alt={info.title} />
                <h5 className="card-title">{info.title}</h5>
            </div>
            <div className="row">
                <div className='col-6'><Nav.Link as={Link} to={`/home/${info.id}`}>Detail</Nav.Link></div>
                <div className='col-6'>{checkFavor(info.id)}</div>
            </div>
        </div>
    )

};
export default Card;
