import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import LandingPage from "../Components/LandingPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { getAuth, onAuthStateChanged } from "../Firebase/firebase";
export default function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        {/* <PrivateRoute
          path="/dashboard"
          isAuthenticated={isAuthenticated}
          component={Dashboard}
        />
        <PublicRoute
          path="/"
          isAuthenticated={isAuthenticated}
          component={LandingPage}
        /> */}
        <Route component={LandingPage} path="/" />
        <Route component={Dashboard} path="/dashboard" />
      </Switch>
    </Router>
  );
}
