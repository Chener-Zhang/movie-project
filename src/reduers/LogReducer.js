
export default function LogReducer(state = { type: 'LOGOUT', Boolean: false, userName: '',  userID: '' }, action) {
 
    switch (action.type) {
        case 'LOGIN':
            return { ...state, type: 'LOGIN', Boolean: true, userName: action.userName, userID: action.userID };
        case 'LOGOUT':
            return { ...state, type: 'LOGOUT', Boolean: false, userName: action.userName };

        default:
            return state;

    }
}
