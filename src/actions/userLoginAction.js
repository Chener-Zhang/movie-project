export const USER_LOGIN = (userName, userID, sessionId) => {

    return {
        type: 'LOGIN',
        Boolean: true,
        userName: userName,
        userID: userID,
        sessionId: sessionId
    };
}


export const USER_LOGOUT = () => {
    return {
        type: 'LOGOUT',
        Boolean: false,
        userName: ''
    }
}
