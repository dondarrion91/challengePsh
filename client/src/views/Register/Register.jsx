import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { http } from "../../utils/axios";
import { Navigate } from "react-router-dom";

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 100%;
`;

export default function Register() {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const [errorObject, seterrorObject] = useState({
    message: "",
  });
  const [isLogged, setIsLogged] = useState(false);

  const registerUser = async () => {
    try {
      await http.post("/register", userData);

      seterrorObject({ message: "" });
      setIsLogged(true);
    } catch (error) {
      console.log(error)
      if (error.response)
        seterrorObject({ message: error.response.data.message });
    }
  };

  if (isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <Row>
        <Col>
          <ImageContainer className="mx-auto mt-5">
            <Image
              className="w-100 h-100"
              src={require("../../img/hackton.jpg")}
              alt="Pic Hackaton"
            />
          </ImageContainer>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="mt-5">
            <p className="text-center h2 mb-3">CREATE NEW ACCOUNT</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onInput={(event) =>
                  setuserData({ ...userData, email: event.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onInput={(event) =>
                  setuserData({ ...userData, password: event.target.value })
                }
              />
            </Form.Group>
            <Button variant="primary">
              <span className="text-dark-white" onClick={registerUser}>
                Register
              </span>
            </Button><br /><br />
            <Form.Text className="text-danger">
              { errorObject.message }
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
