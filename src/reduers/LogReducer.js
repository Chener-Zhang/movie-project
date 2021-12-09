import Login from "../navigations/Login";


export default function LogReducer(state = {type: 'LOGOUT', Boolean : false, userName : ''}, action) {
    switch (action.type) {
        case 'LOGIN':
            return {...state, type : 'LOGIN', Boolean : true, userName: action.userName};
        case 'LOGOUT':
            return {...state, type : 'LOGOUT', Boolean : false, userName: action.userName};

        default:
            return state;

    }
}