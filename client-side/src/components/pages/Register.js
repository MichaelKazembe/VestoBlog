//Register.js
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class SignUp extends Component {
    render() {
        return (
            <Container className='p-3 my-5 d-flex flex-column w-50 justify-contents-center'>
            <form>
                <h3 className="text-center">Sign Up</h3>

                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right pt-2">
                    Already registered <a href="/login">login?</a>
                </p>
            </form>
            </Container>
        )
    }
}
