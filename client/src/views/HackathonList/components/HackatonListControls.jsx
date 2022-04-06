import React from "react";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function HackatonListControls(props) {
  const { search, setSearch } = props;

  return (
    <Row className="mt-3">
      <Col md={3}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control
            value={search.name}
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="basic-addon1"
            onChange={(event) =>
              setSearch({ ...search, name: event.target.value })
            }
          />
        </InputGroup>
      </Col>
      <Col md={3}>
        <input
          className="form-control"
          type="date"
          value={search.date}
          onChange={(event) =>
            setSearch({ ...search, name: event.target.value })
          }
        />
      </Col>
    </Row>
  );
}