import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import coronaLogo from "../../assets/images/corona.jpg";
import "./Navigation.css";

const navigation = () => {
  return (
    <Navbar>
      <a href="/"><strong className="estudent">eCorona</strong></a>
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
