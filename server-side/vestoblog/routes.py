#!/usr/bin/env python3
""" Defines routes and view functions for the vestoblog app """
from vestoblog import app, db, jwt
from flask import render_template, request, jsonify
from vestoblog.models import User, Post
from flask_jwt_extended import create_access_token, set_access_cookies, get_jwt
from flask_jwt_extended import jwt_required, verify_jwt_in_request, current_user
from flask_jwt_extended import get_jwt_identity, unset_jwt_cookies
from datetime import datetime, timedelta


# Takes a User object is passed in as the identity when creating JWTs
# and converts it to a JSON serializable format.
@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id


# Loads a User object from database whenever a protected route is accessed if
# lookup successful, or None if the lookup failed for any reason.
@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()


@app.after_request
def refresh_expiring_jwts(response):
    """ Refresh any token that is within 9 minutes of expiring """
    try:
        exp_time = get_jwt()["exp"]
        present_time = datetime.utcnow()
        target_ref_time = datetime.timestamp(present_time + timedelta(minutes=10))
        if target_ref_time > exp_time:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response


@app.route('/')
@app.route('/home')
def home():
    """ View function for apps Home Page"""
    return "<h1>Welcome to Vestoblog</h1>"
    # return render_template("home.html")


@app.route('/register', methods=["POST"])
def register():
    """ Registers a new user and logs account in upon success """

    firstname = request.form.get("firstname", None)
    lastname = request.form.get("lastname", None)
    email = request.form.get("email", None)
    password = request.form.get('password', None)

    if (not firstname) or (not lastname) or (not email) or (not password):
        return jsonify(msg="No field can be empty"), 400

    check_email = User.query.filter_by(email=email).first()
    if check_email:
        return jsonify(msg='That email already exists'), 400

    user = User(firstname=firstname, lastname=lastname, email=email)
    user.create_password_hash(password)
    db.session.add(user)
    db.session.commit()
    response = jsonify(msg='Account created successfully')
    access_token = create_access_token(identity=user)
    set_access_cookies(response, access_token)
    return response, 200


@app.route('/login', methods=['GET', 'POST'])
def login():
    """ Logs in a user account """

    # Checks if a user accessing the route throughg a GET request
    # is already logged in or not
    if verify_jwt_in_request(optional=True):
        return jsonify(msg="Already Logged In")

    elif request.method == "POST":
        email = request.form.get("email", None)
        password = request.form.get("password", None)

        if not email or not password:
            return jsonify(msg="No field can be empty"), 401

        user = User.query.filter_by(email=email).first()
        if user and user.check_password_hash(password):
            response = jsonify({"msg": "Login Successful"})
            access_token = create_access_token(identity=user)
            set_access_cookies(response, access_token)
            return response, 200
        else:
            return jsonify(msg="Invalid email or password"), 401


@app.route('/profile/')
@jwt_required()
def profile():
    """ Sends profile information of current logged in user """

    response = {
        "firstname": current_user.firstname,
        "lastname": current_user.lastname,
        "email": current_user.email,
        "role": current_user.role,
        "id": current_user.id
    }
    return jsonify(response)


@app.route('/logout')
def logout():
    """ Logs out user account """

    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


@app.route('/unregister')
@jwt_required()
def unregister():
    """ Deletes a user's account from the databse """
    user = current_user
    response = jsonify(msg="Account deleted succesfully")
    unset_jwt_cookies(response)
    db.session.delete(user)
    db.session.commit()

    return response
