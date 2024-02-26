import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../assets/css/Navigation/Footer.css';

const Footer = () => {
    return (
        <footer className='mt-5'>
            <Container>
                <Row className='Rows'>
                    <Col md={6}>
                        <h5>About VestoBlog</h5>
                        <p>VestoBlog is a Blog-style Web Application</p>
                    </Col>
                    <Col md={6}>
                        <h5>Quick Links</h5>
                        <ul className='Footer-links'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/articles'>Articles</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/contact'>Contact</a></li>
                        </ul>
                    </Col>

                </Row>
                <hr />
                    <p className='Bottom-footer-text text-center'>2024 VESTOBLOG. All rights Reserved</p>
            </Container>

        </footer>
    );
};

export default Footer;