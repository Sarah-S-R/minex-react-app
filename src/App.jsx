import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import Profile from './Dashboard/Profile';
import Locations from './Dashboard/Locations';
import Clients from './Dashboard/Clients';
import Projects from './Dashboard/Projects';
import Dashboard from './Dashboard/Dashboard';
import Properties from './Dashboard/Properties';
import Sidebar from './components/Common/Sidebar';
import Header from './components/Common/Header'; 
import Footer from './components/Common/Footer';
import './styles/dashstyles.css';
import './styles/Home.css';
import './styles/index.css';

import AuthProvider from './hooks/AuthProvider';
import ProtectedRoute from './components/Auth/ProtectedRoute';

// TODO: Check out your ESLInt config, package imports seem to be broken

// TODO: Routing -> ensure all app routing uses react-router-dom patterns and hooks
// TODO: Routing -> set up Protected Routes for working with Auth

// TODO: Styling -> Ensure CSS styles are applied as expected in all components & refactor as needed
// TODO: Styling -> Revisit core layout of application, ensure components are structured as expeted across views

// TODO: Data Model -> Generate data structures for each data set required in JSON format as a sample
// TODO: Data Model -> Decide on a State Management system & identify key handler methods
// TODO: Data Model -> Initialize some app state to populate views generically for testing


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot_password",
    element: <ForgotPassword />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute 
                childRoute={<Profile />}
              />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute 
                childRoute={<Dashboard />}
              />,
  },
  {
    path: "/locations",
    element: <ProtectedRoute 
                childRoute={<Locations />}
              />,
  },
  {
    path: "/clients",
    element: <ProtectedRoute 
                childRoute={<Clients />}
              />,
  },
  {
    path: "/projects",
    element: <ProtectedRoute 
                childRoute={<Projects />}
              />,
  },
  {
    path: "/properties",
    element: <ProtectedRoute 
                childRoute={<Properties />}
              />,
  }
]);

const App = () => {
  return (
    <AuthProvider>
      {/* <Router> */}
        {/* <div className="App"> */}
          {/* <Header /> */}
          {/* <Sidebar /> */}
          <RouterProvider router={router} />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/properties" element={<Properties />} />
          </Routes> */}
          {/* <Footer /> */}
        {/* </div> */}
      {/* </Router> */}
    </AuthProvider>
  );
}

export default App;











