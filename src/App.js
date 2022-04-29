import './App.css';
import StoreLogin from "./components/StoreLogin";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path="/shopify/callback">
                      <StoreLogin />
                  </Route>
                  <Route path="/" exact>
                      <StoreLogin />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
