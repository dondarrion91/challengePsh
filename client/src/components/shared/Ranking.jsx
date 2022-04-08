import React from "react";
import { ListGroup, Badge, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

export default function Ranking(props) {
  const developer = props.developer;
  const position = props.position;
  const showPrize = props.showPrize;

  // Color classes fot the first three positions in the hackathon
  const winnerClass = {
    1: "bg-warning",
    2: "bg-silver",
    3: "bg-copper",
  };

  return (
    <>
      <ListGroup.Item className="bg-dark border-2" as="li">
        <Row className="d-flex align-items-center">
          <Col
            xs={6}
            sm={4}
            className="d-flex justify-content-between align-items-center my-4"
          >
            <Circle
              className={`ms-2 ${
                winnerClass[position] ? winnerClass[position] : "bg-secondary"
              }`}
            >
              <span className={position > 3 ? "text-white" : "text-dark-white"}>
                {position}
              </span>
            </Circle>
            <img
              src={developer.image}
              className="rounded-circle me-2"
              alt="dev pic"
            />
          </Col>
          <Col xs={6} sm={4} className="d-flex my-4">
            <strong className="text-info">
              {developer.firstName.toUpperCase()}
            </strong>
            <strong className="text-info ms-2">
              {developer.lastName.toUpperCase()}
            </strong>
          </Col>
          <Col xs={12} sm={4} className="my-4">
            <div
              className={`${
                showPrize ? "justify-content-between" : "justify-content-end"
              }`}
            >
              {showPrize ? (
                <>
                  <strong className="text-info my-2">
                    Total prize money:{" "}
                  </strong>
                  <strong className="text-warning ms-2 my-2">
                    {"$ " + developer.hackatonPoints}
                  </strong>
                </>
              ) : null}
              <Badge className="ms-3" bg="secondary">{developer.country.toUpperCase()}</Badge>
            </div>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
}
