import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../assets/css/Navigation/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="bg-light py-3 py-md-5 py-xl-8 border-top border-light-subtle">
                    <Row className="gy-3 gy-md-5 gy-xl-0 align-items-sm-center">
                        <Col xs={12} sm={6} xl={3} className="order-0 order-xl-0">
                            <div className="footer-logo-wrapper text-center text-sm-start">
                                <a href="/Home">
                                   <h4>VestoBlog</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={12} xl={6} className="order-2 order-xl-1">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link link-secondary px-2 px-md-3" href="/Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-secondary px-2 px-md-3" href="/Articles">Articles</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-secondary px-2 px-md-3" href="/About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-secondary px-2 px-md-3" href="/Contact">Contact</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} xl={3} className="order-1 order-xl-2">
                            <ul className="nav justify-content-center justify-content-sm-end">
                                <li className="nav-item">
                                    <a className="nav-link link-dark px-3" href="#!">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                            ...
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-dark px-3" href="#!">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                            ...
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-dark px-3" href="#!">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                            ...
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-dark px-3" href="#!">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            ...
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                <div className="bg-light py-3 py-md-5 border-top border-light-subtle">
                    <div className="container overflow-hidden">
                        <div className="row">
                            <div className="col">
                                <div className="footer-copyright-wrapper text-center">
                                    &copy; 2024. All Rights Reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
