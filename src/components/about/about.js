import React from 'react';

class About extends React.Component {
    render() {
  
      return <div className="App">
  
        <div className="welcome-message mt-4">Hello {this.props.message}</div>
      </div>
    }
  }
  
  
  export default About;