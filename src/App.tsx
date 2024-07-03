
import { ErrorBoundary } from 'react-error-boundary';
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
import './styles/dashstyles.css';
import './styles/Home.css';
import './styles/index.css';

import AuthProvider from './hooks/AuthProvider';
import ProtectedRoute from './components/Auth/ProtectedRoute';

// TODO: Routing -> ensure all app routing uses react-router-dom patterns and hooks

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
    element: <Dashboard />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/properties",
    element: <Properties />
  }
]);

const App = () => {
  return (
    <AuthProvider>
        <ErrorBoundary
          fallback={<p>Sorry, something went wrong</p>}
        >
          <div id='main'>
            <RouterProvider router={router} />
          </div>
        </ErrorBoundary>
    </AuthProvider>
  );
}

export default App;












