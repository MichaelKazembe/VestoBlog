#!/usr/bin/env python3
""" Initialisation for flask app and setting configuarations """
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_jwt_extended import JWTManager


app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
jwt = JWTManager(app)

from vestoblog import routes, models
