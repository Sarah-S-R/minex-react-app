import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import Profile from './dashboard/Profile';
import Locations from './dashboard/Locations';
import Clients from './dashboard/Clients';
import Projects from './dashboard/Projects';
import Dashboard from './dashboard/Dashboard';
import Properties from './dashboard/Properties';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import './styles/dashstyles.css';
import './styles/Home.css';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/profile" component={Profile} />
          <Route path="/locations" component={Locations} />
          <Route path="/clients" component={Clients} />
          <Route path="/projects" component={Projects} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/properties" component={Properties} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;








