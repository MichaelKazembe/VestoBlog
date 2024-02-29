//Contact.js
import React from 'react';
import Container from 'react-bootstrap/Container';

const Contact = () => {
    return (
        <Container className="p-3 my-5">
            <h1>Contact Us</h1>
            <p>
                Have a question or feedback? We'd love to hear from you! Feel free to reach out to us using the contact
                information below or fill out the form to send us a message.
            </p>
            <h3>Contact Information</h3>
            <ul>
                <li>Email: info@vestoblog.com</li>
                <li>Phone: +265994236798</li>
                <li>Address: 123 Main Street, Lagos, Malawi</li>
            </ul>
            <h3>Send Us a Message</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </Container>
    );
};

export default Contact;
