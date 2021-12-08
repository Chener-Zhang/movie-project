initalState = {
    type: '',
};

const LogReducer = (state = initalState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, type : 'LOGIN'};
        case 'LOGOUT':
            return {...state, type : 'LOGOUT'};
        
        default:
            return state;

    }
}