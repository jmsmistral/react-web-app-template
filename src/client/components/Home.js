import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';


const Home = () => (
  <div className="home-page">

    <Container className="home-page-large-screen">
      <Row className="h-100">
        <Col xs={12} className="align-self-center">
        <h1 className="banner__title fadein-banner">Welcome to this sample react web app template!</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
