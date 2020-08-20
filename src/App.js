import React from "react";
import "./App.css";
// import { Button, Alert, Breadcrumb, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Grids from "./components/grids";
import Navigation from "./components/Navigation";
import Header from "./components/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "./fonts/BalooTamma2-Regular.ttf";
import Flowers from "./assets/images/flowers.jpeg";

// import React from 'react';
// import logo from './logo.png'; // Tell webpack this JS file uses this image
// console.log(logo); // /logo.84287d09.png
// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="Logo" />;
// }
// export default Header;

// Ipsum facere vel cumque, totam nostrum assumenda a amet cupiditate labore quos, cum beatae, ipsam optio nemo ex repellat distinctio obcaecati corporis explicabo voluptatum atque ab.Consequuntur, neque aliquam error dicta.Praesentium cum odit, quia voluptas aliquid consectetur expedita, perferendis labore voluptatum ipsum laboriosam sapiente nesciunt quod! Corrupti ratione iste ullam veniam rem, iusto optio delectus et magni accusantium dolorem amet voluptate maxime fuga sapiente ducimus fugit vitae.Magni voluptas recusandae suscipit necessitatibus dolores mollitia deserunt sint nihil libero.

function App() {
  return (
    <div className="App">
      <Container>
        <header>
          <Navigation />
        </header>
        <Row>
          <div className="secondNav">
            <h1> NEWS </h1>
            <div class="secondnav" id="myTopnav">
              <a href="#home" class="active">
                Home
              </a>
              <a id="secondnav">Home</a>
              <a id="secondnav">coronavirus</a>
              <a id="secondnav">News</a>
              <a id="secondnav">News</a>
              <a id="secondnav">News</a>
              <a id="secondnav">News</a>
              <a href="#about">Weather</a>
              <a href="#news">iPlayer</a>
              <a href="#contact">Sounds</a>
              <a href="#about">CBBC</a>
              <select href="#about">More</select>
              <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
        </Row>

        <Row>
          <Col md={8} sm={12}>
            <Row>
              <Col md={4}>
                <h1>LIVE</h1>
                <h2>Thousands of pupils getting GCSE results</h2>
              </Col>
              <Col md={8}>
                <img
                  className="headline-image"
                  id="flowers"
                  src={Flowers}
                  alt="flowers"
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <img id="flowers" src={Flowers} alt="flowers"></img>
                <p className="news-taster">
                  ducimus fugit vitae.Magni voluptas recusandae suscipit
                  necessitatibus dolores mollitia deserunt sint nihil libero.
                </p>
              </Col>
              <Col md={4}>
                <img id="flowers" src={Flowers} alt="flowers"></img>
                <p className="news-taster">
                  ducimus fugit vitae.Magni voluptas recusandae suscipit
                  necessitatibus dolores mollitia deserunt sint nihil libero.
                </p>
              </Col>
              <Col md={4}>
                <div id="greyBox"></div>
              </Col>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <Row>
              <Col md={6} sm={12}>
                <div>
                  <img id="rightside" src={Flowers} alt="flowers"></img>
                  <p>
                    <strong>Pupils get GCSEs as BTec results are pulled</strong>
                  </p>
                  <p>
                    recusandae suscipit necessitatibus dolores mollitia deserunt
                    sint nihil libero.
                  </p>
                </div>
                <div>
                  <img id="rightside" src={Flowers} alt="flowers"></img>
                  <p>
                    <strong>Russian opposition leader Navalny 'poisoned</strong>
                  </p>
                  <p>
                    recusandae suscipit necessitatibus dolores mollitia deserunt
                    sint nihil libero.
                  </p>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div id="contents-right">
                  <p>
                    <strong>Coronavirus:Morning update</strong>
                    <br></br>
                    <small>UK</small>
                  </p>
                </div>
                <div id="contents-right">
                  <p>
                    <strong>Coronavirus:Morning update</strong>
                    <br></br>
                    <small>UK</small>
                  </p>
                </div>
                <div id="contents-right">
                  <p>
                    <strong>Coronavirus:Morning update</strong>
                    <br></br>
                    <small>UK</small>
                  </p>
                </div>
                <div id="contents-right">
                  <p>
                    <strong>Coronavirus:Morning update</strong>
                    <br></br>
                    <small>UK</small>
                  </p>
                </div>
                <div id="contents-right">
                  <p>
                    <strong>Coronavirus:Morning update</strong>
                    <br></br>
                    <small>UK</small>
                  </p>
                </div>
                <div id="contents-right">
                  <p>
                    <strong>Coronavirus:Morning update</strong>
                    <br></br>
                    <small>UK</small>
                  </p>
                </div>
                <div id="contents-right">
                  <p>
                    <strong>Coronavirus:Morning update</strong>
                    <br></br>
                    <small>UK</small>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
