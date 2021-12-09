export const USER_LOGIN = (userInput, accountId) => {
   
    return {
        type: 'LOGIN',
        Boolean: true,
        userName: userInput,
        Id: accountId
    };
}


export const USER_LOGOUT = () => {
    return {
        type: 'LOGOUT',
        Boolean: false,
        userName: ''
    }
}
