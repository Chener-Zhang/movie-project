export const USER_LOGIN = (userInput) => {
    return {
        type: 'LOGIN',
        Boolean:  true,
        userName: userInput,
        requestToken: ''
    };
}


export const USER_LOGOUT = () => {
    return {
        type: 'LOGOUT',
        Boolean:  false,
        userName : ''

    }
}
