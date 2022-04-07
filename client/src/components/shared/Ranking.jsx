import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

export default function Ranking(props) {
  const developer = props.developer;
  const position = props.position;
  const Circle = props.Circle;

  const winnerClass = {
    1: "bg-warning",
    2: "bg-silver",
    3: "bg-copper",
  };

  return (
    <>
      <ListGroup as="ul" variant="flush">
        <ListGroup.Item className="bg-dark" as="li">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Circle
                className={`ms-2 ${
                  winnerClass[position] ? winnerClass[position] : "bg-secondary"
                }`}
              >
                <span
                  className={position > 3 ? "text-white" : "text-dark-white"}
                >
                  {position}
                </span>
              </Circle>
              <img
                src={developer.image}
                className="rounded-circle ms-5"
                alt="dev pic"
              />
              <strong className="text-info ms-5">{developer.firstName}</strong>
              <strong className="text-info ms-2">{developer.lastName}</strong>
            </div>
            <Badge bg="secondary">{developer.country.toUpperCase()}</Badge>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
