export default function PageReducer(state = 1, action) {

    switch (action.type) {
        case "NEXT_PAGE":
            return state + 1;

        case 'PRE_PAGE':
            return state - 1;

        case 'RESET':
            return 1;
        default:

            return state;
    }

}