import React from 'react';
import Child from './child';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function (prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }
  render() {
    let options = ['Dashboard', 'Servies', 'Logout'];
    return (
      <div className="container">
        <div className="row toggle-section section mt-3 p-3">
          <div className="col-sm-12">
            <div className="text-left">
              <h3>Toggle</h3>
              <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </div>
          </div>
        </div>
        <div className="row child-section section mt-3 p-3">
          <div className="col-sm-12 text-left">
            <h3>Props</h3>
            <Child message={'Hello'} name={'John'} standard={'5th'} />
          </div>
        </div>
        <div className="row loop-section section mt-3 p-3">
          <div className="col-sm-12 text-left">
          <h3>Loop</h3>
            <ul className="list-unstyled">
              {options.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    );
  }
}
export default Home;