#!/usr/bin/env python3
""" Defines routes and view functions for the vestoblog app """
from vestoblog import app, db
from flask import render_template, request
from vestoblog.models import User, Post


@app.route('/')
@app.route('/home')
def home():
    """ View function for apps Home Page"""
    return "<h1>Welcome to Vestoblog</h1>"
    # return render_template("home.html")


@app.route('/register')
def register():
    return "<h1>Register a User Profile</h1>"
    # return render_template("register.html")


@app.route('/login')
def login():
    return "<h1>Login to your User Profile</h1>"
    # return render_template("login.html")


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
