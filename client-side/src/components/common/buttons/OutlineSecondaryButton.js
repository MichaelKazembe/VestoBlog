// OutlineSecondaryButton.js
import React from 'react';
import Button from 'react-bootstrap/Button';

const OutlineSecondaryButton = ({ children, onClick }) => {
    return (
        <Button variant="Outline-Secondary" onClick={onClick}>
        {children}
        </Button>
    );
};

export default OutlineSecondaryButton;
