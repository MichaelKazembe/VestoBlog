import React from 'react';
import { Button } from 'react-bootstrap'

const PrimaryButton = ({ children, onClick }) => {
    return (
        <Button variant="primary" onClick={onClick}>
            {children}
        </Button>
    );
};

export default PrimaryButton;