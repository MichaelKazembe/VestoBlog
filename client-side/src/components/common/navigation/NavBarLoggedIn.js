import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import OutlinePrimaryButton from '../buttons/OutlinePrimaryButton';
import PrimaryButton from '../buttons/PrimaryButton';
import styles from '../../../assets/css/NavBar.module.css';

const NavBarLoggedIn = ({ onLogout, user }) => {
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
          {/* <Nav className="ml-auto">
            <Nav.Link onClick={onLogout} className={styles.navLink}>
              <OutlinePrimaryButton>Logout</OutlinePrimaryButton>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile" className={styles.navLink}>
              <img src={user.avatar} alt="User Avatar" style={{ width: '30px', borderRadius: '50%' }} />
            </Nav.Link> */}
          
          <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/logoutPage" className={styles.navLink}>
                <PrimaryButton>Login</PrimaryButton>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/unregister" className={styles.navLink}>
                <OutlinePrimaryButton>unregisterRegister</OutlinePrimaryButton>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLoggedIn;
