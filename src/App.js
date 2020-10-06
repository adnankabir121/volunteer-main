import React, { createContext, useState } from 'react';
import MainNav from './Components/MainNav/MainNav';
import OtherNav from './Components/OtherNav/OtherNav';
import AllCards from './Components/AllCards/AllCards';
import Login from './Components/Login/Login';
import AdminHomePage from './Components/AdminHomePage/AdminHomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import VolunteerDashBoard from './Components/VolunteerData/VolunteerData';
import VolunteerData from './Components/VolunteerData/VolunteerData';


export const UserContext = createContext();

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="container py-3">
        <p>Name : {loggedInUser.name}</p>
        <p>Email : {loggedInUser.email}</p>
      </div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/admin">
            <AdminHomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/volunteer-data">
            <VolunteerData/>
          </Route>
          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;