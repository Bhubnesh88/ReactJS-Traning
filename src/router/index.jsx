import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../components/header/header';
import About from '../components/about/about';
import Contact from '../components/contact/contact';


const Home = () => {
  return <h2 className="mt-2">Home</h2>;
}

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