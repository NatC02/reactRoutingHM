import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  active = {
    fontWeight: "bold",
    color: "red",
  };

  header = {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none",
  };
  render() {
    return (
      <div style={this.header}>
        <NavLink exact to="/" activeStyle={this.active}>
          Home
        </NavLink>
        <NavLink to="/specsoneplus" activeStyle={this.active}>
          Oneplus 7t Specs
        </NavLink>
        <NavLink to="/specssamsung" activeStyle={this.active}>
          Samsung S20 Specs
        </NavLink>
      </div>
    );
  }
}

export default Header;
