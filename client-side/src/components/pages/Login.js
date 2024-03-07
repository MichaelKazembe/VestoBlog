import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }
  };

  return (
    <Container className="p-3 my-5 d-flex flex-column w-50 justify-contents-center">
      <Form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="/home">password?</a>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
