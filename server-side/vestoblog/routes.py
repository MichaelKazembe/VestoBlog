#!/usr/bin/env python3
""" Defines routes and view functions for the vestoblog app """
from vestoblog import app
from flask import render_template, request


@app.route('/')
@app.route('/home')
def home():
    """ View function for apps Home Page"""
    return "<h1>Welcome to Vestoblog</h1>"
    # return render_template("home.html")


@app.route('/register')
def register():
    return "<h1>Welcome to Vestoblog</h1>"
    # return render_template("register.html")


@app.route('/login')
def login():
    return "<h1>Welcome to Vestoblog</h1>"
    # return render_template("login.html")


@app.route('/profile/')
def profile():
    return "<h1>Welcome to Vestoblog</h1>"
    # return render_template("profile.html")


@app.route('/logout')
def logout():
    return "<h1>Welcome to Vestoblog</h1>"
    # return render_template("home.html")


@app.route('/unregister')
def unregister():
    return "<h1>Welcome to Vestoblog</h1>"
    # return render_template("home.html")
