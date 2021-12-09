//Navigations import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Favorite from "./navigations/Favorite"
import HOME from "./navigations/HOME"
import Rated from "./navigations/Rated"
import Login from "./navigations/Login";




function App() {
  return (

    <Router >
      <Header />
      <Switch>
        <Route exact path="/"  component={HOME} />
        <Route exact path="/favorite"  component={Favorite} />
        <Route exact path="/rated"  component={Rated} />
        <Route exact path="/login"  component={Login} />
      </Switch>
    </Router>


  );
}

export default App;
