export default function CateReducer(state = 'NOWP_LAYING', action) {
    switch (action.type) {
        case 'NOW_LAYING':
            return 'NOW_LAYING';
        case 'TOP_RATED':
            return 'TOP_RATED'

        case 'POPULAR':
            return 'POPULAR';

        case 'UP_COMING':
            return 'UP_COMING';
        default:
            return state;
    }

}