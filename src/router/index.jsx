import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/header/header';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Home from '../components/home/home';



const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </Switch>
    </Router>
  );
}

export default AppRouter;