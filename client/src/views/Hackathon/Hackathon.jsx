import React, { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
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
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    const getHackaton = async () => {
      try {
        const res = await http.get(`/hackaton${search}`);
        setDevelopers(res.data.data[0].Ranking.Developers);
        setHackaton(res.data.data[0]);
      } catch (error) {
        if (error.message.includes("401")) {
          setIsLogged(false);
        } else {
          setError(true);
        }
      }
    };

    getHackaton();
  }, [search]);

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  if (!hackaton.name || !developers.length) {
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
            <ListGroup as="ul" variant="flush">
              <ListGroup.Item className="bg-secondary mt-5">
                <span className="h1 text-dark-white">{hackaton.name.toUpperCase()} TOP 10 DEVELOPERS</span>
              </ListGroup.Item>
              {developers.map((developer, index) => (
                <Ranking
                  developer={developer}
                  position={index + 1}
                  key={index}
                  showPrize={false}
                />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
