import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import ProfileIcon from "../assets/images/profile_icon.png";
import "../navigation.css";

export default class Navigation extends React.Component {
  render() {
    return (
      <Container-fluid>
        <div className="topnav" id="myTopnav">
          <a href="#home" class="active">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Sport</a>
          <a href="#about">Weather</a>
          <a href="#news">iPlayer</a>
          <a href="#contact">Sounds</a>
          <a href="#about">CBBC</a>
          <select href="#about">More</select>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </Container-fluid>
    );
  }
}
