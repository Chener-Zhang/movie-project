
import { useSelector } from 'react-redux'

function HOME() {

    const isLogged = useSelector(state => state.LogReducer);
    console.log(isLogged);
    return (<div>This is the home page</div>);
}

export default HOME;