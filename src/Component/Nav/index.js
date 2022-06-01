import React from "react";
import Search from "../Search/index";

export class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">
            Navbar
          </span>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#">
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  Link
                </span>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <span className="dropdown-item" href="#">
                      Action
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" href="#">
                      Another action
                    </span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <span className="dropdown-item" href="#">
                      Something else here
                    </span>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <span className="nav-link disabled">Disabled</span>
              </li>
            </ul>
            {this.props.isSearchPanel && <Search />}
          </div>
        </div>
      </nav>
    );
  }
}
