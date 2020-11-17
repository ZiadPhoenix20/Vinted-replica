import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cookie from "js-cookie";

import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";

function App() {
  const [token, setToken] = useState(Cookie.get("userToken"));

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookie.set("userToken", tokenToSet);
      setToken(tokenToSet);
    } else {
      Cookie.remove("userToken");
      setToken(null);
    }
  };
  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <Signup token={token} setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login token={token} setUser={setUser} />
        </Route>
        <Route path="/publish">
          {token ? <Publish token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
