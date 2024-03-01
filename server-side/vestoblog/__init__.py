#!/usr/bin/env python3
""" Initialization for flask app and setting configurations """
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_jwt_extended import JWTManager
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
db = SQLAlchemy(app)
jwt = JWTManager(app)

app.config['CORS_HEADERS'] = 'Content-Type'

from vestoblog import routes, models
