//Unregister.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PrimaryButton from '../common/buttons/PrimaryButton';

const Unregister = () => {
	return (
		<Container className="d-flex align-items-center justify-content-center vh-100">
		    <Row>
		        <Col className="text-center">
		            <h1 className="display-1 fw-bold">Goodbye!</h1>
		            <p className="fs-3">
		              <span className="text-danger">Saddd</span> To see you leave.
		            </p>
		            <p className="lead">
		              We Hope this blog helped you.
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

export default Unregister;
