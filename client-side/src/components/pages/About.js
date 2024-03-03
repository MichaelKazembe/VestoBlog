// About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamProfiles from '../layout/TeamProfiles';

const About = () => {
  return (
    <>
    <section className="py-3 py-md-5 py-xl-8">
        <Container>
          <Row className="gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <Col xs={12} lg={6} xl={5}>
              <img className="img-fluid rounded" load="lazy" src="https://picsum.photos/id/200/600/400" alt="" />
            </Col>
            <Col xs={12} lg={6} xl={7}>
              <Row className="justify-content-xl-center">
                <Col xs={12} xl={11}>
                  <h2 className="h1 mb-3">Who Are We?</h2>
                  <p className="lead fs-4 text-secondary mb-3">
                  VestoBlog is a blog-style web application focused on providing valuable information and insights
                  into finance, investment, and stock market trends. Our goal is to help beginners and experts alike
                  navigate the complexities of the financial world and make informed investment decisions.
                  </p>
                  <p className="mb-5">
                  Our platform offers a range of features, including access to expert advice, tips, and market analysis,
                  as well as tools for building a diversified investment portfolio and managing risk. We aim to make
                  financial literacy accessible and engaging for everyone, with a user-friendly interface designed
                  specifically for young Africans.
                  </p>
                  {/* <Row className="gy-4 gy-md-0 gx-xxl-5X">
                    <Col xs={12} md={6}>
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <svg xmlns="http: www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-3">Versatile Brand</h4>
                          <p className="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <svg xmlns="http: www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-3">Digital Agency</h4>
                          <p className="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                        </div>
                      </div>
                    </Col>
                  </Row> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    </section>
    <TeamProfiles />
    </>
  );
};

export default About;
