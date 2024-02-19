import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from '../../assets/css/NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className={styles.navbar}>
        <Container className={styles.navbarContainer}>
            <Navbar.Brand as={NavLink} to="/">VestoBlog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" exact ClassName={styles.navLink}>
                Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" ClassName={styles.navLink}>
                About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact" ClassName={styles.navLink}>
                Contact
                </Nav.Link>
                <Nav.Link as={NavLink} to="/blog" ClassName={styles.navLink}>
                Blog
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;
