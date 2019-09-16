import React from 'react';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="logo">
                <img src={require('../../assets/images/logo.png')} alt="logo" />
              </div>
            </div>
            <div className="col-md-9">
              <nav>
                <ul className="list-unstyled d-flex justify-content-end m-0">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about/">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact/">Contact</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default Header;
