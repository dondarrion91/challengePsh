import React from "react";
import { Form, Button } from "react-bootstrap";

export default function AuthForm({
  userData,
  setuserData,
  registerUser,
  errorObject,
  type,
}) {
  return (
    <Form className="mt-5">
      <p className="text-center h2 mb-3">
        {type === "register" ? "CREATE NEW ACCOUNT" : "LOGIN"}
      </p>
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
          {type === "register" ? "Register" : "Login"}
        </span>
      </Button>
      <br />
      <br />
      <Form.Text className="text-danger">{errorObject.message}</Form.Text>
    </Form>
  );
}
