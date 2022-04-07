import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { http } from "../../utils/axios";
import { Navigate } from "react-router-dom";

// Components
import AuthForm from "../../components/shared/AuthForm";

// styles
import { ImageContainer, Image } from "./style/styled-components";

export default function Register({ type }) {
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
      await http.post(`/${type}`, userData);

      seterrorObject({ message: "" });
      setIsLogged(true);
    } catch (error) {
      console.log(error);
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
          <AuthForm
            userData={userData}
            setuserData={setuserData}
            registerUser={registerUser}
            errorObject={errorObject}
            type={type}
          />
        </Col>
      </Row>
    </Container>
  );
}
