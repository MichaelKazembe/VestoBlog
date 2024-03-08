import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import '../../assets/css/layouts/HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
/*
	const [display, setDisplay] = useState("Welcome to Vestoblog");

	useEffect(() => {
		fetch("/api/home").then(res => res.json()).then(data => {
			setDisplay(data.msg);
		});
	}, []);
*/
    return (
        <div className='Hero-section'>
            <Container>
                <div className='Hero-text-box'>
                    <Row>
                        <Col md={6} xl={8}>
                            <h1>Welcome to VestoBlog</h1>
                            <p>For Latest News & Tips About Finance, Investments</p>
                            <Button as={Link} to="/About">Learn More</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        
        </div>
    );
};

export default HeroSection;
