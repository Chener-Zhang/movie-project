import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import axios from 'axios'
import Card from "../components/Card";
function Favorite() {

    const [favoredData, setfavoredData] = useState(null)
    const isLogged = useSelector(state => state.LogReducer);
    const [dataLoad, setDataLoad] = useState(false);

    useEffect(() => {
        if (isLogged.Boolean) {

            fetchData();

            async function fetchData() {
                await axios.get('https://api.themoviedb.org/3/account/11480624/favorite/movies?', {
                    params: {
                        api_key: 'dd32c1edcdcaa2ef3be79570c191e5ea',
                        sort_by: 'created_at.asc',
                        session_id: isLogged.sessionId
                    }
                })
                    .then(response => {
                        setfavoredData(response.data.results)
                        setDataLoad(true);
                    })
                    .catch(error => {
                        console.warn(error);
                    })
            }
        }
    }, [isLogged.Boolean,isLogged.sessionId])

    return (
        <div>
            {dataLoad ? <ul className='myList'>
                {favoredData.map(movie => {
                    return <li key={movie.id}>< Card movieInfo={movie} /></li>
                })}
            </ul> : null}
        </div>);
}

export default Favorite;