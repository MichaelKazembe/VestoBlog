// SecondaryButton.js
import React from 'react';
import Button from 'react-bootstrap/Button';

const SecondaryButton = ({ children, onClick }) => {
    return (
        <Button variant="primary" onClick={onClick}>
        {children}
        </Button>
    );
};

export default SecondaryButton;