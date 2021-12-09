
export default function LogReducer(state = { type: 'LOGOUT', Boolean: false, userName: '', requestToken: '' }, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, type: 'LOGIN', Boolean: true, userName: action.userName, requestToken: action.requestToken };
        case 'LOGOUT':
            return { ...state, type: 'LOGOUT', Boolean: false, userName: action.userName };

        default:
            return state;

    }
}