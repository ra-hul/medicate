import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Shared/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Appointments from './Components/Appoitnments/Appointments';
import About from './Components/About/About';



function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/home' >
            <Home></Home>
          </Route>
          <Route exact path="/Appointments">
            <Appointments></Appointments>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
