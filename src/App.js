import logo from './logo.svg';
import Home from './Routes/Home';
import ManageAttr from './Routes/ManageAttributes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/manage" component={ManageAttr} />
      </Switch>
    </Router>
  );
}

export default App;
