//NavBar.js
// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import PrimaryButton from '../buttons/PrimaryButton';
// import OutlinePrimaryButton from '../buttons/OutlinePrimaryButton';
// import styles from '../../../assets/css/NavBar.module.css';

// const NavBar = () => {
//     return (
//         <Navbar bg="light" expand="lg" className={styles.navbar}>
//         <Container className={styles.navbarContainer}>
//             <Navbar.Brand as={NavLink} to="/" className='Brand-name'><h4>VestoBlog</h4></Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//             <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//                 <Nav.Link as={NavLink} to="/" exact ClassName={styles.navLink}>
//                 Home
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/articles" ClassName={styles.navLink}>
//                 Articles
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/about" ClassName={styles.navLink}>
//                 About
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/contact" ClassName={styles.navLink}>
//                 Contact
//                 </Nav.Link>
//             </Nav>
//             <Nav className="ml-auto">
//                 <Nav.Link as={NavLink} to="/loginPage" ClassName={styles.navLink}>
//                 <OutlinePrimaryButton>Login</OutlinePrimaryButton>
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/registerPage" ClassName={styles.navLink}>
//                 <PrimaryButton>Register</PrimaryButton>
//                 </Nav.Link>
//             </Nav>
//             </Navbar.Collapse>
//         </Container>
//         </Navbar>
//     );
// };

// export default NavBar;


// NavBar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { isLoggedIn, logout } from '../../utils/auth'; 
import PrimaryButton from '../buttons/PrimaryButton';
import OutlinePrimaryButton from '../buttons/OutlinePrimaryButton';
import styles from '../../../assets/css/NavBar.module.css';

const NavBar = () => {

    const handleLogout = () => {
        logout();
        window.location.href = '/logout'; // Redirect to the logout page
    };

    return (
        <Navbar bg="light" expand="lg" className={styles.navbar}>
        <Container className={styles.navbarContainer}>
            <Navbar.Brand as={NavLink} to="/" className='Brand-name'><h4>VestoBlog</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" exact ClassName={styles.navLink}>
                Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/articles" ClassName={styles.navLink}>
                Articles
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" ClassName={styles.navLink}>
                About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact" ClassName={styles.navLink}>
                Contact
                </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                {isLoggedIn() ? (
                    <>
                        <Nav.Link as={NavLink} to="/logout" ClassName={styles.navLink} onClick={handleLogout}>
                            <PrimaryButton>Logout</PrimaryButton>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/unregister" ClassName={styles.navLink}>
                            <OutlinePrimaryButton>Unregister</OutlinePrimaryButton>
                        </Nav.Link>
                    </>
                ) : (
                    <>
                        <Nav.Link as={NavLink} to="/loginPage" ClassName={styles.navLink}>
                            <OutlinePrimaryButton>Login</OutlinePrimaryButton>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/registerPage" ClassName={styles.navLink}>
                            <PrimaryButton>Register</PrimaryButton>
                        </Nav.Link>
                    </>
                )}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;

