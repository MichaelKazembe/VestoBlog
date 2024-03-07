import React from 'react';
import { Container } from 'react-bootstrap';

const TeamProfile = () => {
    return (
        <section className="py-3 py-md-5 py-xl-8">
            <Container>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">Our Team</h2>
                            <p className="display-5 mb-4 mb-md-5 text-center">With Our Team, you can expect personalized attention and engaging designs.</p>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </div>
                    </div>
                </div>

                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-lg-0">
                        <div className="col-12 col-lg-4">
                            <div className="card border-0">
                                <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                    <a href="#!">
                                        <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/team-img-1.jpg" alt="" />
                                    </a>
                                    <figcaption>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                        <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                                    </figcaption>
                                </figure>
                                <div className="card-body border bg-white p-4">
                                    <h2 className="card-title h4 fw-bold mb-3">Oluwafemi Awodele</h2>
                                    <p className="card-text text-secondary">Sed placerat luctus mi, mollis mattis nisl accumsan mollis.</p>
                                </div>
                                <div className="card-footer border border-top-0 bg-white p-4">
                                    <ul className="nav mb-0 bsb-nav-sep">
                                        <li className="nav-item text-secondary">
                                            <a className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center" href="#!">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-lightbulb text-primary" viewBox="0 0 16 16">
                                                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                                </svg>
                                                <span className="ms-2 fs-6">Backend Engineer</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card border-0">
                                <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                    <a href="#!">
                                        <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/team-img-1.jpg" alt="" />
                                    </a>
                                    <figcaption>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                        <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                                    </figcaption>
                                </figure>
                                <div className="card-body border bg-white p-4">
                                    <h2 className="card-title h4 fw-bold mb-3">Michael Kazembe</h2>
                                    <p className="card-text text-secondary">Sed placerat luctus mi, mollis mattis nisl accumsan mollis.</p>
                                </div>
                                <div className="card-footer border border-top-0 bg-white p-4">
                                    <ul className="nav mb-0 bsb-nav-sep">
                                        <li className="nav-item text-secondary">
                                            <a className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center" href="#!">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-lightbulb text-primary" viewBox="0 0 16 16">
                                                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                                </svg>
                                                <span className="ms-2 fs-6">Frontend Engineer</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card border-0">
                                <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                    <a href="#!">
                                        <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/team-img-1.jpg" alt="" />
                                    </a>
                                    <figcaption>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                        <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                                    </figcaption>
                                </figure>
                                <div className="card-body border bg-white p-4">
                                    <h2 className="card-title h4 fw-bold mb-3">Nnena Kehinde</h2>
                                    <p className="card-text text-secondary">Sed placerat luctus mi, mollis mattis nisl accumsan mollis.</p>
                                </div>
                                <div className="card-footer border border-top-0 bg-white p-4">
                                    <ul className="nav mb-0 bsb-nav-sep">
                                        <li className="nav-item text-secondary">
                                            <a className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center" href="#!">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-lightbulb text-primary" viewBox="0 0 16 16">
                                                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                                </svg>
                                                <span className="ms-2 fs-6">Backend Engineer</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TeamProfile;
