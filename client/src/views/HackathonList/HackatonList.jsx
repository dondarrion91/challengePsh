import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { http } from "../../utils/axios";
import moment from "moment";

// Components
import HackatonListControls from "./components/HackatonListControls";

export default function HackatonList() {
  const [hackathonList, setHackathonList] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [search, setSearch] = useState({
    name: "",
    date: "",
  });

  useEffect(() => {
    const getHackathonList = async () => {
      const res = await http.get("/hackaton");

      setisLoaded(true);
      setHackathonList(res.data.data);
    };

    getHackathonList();
  }, []);

  if (!isLoaded) {
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

  return (
    <Container className="dark-white">
      <HackatonListControls search={search} setSearch={setSearch} />
      <Row>
        {hackathonList.map((hackathon, index) => (
          <Col md="6" key={index}>
            <Card bg="dark" className="mt-3">
              <Card.Body>
                <Card.Title className="text-white">{hackathon.name}</Card.Title>
                <Card.Text className="text-white">{hackathon.place}</Card.Text>
                <Card.Text className="text-white">
                  {moment(hackathon.date).format("LLLL")}
                </Card.Text>
                <Button variant="secondary">View hackathon</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
