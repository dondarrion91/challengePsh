import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { http } from "../../utils/axios";

// Components
import Ranking from "../../components/shared/Ranking";
import Loader from "../../components/shared/Loader";

export default function Hackaton() {
  const { search } = useLocation();
  const [developers, setDevelopers] = useState([]);
  const [hackaton, setHackaton] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const getHackaton = async () => {
      const res = await http.get(`/hackaton${search}`);

      if (res.data.code === 200) {
        setDevelopers(res.data.data[0].Ranking.Developers);
        setHackaton(res.data.data[0]);
      } else {
        setError(true);
      }
    };

    getHackaton();
  }, [search]);

  if (!hackaton.name) {
    if (error) {
      return (
        <p className="text-center text-muted mt-5">
          Oops! We got a problem showing the developers ranking... Please try
          again later!
        </p>
      );
    }

    return <Loader />;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-4 text-center" md={{ span: 10, offset: 1 }}>
            <span className="h1 text-secondary">
              {hackaton.name.toUpperCase()}
            </span>
            <ListGroup as="ul" variant="flush">
              <ListGroup.Item className="bg-secondary mt-5">
                <span className="h1 text-dark-white">RANKING</span>
              </ListGroup.Item>
              {developers.map((developer, index) => (
                <Ranking
                  developer={developer}
                  position={index + 1}
                  key={index}
                />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
