import React from "react";
import { Button } from "react-bootstrap";
import intro from "../intro.json";

export default function HomeIntro() {
  return (
    <div>
      <span className="text-muted fw-bold">WORLD</span>
      <h1 className="text-primary fw-bolder">HACKATHON</h1>

      <p className="text-muted">{intro.home.description}</p>

      <Button variant="primary">
        <span className="text-white fw-bolder">Explore</span>
      </Button>
    </div>
  );
}
