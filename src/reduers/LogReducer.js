
export default function LogReducer(state = { type: 'LOGOUT', Boolean: false, userName: '', userID: '', sessionId: '' }, action) {

    switch (action.type) {
        case 'LOGIN':
            return { ...state, type: 'LOGIN', Boolean: true, userName: action.userName, userID: action.userID, sessionId: action.sessionId };
        case 'LOGOUT':
            return { ...state, type: 'LOGOUT', Boolean: false, userName: action.userName };

        default:
            return state;

    }
}
