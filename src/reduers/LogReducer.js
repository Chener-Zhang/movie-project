import Login from "../navigations/Login";


export default function LogReducer(state = 'LOGOUT', action) {
    switch (action.type) {
        case 'LOGIN':
            return 'LOGIN';
        case 'LOGOUT':
            return 'LOGOUT'

        default:
            return state;

    }
}