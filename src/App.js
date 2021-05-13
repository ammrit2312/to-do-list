import Home from "./Home";
import NavBar from "./NavBar";
import Create from "./Create";
import ListDetails from "./ListDetails"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Archive from "./Archive";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/archive">
              <Archive/>
            </Route>
            <Route path="/lists/:id">
              <ListDetails/>
            </Route>
            <Route path="/archived/:id">
              <ListDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;