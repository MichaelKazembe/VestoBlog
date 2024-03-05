#!/usr/bin/env python3
""" Initialization for flask app and setting configurations """
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_jwt_extended import JWTManager

app = Flask(__name__)
# CORS(app)
app.config.from_object(Config)
db = SQLAlchemy(app)
jwt = JWTManager(app)

from vestoblog import routes, models
