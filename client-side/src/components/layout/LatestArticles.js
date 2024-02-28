//LatestArticles.js
import React from 'react';
import { Container, Card, Row, Col, Button} from 'react-bootstrap';

const LatestArticles = () => {
  return (
    <Container>
      <Row className="my-5 px-5 text-center">
        <Col>
          <h4>Latest Articles</h4>
          <hr/>
        </Col>
      </Row>
      {/* Article Cards */}
      <Row className="my-5 px-5">
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/id/2/320/200" />
            <Card.Body>
              <Card.Title>Blog Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.75rem' }}>
              <em>By Peter Smith</em>
              </Card.Subtitle>
              <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="outline-primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/id/1/320/200" />
            <Card.Body>
              <Card.Title>Blog Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.75rem' }}>
              <em>By Jane Doe</em></Card.Subtitle>
              <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="outline-primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/id/13/320/200" />
            <Card.Body>
              <Card.Title>Blog Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.75rem' }}>
              <em>By John Smith</em></Card.Subtitle>
              <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="outline-primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );

};

export default LatestArticles;