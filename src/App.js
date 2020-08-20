import React from "react";
import "./App.css";
// import { Button, Alert, Breadcrumb, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Grids from "./components/grids";
import NavBar from "./components/navbars";
import "./fonts/BalooTamma2-Regular.ttf";

// import React from 'react';
// import logo from './logo.png'; // Tell webpack this JS file uses this image
// console.log(logo); // /logo.84287d09.png
// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="Logo" />;
// }
// export default Header;

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Grids />
      </header>
    </div>
  );
}

export default App;
