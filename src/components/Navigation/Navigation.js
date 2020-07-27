import React from 'react'
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import finaLogo from "../../assets/images/fina-logo.png"
import "./Navigation.css"

const navigation = () => {
  return (
    <Navbar>
        <img className="logo" src={finaLogo} alt="fina" />
        <strong className="estudent">eStudent</strong>
      <Nav className="nav-tekst">
        <NavLink className="navbar-link" to="/" exact>Unos novog studenta</NavLink>
        <NavLink className="navbar-link" to="/studentList">Popis studenata</NavLink>
      </Nav>
    </Navbar>
  )
}

export default navigation
