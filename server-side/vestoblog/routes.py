#!/usr/bin/env python3
""" Defines routes and view functions for the vestoblog app """

from vestoblog import app, db
from flask import render_template, request, Flask, jsonify
from vestoblog.models import User, Post

from flask_jwt_extended import create_access_token, get_jwt_identity
from flask_jwt_extended import jwt_required, JWTManager

app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)


@app.route('/', methods=['GET'])
@jwt_required()
def home():
    """ View function for apps Home Page"""
    return "<h1>Welcome to Vestoblog</h1>"
    #return render_template("home.html")


@app.route('/register', methods=['POST'])
def register():
    email = request.form['email']
    password = request.form['password']
    test = User.query.filter_by(email=email).first()
    if test:
        return jsonify(message='That email already exists'), 409
    else:
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        user = User(username=username, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        return jsonify(message='User created successfully'), 201
        #return redirect(url_for('home.html'))


@app.route('/login', methods=["POST"])
def login():
    if request.is_json:
        email = request.json['email']
        password = request.json['password']
    else:
        email = request.form['email']
        password = request.form['password']

    test = User.query.filter_by(email=email, password=password).first()
    if test:
        access_token = create_access_token(identify=email)
        return jsonify(message='Login Successful', access_token=access_token)
    else:
        return jsonify('Bad email or Password'), 401
        return redirect(url_for('register.html'))
    return "<h1>Login to your User Profile</h1>"
    # return render_template("login.html")


@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


@app.route('/profile/')
def profile():
    return "<h1>User Profile Information Page</h1>"
    # return render_template("profile.html")


@app.route('/logout')
def logout():
    return "<h1>Logging out User.....See you later</h1>"
    # return render_template("home.html")


@app.route('/unregister')
def unregister():
    return "<h1>Sad to see you leave, Comeback soon</h1>"
    # return render_template("home.html")
