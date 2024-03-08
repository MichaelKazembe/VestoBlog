import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PrimaryButton from '../buttons/PrimaryButton';
import OutlinePrimaryButton from '../buttons/OutlinePrimaryButton';
import styles from '../../../assets/css/NavBar.module.css';

const NavBarLoggedOut = ({ onLogin, onSignup }) => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand as={NavLink} to="/" className='Brand-name'><h4>VestoBlog</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/articles" className={styles.navLink}>
              Articles
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>
              Contact
            </Nav.Link>
          </Nav>
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/loginPage" className={styles.navLink}>
                <OutlinePrimaryButton>Login</OutlinePrimaryButton>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/registerPage" className={styles.navLink}>
                <PrimaryButton>Register</PrimaryButton>
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLoggedOut;
