import React, { useEffect, useState } from "react";
import { http } from "../../utils/axios";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Navigate } from "react-router-dom";

// Components
import Loader from "../../components/shared/Loader";
import Ranking from "../../components/shared/Ranking";

export default function WorldRanking() {
  const [developers, setDevelopers] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    const getHackathonList = async () => {
      try {
        const res = await http.get(
          "/developer?order=hackatonPoints:desc&limit=10"
        );
        setisLoaded(true);
        setDevelopers(res.data.data);
      } catch (error) {
        if (error.message.includes("401")) {
          setIsLogged(false);
        } else {
          setError(true);
        }
      }
    };

    getHackathonList();
  }, []);

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  if (!isLoaded || !developers.length) {
    if (error) {
      return (
        <p className="text-center text-muted mt-5">
          Oops! We got a problem showing the list... Please try again later!
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
              <ListGroup.Item className="bg-secondary">
                <span className="h1 text-dark-white">WORLD RANKING</span>
              </ListGroup.Item>
              {developers.map((developer, index) => (
                <Ranking
                  developer={developer}
                  position={index + 1}
                  showPrize={true}
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
