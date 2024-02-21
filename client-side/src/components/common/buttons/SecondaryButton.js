// SecondaryButton.js
import React from 'react';
import { Button } from 'react-bootstrap'

const SecondaryButton = ({ children, onClick }) => {
    return (
        <Button variant="secondary" onClick={onClick}>
            {children}
        </Button>
    );
};

export default SecondaryButton;