import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Patients Data
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active"></li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  account :{this.props.account}
                </a>
              </li>

              <li className="nav-item"></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
