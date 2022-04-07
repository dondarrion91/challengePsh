import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { http } from "../../utils/axios";
import { filterHackathons, makeDate } from "./helper";
import { Link, Navigate } from "react-router-dom";

// Components
import HackatonListControls from "./components/HackatonListControls";
import Loader from "../../components/shared/Loader";

export default function HackatonList() {
  const [hackathonList, setHackathonList] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    const getHackathonList = async () => {
      try {
        const res = await http.get("/hackaton");
        setisLoaded(true);
        setHackathonList(filterHackathons(res.data.data, search));
      } catch (error) {
        if (error.message.includes("401")) {
          setIsLogged(false);
        } else {
          setError(true);
        }
      }
    };

    getHackathonList();
  }, [search]);

  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  if (!isLoaded) {
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
    <Container className="dark-white">
      <HackatonListControls search={search} setSearch={setSearch} />
      {!hackathonList.length ? (
        <p className="text-center text-muted h4">
          No results for <strong>"{search}"</strong>
        </p>
      ) : (
        <Row>
          {hackathonList.map((hackathon, index) => (
            <Col md="6" key={index}>
              <Card bg="dark" className="mt-3">
                <Card.Body>
                  <Card.Title className="text-white">
                    {hackathon.name}
                  </Card.Title>
                  <Card.Text className="text-white">
                    {hackathon.place}
                  </Card.Text>
                  <Card.Text className="text-white">
                    {makeDate(hackathon.date)}
                  </Card.Text>
                  <Link
                    className="no-underline text-white btn btn-secondary"
                    to={`/hackathon?id=${hackathon.id}`}
                  >
                    View hackathon
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
