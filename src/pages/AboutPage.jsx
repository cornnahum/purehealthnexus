import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

function AboutPage() {
  return (
    <div className="home-page">
      <h1 className="home-title">Pure Health Nexus</h1>

      {/* custom-card */}
      <Card className="mb-3 custom-card h-100">
        <Row className="g-0 align-items-stretch h-100">
          <Col md={8} className="h-100 d-flex flex-column">
            <Card.Body className="flex-grow-1 d-flex flex-column">
              <Card.Title className="card-title">Antioxidants</Card.Title>
              <Card.Text>
                ‘Antioxidant’ is a buzzword we’ve heard time and again.
              </Card.Text>
              <Card.Text>
                However, our diets can often contain low levels...
              </Card.Text>
            </Card.Body>
          </Col>
          <Col md={4} className="h-100">
            <Card.Img
              src="https://via.placeholder.com/150"
              alt="Antioxidants"
              className="card-img h-100"
            />
          </Col>
        </Row>
      </Card>

      {/* Wrap all cards in a container to center them */}
      {/* 12 cards home */}
      <div className="cards-section container">
        <Row className="mb-4 justify-content-center g-3">
            <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4 justify-content-center">
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4 justify-content-center">
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="basic-card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutPage;
