//News

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const News = () => {
  return (
    <section className="py-3 py-md-5">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={10} lg={8} xl={7} xxl={6}>
            <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">Our News</h3>
            <h2 className="display-6 mb-4 mb-md-5 text-center">Here is our blog's latest company news about regularly publishing fresh content.</h2>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </Col>
        </Row>
      </Container>

      <Container className="overflow-hidden">
        <Row className="gy-4 gy-lg-0">
          <Col lg={4}>
            <Card className="border-0">
              <Card.Img variant="top" src="https://picsum.photos/id/22/320/200" />
              <Card.Body className="border bg-white p-4">
                <div className="entry-header mb-3">
                  <ul className="entry-meta list-unstyled d-flex mb-2">
                    <li>
                      <a className="link-primary text-decoration-none" href="#!">Stock Market</a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4 mb-0">
                    <a className="link-dark text-decoration-none" href="#!">Overcoming Challenges to Make a Living Online</a>
                  </h2>
                </div>
                <p className="card-text entry-summary text-secondary">
                  Making money online is attainable. However, even if the processes are simple, you may still need help with issues.
                </p>
              </Card.Body>
              <Card.Footer className="border border-top-0 bg-white p-4">
                <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                  <li>
                    <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      <span className="ms-2 fs-7">18 Feb 2024</span>
                    </a>
                  </li>
                  <li>
                    <span className="px-3">&bull;</span>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-3.317-.707.997.997 0 0 0-1.21.313 1 1 0 0 0 .313 1.209z" />
                      </svg>
                      <span className="ms-2 fs-7">3 Comments</span>
                    </a>
                  </li>
                </ul>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0">
              <Card.Img variant="top" src="https://picsum.photos/id/23/320/200" />
              <Card.Body className="border bg-white p-4">
                <div className="entry-header mb-3">
                  <ul className="entry-meta list-unstyled d-flex mb-2">
                    <li>
                      <a className="link-primary text-decoration-none" href="#!">Business</a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4 mb-0">
                    <a className="link-dark text-decoration-none" href="#!">Overcoming Challenges to Make a Living Online</a>
                  </h2>
                </div>
                <p className="card-text entry-summary text-secondary">
                  Making money online is attainable. However, even if the processes are simple, you may still need help with issues.
                </p>
              </Card.Body>
              <Card.Footer className="border border-top-0 bg-white p-4">
                <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                  <li>
                    <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      <span className="ms-2 fs-7">2 Jan 2024</span>
                    </a>
                  </li>
                  <li>
                    <span className="px-3">&bull;</span>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-3.317-.707.997.997 0 0 0-1.21.313 1 1 0 0 0 .313 1.209z" />
                      </svg>
                      <span className="ms-2 fs-7">3 Comments</span>
                    </a>
                  </li>
                </ul>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0">
              <Card.Img variant="top" src="https://picsum.photos/id/24/320/200" />
              <Card.Body className="border bg-white p-4">
                <div className="entry-header mb-3">
                  <ul className="entry-meta list-unstyled d-flex mb-2">
                    <li>
                      <a className="link-primary text-decoration-none" href="#!">Finance</a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4 mb-0">
                    <a className="link-dark text-decoration-none" href="#!">Overcoming Challenges to Make a Living Online</a>
                  </h2>
                </div>
                <p className="card-text entry-summary text-secondary">
                  Making money online is attainable. However, even if the processes are simple, you may still need help with issues.
                </p>
              </Card.Body>
              <Card.Footer className="border border-top-0 bg-white p-4">
                <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                  <li>
                    <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      <span className="ms-2 fs-7">17 Feb 2024</span>
                    </a>
                  </li>
                  <li>
                    <span className="px-3">&bull;</span>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-3.317-.707.997.997 0 0 0-1.21.313 1 1 0 0 0 .313 1.209z" />
                      </svg>
                      <span className="ms-2 fs-7">10 Comments</span>
                    </a>
                  </li>
                </ul>
              </Card.Footer>
            </Card>
          </Col>            
          {/* Repeat the above Card component for other blog posts */}
        </Row>
      </Container>
    </section>
  );
};

export default News;