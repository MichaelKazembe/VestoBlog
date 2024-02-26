//NotFound.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PrimaryButton from '../common/buttons/PrimaryButton';

const NotFound = () => {
	return (
		<Container className="d-flex align-items-center justify-content-center vh-100">
		    <Row>
		        <Col className="text-center">
		            <h1 className="display-1 fw-bold">404</h1>
		            <p className="fs-3">
		              <span className="text-danger">Oops!</span> Page not found.
		            </p>
		            <p className="lead">
		              The page you’re looking for doesn’t exist.
		            </p>
					<Nav className="justify-content-center">
						<Nav.Link as={NavLink} to="/">
							<PrimaryButton>Go To Home</PrimaryButton>
						</Nav.Link>
					</Nav>
		        </Col>
		    </Row>
		</Container>
	);
};

export default NotFound;
