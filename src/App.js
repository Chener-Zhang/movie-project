//Navigations import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Favorite from "./navigations/Favorite"
import HOME from "./navigations/HOME"
import Rated from "./navigations/Rated"
import Login from "./navigations/Login";
import Detail from "./components/Detail";


function App() {

  return (

    <Router >
      <Header />
      <Switch>
        <Route path= "/" exact component={HOME} />
        <Route path="/home" exact component={HOME} />
        <Route path="/favorite" exact component={Favorite} />
        <Route path="/rated" exact component={Rated} />
        <Route path="/login" exact component={Login} />
        <Route path="/home/:id" exact component={Detail} />
      </Switch>
    </Router>


  );
}

export default App;
