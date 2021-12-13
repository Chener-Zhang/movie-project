import axios from 'axios'

export const RATE = (MEDIA_ID, RATED_VALUE) => {
    return async (dispatch, getState) => {
        console.log(MEDIA_ID)
        const sessionID = getState().LogReducer.sessionId;

        await axios.post(`https://api.themoviedb.org/3/movie/${MEDIA_ID}/rating?`, null, {
            params: {
                api_key: 'dd32c1edcdcaa2ef3be79570c191e5ea',
                value: RATED_VALUE,
                session_id: sessionID,
            }
        }).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.warn(error);
            })
    }
}