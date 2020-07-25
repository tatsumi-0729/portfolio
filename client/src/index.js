import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/index.scss";
import Sidebar from "./components/sidebar";
import * as serviceWorker from "./serviceWorker";

import Profile from "./components/profile";
import Blog from "./components/blog";
import Archive from "./components/archive";
import Contact from "./components/contact";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Router>
        <Sidebar />
        <div className="router_part">
          <Switch>
            <Route exact path="/" component={Profile}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/archive" component={Archive}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
