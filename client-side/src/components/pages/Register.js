import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', this.state);
            console.log('Registration successful');
        } catch (error) {
            console.error('Registration failed:', error.response.data);
        }
    };

    render() {
        return (
            <Container className='p-3 my-5 d-flex flex-column w-50 justify-contents-center'>
                <form onSubmit={this.handleSubmit}>
                    <h3 className="text-center">Sign Up</h3>

                    <div className="mb-3">
                        <label>First name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Last name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
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
        );
    }
}
