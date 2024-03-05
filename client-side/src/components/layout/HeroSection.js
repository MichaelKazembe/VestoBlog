import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import PrimaryButton from '../common/buttons/PrimaryButton';
import '../../assets/css/layouts/HeroSection.css';

const HeroSection = () => {
    return (
        <div className='Hero-section'>
            <Container>
                <div className='Hero-text-box'>
                    <Row>
                        <Col md={6} xl={8}>
                            <h1>Welcome to VestoBlog</h1>
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