import React from "react";
import { Col, Row } from "react-bootstrap";
import "../grids.css";
import Flowers from "../assets/images/flowers.jpeg";
// download font from google - put folder that downloaded in a separate folder in src called "fonts".
// Import the "regular" file of folder into app.js or index.js - something which is in some way connected to the css file you want to link the font to.
// @font-face {
// font - family: "BalooTamma2";
// src: local("BalooTamma2"),
//     url(./fonts/BalooTamma2 - Regular.ttf) format("truetype");
// } --- in grid.css

// Then you can simply say: font-family: BalooTamma2 and it will show.

// import { Table, Th, Tr, Tbody } from "react-bootstrap";

// https://picsum.photos/200/300

// .container has a max width pixel value, whereas.container - fluid is max - width 100 %. (Container fluid covers the whole screen but container on it's own maintains a border - has a pixel limit so does not fill the whole screen).

export default class Grids extends React.Component {
  render() {
    return (
      <>
        <Container-fluid>
          <Row>
            <Col id="left" md={6} Gutters>
              <h1 className="leftTitle">Hello first side.</h1>
              <Row>
                <Col sm={12} md={4}>
                  <img
                    className="images"
                    src={"https://picsum.photos/200"}
                    alt="pic"
                  />
                </Col>
                <Col sm={12} md={4}>
                  <img
                    className="images"
                    src={"https://picsum.photos/200"}
                    alt="pic"
                  />
                </Col>
                <Col sm={12} md={4}>
                  <img src={"https://picsum.photos/200"} alt="pic" />
                </Col>
              </Row>
            </Col>
            <Col id="right" md={6} sm={12}>
              <Row>
                <Col md={6}>
                  <p className="ml-auto">
                    minima, veniam, assumenda, vel officia expedita? Minima
                    repellendus a autem neque, aspernatur tempore libero ducimus
                    distinctio, nobis vitae, doloribus fuga magnam consequuntur.
                    Explicabo amet officiis reprehenderit sit nesciunt nam!
                    Omnis, deleniti nemo sit ipsa, quaerat amet quas inventore
                    earum laborum asperiores maiores fugiat voluptatibus. Minus
                    officiis laborum rem in dolores et, nihil quos asperiores
                    illum distinctio beatae aspernatur nam, ad itaque magni
                    delectus minima ipsam veniam aperiam, dolorum repudiandae
                    sit. Eligendi vero cum, at maxime consequatur natus soluta
                    odit fugiat doloribus veritatis praesentium magnam ea
                    voluptatibus, alias beatae facilis unde!
                  </p>
                </Col>
                <Col md={6}>
                  <img id="flowers" src={Flowers} alt="flowers"></img>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container-fluid>
      </>
    );
  }
}
