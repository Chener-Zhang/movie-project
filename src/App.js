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
        <Route path="/" exact component={HOME} />
        <Route path="/favorite" exact component={Favorite} />
        <Route path="/rated" exact component={Rated} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>


  );
}

export default App;
