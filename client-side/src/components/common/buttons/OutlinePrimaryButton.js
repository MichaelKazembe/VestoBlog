// OutlinePrimaryButton.js
import React from 'react';
import Button from 'react-bootstrap/Button';

const OutlinePrimaryButton = ({ children, onClick }) => {
    return (
        <Button variant="outline-primary" onClick={onClick}>
        {children}
        </Button>
    );
};

export default OutlinePrimaryButton;