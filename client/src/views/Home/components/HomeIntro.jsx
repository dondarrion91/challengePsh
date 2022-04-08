import React from "react";
import { Link } from "react-router-dom";
import intro from "../intro.json";

export default function HomeIntro() {
  return (
    <div>
      <span className="text-muted fw-bold">WORLD</span>
      <h1 className="text-primary fw-bolder">HACKATHON</h1>

      <p className="text-muted">{intro.home.description}</p>

      <Link className="btn btn-primary" to="/hackathon-list">
        <span className="text-white fw-bolder">Explore</span>
      </Link>
    </div>
  );
}
