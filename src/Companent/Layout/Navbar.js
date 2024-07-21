import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css"

class Navbar extends React.Component {
  static defaultProps= {
    title: "GitHub Finder",
    icon:"fa-brands fa-github",
  };

  static proptype = {
title: PropTypes.string.isRequired
  }
  render() {
    return (
      <nav className="navbar">
        <h1>
          <i className={this.props.icon}></i>{this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;