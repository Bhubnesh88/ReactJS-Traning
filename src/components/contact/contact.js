import React from 'react';

class Contact extends React.Component {
    render() {
  
      return <div className="App">
  
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
  
  
  export default Contact;