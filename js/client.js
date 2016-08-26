import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { Layout } from './components/layout';
import { Home } from './components/Home';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';

const app = document.getElementById('app');

//ReactDOM.render(<Layout/>, app);
ReactDOM.render(
	<Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="articles" name="articles" component={Articles}></Route>
      <Route path="home" name="home" component={Home}></Route>
      <Route path="contact" name="contact" component={Contact}></Route>
    </Route>
  </Router>, app);