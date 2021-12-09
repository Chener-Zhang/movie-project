export const USER_LOGIN = (userName, userID) => {

    return {
        type: 'LOGIN',
        Boolean: true,
        userName: userName,
        userID: userID
    };
}


export const USER_LOGOUT = () => {
    return {
        type: 'LOGOUT',
        Boolean: false,
        userName: ''
    }
}
