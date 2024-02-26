//PrimaryButton.js
import React from 'react';
import Button from 'react-bootstrap/Button';

const PrimaryButton = ({ children, onClick }) => {
    return (
        <Button variant="primary" onClick={onClick}>
        {children}
        </Button>
    );
};

export default PrimaryButton;
