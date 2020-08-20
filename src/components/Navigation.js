import React from "react";
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
        </div>
      </Container-fluid>
    );
  }
}
