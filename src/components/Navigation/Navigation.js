import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import finaLogo from "../../assets/images/fina-logo.png";
import "./Navigation.css";

const navigation = () => {
  return (
    <Navbar>
      <img className="logo" src={finaLogo} alt="fina" />
      <strong className="estudent">eStudent</strong>
      <Nav className="nav-tekst">
        <NavLink className="navbar-link" to="/" exact>
          Najnoviji podaci
        </NavLink>
        <NavLink className="navbar-link" to="/zupanijeList">
          Županije
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default navigation;
