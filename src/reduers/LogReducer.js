import Login from "../navigations/Login";


export default function LogReducer(state = {type: 'LOGOUT', Boolean : false}, action) {
    switch (action.type) {
        case 'LOGIN':
            return {...state, type : 'LOGIN', Boolean : true};
        case 'LOGOUT':
            return {...state, type : 'LOGOUT', Boolean : false};

        default:
            return state;

    }
}