
export default function LogReducer(state = { type: 'LOGOUT', Boolean: false, userName: '',  Id: '' }, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, type: 'LOGIN', Boolean: true, userName: action.userName,  Id: action.Id };
        case 'LOGOUT':
            return { ...state, type: 'LOGOUT', Boolean: false, userName: action.userName };

        default:
            return state;

    }
}
