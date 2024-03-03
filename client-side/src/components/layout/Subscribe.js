import React from 'react';
import { Container } from 'react-bootstrap';

const Subscribe = () => {
  return (
    <section className="py-3 py-md-5 py-xl-10 bg-light">
      <Container>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="display-6 mb-4 mb-md-5 mb-xxl-6 text-center">Sign up for our newsletter and never miss a thing.</h2>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
              <form className="row gy-3 gy-lg-0 gx-lg-2 justify-content-center">
                <div className="col-12 col-lg-8">
                  <label htmlFor="email-newsletter-component" className="visually-hidden">Email Address</label>
                  <input type="email" className="form-control bsb-form-control-3xl" id="email-newsletter-component" value="" placeholder="Email Address" aria-label="email-newsletter-component" aria-describedby="email-newsletter-help" required />
                  <div id="email-newsletter-help" className="form-text text-center text-lg-start">We'll never share your email with anyone else.</div>
                </div>
                <div className="col-12 col-lg-3 text-center text-lg-start">
                  <button type="submit" className="btn btn-primary bsb-btn-3xl">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
