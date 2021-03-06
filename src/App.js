import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import store from "./Store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./Actions/authActions";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoute";

import HomePage from "./Components/HomePage";

import VehicleSearch from "./Components/SearchPages/VehicleSearch";
import LocationSearch from "./Components/SearchPages/LocationSearch";
import CitizenSearch from "./Components/SearchPages/CitizenSearch";
import CitizenList from "./Components/ListPage/CitizenList";
import VehicleList from "./Components/ListPage/VehicleList";

import VehicleCitizen from "./Components/CitizenInfo/VehicleCitizen";
import AssociatesCitizen from "./Components/CitizenInfo/AssociatesCitizen";
import HomePageCitizen from "./Components/CitizenInfo/HomePageCitizen";
import FinancialsCitizen from "./Components/CitizenInfo/FinancialsCitizen";
import Header from "./Components/Header";
import Location from "./Components/Map/Location";

// // Check for token to keep user logged in
// if (sessionStorage.jwtToken) {
//   // Set auth token header auth
//   const token = sessionStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
// // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={withRouter(HomePage)}></Route>
          <Route path="/CitizenSearch" component={withRouter(CitizenSearch)}></Route>
          <Route path="/LocationSearch" component={withRouter(LocationSearch)}></Route>
          <Route path="/VehicleSearch" component={withRouter(VehicleSearch)}></Route>
          <Route path="/CitizenList/:forenames/:surname" component={withRouter(CitizenList)}></Route>
          <Route path="/VehicleList/:reg" component={withRouter(VehicleList)}></Route>
          <Route path="/CitizenHome/:id" component={withRouter(HomePageCitizen)}></Route>
          <Route path="/CitizenFinancials/:id/:forenames/:surname" component={FinancialsCitizen}></Route>
          <Route
            path="/CitizenAssociates/:id"
            component={withRouter(AssociatesCitizen)}
          ></Route>
          <Route path="/CitizenVehicles/:reg" component={withRouter(VehicleCitizen)}></Route>


          <Route path="/Map/:search" component={withRouter(Location)}></Route>
        </Router>
      </Provider>
    );
  }
}

// export default class App extends Component {
//   render() {
//     return (
// <Provider store={store}>
//   <Router>
//     <Link to="/">Home</Link>
//     <Route exact path="/" component={Login}></Route>
//     {/* <Route path="/loggedIn/:username" component={HomePage}></Route> */}
//     <Switch>
//       <PrivateRoute exact path="/loggedIn" component={HomePage} />
//     </Switch>
//   </Router>
// </Provider>

//   );
// }
