export default function PageReducer(state = 1, action) {

    console.log(action)

    switch (action.type) {
        case "NEXT_PAGE":
            return state + 1;

        case 'PRE_PAGE':
            return state - 1;

        default:

            return state;
    }

}