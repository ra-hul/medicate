import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Shared/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route >
            <Home></Home>
          </Route>

        </Switch>


      </Router>




    </div>
  );
}

export default App;
