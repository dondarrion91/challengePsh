import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <>
      <Spinner
        className="d-block m-auto mt-5"
        animation="grow"
        variant="primary"
      />
      <p className="text-center text-muted mt-2">Loading...</p>
    </>
  );
}
