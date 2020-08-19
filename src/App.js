import React from "react";
import "./App.css";
// import { Button, Alert, Breadcrumb, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Grids from "./components/grids";
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
        <Grids />
        {/* <Card style={{ color: "#000" }}>
          <Card.Title>This is a Card</Card.Title>
          <Card.Img
            src="https://picsum.photos/200/100"
            style={{ width: "50%" }}
          />
          <Card.Text>Hello this is my first react-bootstrap card.</Card.Text>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="primary">This is a button</Alert>
        <Button>Test Button</Button> */}
      </header>
    </div>
  );
}

export default App;
