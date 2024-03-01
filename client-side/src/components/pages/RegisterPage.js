import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const registerUser = () => {
        if (!firstname || !lastname || !email || !password) {
            console.error("No field can be empty");
            alert("No field can be empty")
            return;
        }

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "password": password
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            localStorage.setItem('access_token', data.access_token);
            navigate("/");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Registration failed");
        });
    };

    let imgs = [
        'https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg',
    ];

    return (
        <div>
            <div className="container h-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Create Your Account</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} id="form3Example7" className="form-control form-control-lg" placeholder="Enter Firstname" />
                                    <label className="form-label" htmlFor="form3Example3">Firstname</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} id="form3Example8" className="form-control form-control-lg" placeholder="Enter Lastname" />
                                    <label className="form-label" htmlFor="form3Example3">Lastname</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={registerUser} >Sign Up</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <a href="/login" className="link-danger">Login</a></p>
                                </div>

                            </form>
                        </div>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={imgs[0]} className="img-fluid" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
