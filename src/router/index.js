import React from 'react';
import { Route, Switch } from "react-router-dom";

import About from '../components/about/about';
import Contact from '../components/contact/contact';


function Home() {
  return <h2 className="mt-2">Home</h2>;
}

function AppRouter() {
  return (

      <div>
    
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </Switch>

      </div>

  );
}

export default AppRouter;