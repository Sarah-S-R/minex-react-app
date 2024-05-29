import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import Profile from './Dasboard/Profile';
import Locations from './Dasboard/Locations';
import Clients from './Dasboard/Clients';
import Projects from './Dasboard/Projects'; // Import the Projects component
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import './components/styles/dashstyles.css';  // Adjust the path according to your project structure
import './components/styles/Home.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/profile" component={Profile} />
          <Route path="/locations" component={Locations} />
          <Route path="/clients" component={Clients} />
          <Route path="/projects" component={Projects} />
          <Route path="/dashboard" component={Dashboard} /> {/* Add this route */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;






