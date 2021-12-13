import axios from 'axios'

export const ADD_FAVOR = (MEDIA_ID) => {
    return async (dispatch, getState) => {

        console.log(MEDIA_ID)
        const sessionID = getState().LogReducer.sessionId;

        //Change the account ID later Debug require
        await axios.post("https://api.themoviedb.org/3/account/11480624/favorite?", null, {
            params: {
                api_key: 'dd32c1edcdcaa2ef3be79570c191e5ea',
                session_id: sessionID,
                media_type: 'movie',
                media_id: MEDIA_ID,
                favorite: true,
            }
        }).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.warn(error);
            })
    }
}


export const REMOVE_FAVOR = (MEDIA_ID) => {
    return async (dispatch, getState) => {
        //Change the account ID later Debug require
        const sessionID = getState().LogReducer.sessionId;

        await axios.post("https://api.themoviedb.org/3/account/11480624/favorite?", null, {
            params: {
                api_key: 'dd32c1edcdcaa2ef3be79570c191e5ea',
                session_id: sessionID,
                media_type: 'movie',
                media_id: MEDIA_ID,
                favorite: false,
            }
        }).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.warn(error);
            })
    }
}