import React from 'react';
import './App.css';
import Header from './components/header/header';
import AppRouter from './router';
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {

    return <div className="App">

      <Router>
        <Header />

        <AppRouter />

      </Router>

    </div>
  }
}

export default App;
