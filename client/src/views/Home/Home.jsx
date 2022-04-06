import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Components
import HomeIntro from "./components/HomeIntro";

import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
`;

const Img = styled.img`
  width: 80%;
  height: 100%;
  object-fit: scale-down;
`;

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
