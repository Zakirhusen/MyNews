import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              MyNews
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
          <a className="nav-link border dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink exact activeClassName='active' className="dropdown-item"  to="/">General</NavLink></li>
            <li><NavLink exact activeClassName='active' className="dropdown-item"  to="/entertainment">Entertainment</NavLink></li>
            <li><NavLink exact activeClassName='active' className="dropdown-item"  to="/sports">Sports</NavLink></li>
            <li><NavLink exact activeClassName='active' className="dropdown-item"  to="/business">Business</NavLink></li>
            <li><NavLink exact activeClassName='active' className="dropdown-item"  to="/health">Health</NavLink></li>
            <li><NavLink exact activeClassName='active' className="dropdown-item"  to="/science">Science</NavLink></li>
            <li><NavLink exact activeClassName='active' className="dropdown-item"  to="/technology">Technology</NavLink></li>
          </ul>
        </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
