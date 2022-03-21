import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddActivity from './AddActivity';
import ActivityDetails from './ActivityDetails';
import NotFound from './404';
import EditActivity from './EditActivity';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/AddActivity">
              <AddActivity />
            </Route>

            <Route path="/activities/:id">
              <ActivityDetails />
            </Route>

            {/* <Route path="/activities/:id">
              <EditActivity />
            </Route> */}

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;