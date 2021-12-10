import React from 'react';
import { AiFillHeart } from 'react-icons/ai';




export class Card extends React.Component {
    
    render() {
        return (<>
            <div>
                <img />
                <h2>Title</h2>
            </div>
            <div>
                <h3>Rating</h3>
                <AiFillHeart />
            </div>

        </>)
    };
};

export default Card;

