import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Components
import HomeIntro from "./components/HomeIntro";

// Styles
import { Wrapper, Img } from "./style/styled-components";

export default function Home() {
  return (
    <Wrapper className="dark-white">
      <Container className="h-100 d-flex">
        <Row>
          <Col className="d-flex align-items-center">
            <HomeIntro />
          </Col>
          <Col className="d-flex align-items-center">
            <div className="text-center">
              <Img
                src={require("../../img/cloud.png")}
                alt="link to hackaton list"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
