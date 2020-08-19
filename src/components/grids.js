import React from "react";
import { Col, Row } from "react-bootstrap";
import "../grids.css";
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
            <Col id="right" md={6}>
              <Row>
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
                <Col sm={12} md={4}>
                  <img src={"https://picsum.photos/200"} alt="pic" />
                </Col>
              </Row>

              <h1 className="rightTitle">Hello second side.</h1>
              <Row>
                <Col className="Col1" sm={1}></Col>
                <Col className="Col1" sm={1}></Col>
                <Col className="Col1" sm={2}></Col>
                <Col className="Col2" sm={2}></Col>
                <Col className="Col1" sm={2}></Col>
                <Col className="Col1" sm={1}></Col>
                <Col className="Col2" sm={1}></Col>
                <Col className="Col1" sm={1}></Col>
              </Row>
            </Col>
          </Row>
        </Container-fluid>
      </>
    );
  }
}
