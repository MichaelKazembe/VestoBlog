//LogoutPage.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const LogoutPage = () => {

    return (
        <div className='text-center p-3'>
            <p className="mb-4">You have been logged out!</p>
            <div className="ml-auto">
                <NavLink to="/" className="btn btn-primary mx-2">
                    <Button variant="primary">Go To Home</Button>
                </NavLink>
                <NavLink to="/loginPage" className="btn btn-primary mx-2">
                    <Button variant="primary">Login Again</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default LogoutPage;

