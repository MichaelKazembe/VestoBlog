//About.js
import React from 'react';
import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <Container className="p-3 my-5">
            <h1>About VestoBlog</h1>
            <p>
                VestoBlog is a blog-style web application focused on providing valuable information and insights
                into finance, investment, and stock market trends. Our goal is to help beginners and experts alike
                navigate the complexities of the financial world and make informed investment decisions.
            </p>
            <p>
                Our platform offers a range of features, including access to expert advice, tips, and market analysis,
                as well as tools for building a diversified investment portfolio and managing risk. We aim to make
                financial literacy accessible and engaging for everyone, with a user-friendly interface designed
                specifically for young Africans.
            </p>
            <p>
                Join us on VestoBlog and take your first step towards financial empowerment!
            </p>
        </Container>
    );
};

export default About;
