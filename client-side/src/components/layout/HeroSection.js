import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import PrimaryButton from '../common/buttons/PrimaryButton';
import '../../assets/css/layouts/HeroSection.css';

const HeroSection = () => {
	const [display, setDisplay] = useState("Welcome to Vestoblog");

	useEffect(() => {
		fetch("/api/home").then(res => res.json()).then(data => {
			setDisplay(data.msg);
		});
	}, []);

    return (
        <div className='Hero-section'>
            <Container>
                <div className='Hero-text-box'>
                    <Row>
                        <Col md={6}>
                            <h1>{display}</h1>
                            <p>For Latest News & Tips About Finance, Investments</p>
                            <PrimaryButton>Learn More</PrimaryButton>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
