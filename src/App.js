import React from 'react';
import './App.css';
import Header from './components/header/header';


class App extends React.Component {
  render() {

    return <div className="App">

      <div>
        <Header />
      </div>

      <div className="welcome-message mt-4">Hello {this.props.message}</div>
      <div className="function mt-4">{element}</div>
    </div>
  }
}

const user = {
  firstName: 'Steve',
  lastName: 'Smith'
};
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


export default App;
