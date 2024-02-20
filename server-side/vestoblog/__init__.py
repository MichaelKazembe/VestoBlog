#!/usr/bin/env python3
""" Initialisation for flask app and setting configuarations """
from flask import Flask


app = Flask(__name__)

from vestoblog import routes
